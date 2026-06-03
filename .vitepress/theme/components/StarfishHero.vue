<script setup>
/**
 * Animated Starfish hero for the docs homepage.
 *
 * Act 1  capability chips (Code, Manage, Design, Write, Analyze, Automate)
 *        fly in from the page edges — bottom, sides, top — into a ring
 *        around where the logo will appear.
 * Act 2  the chips collapse inward into that point.
 * Act 3  the Starfish mark crystallises out of the convergence, then a
 *        yellow shock-ring + glint lock it in.
 *
 * Colours/feel follow the docs brand: warm-white shapes, near-black tiles,
 * thin borders, yellow accent, solid effects (no translucent washes).
 * The chips render in a fixed full-viewport layer (appended to <body>) so
 * they can travel across the whole page. Click the logo to replay.
 */
import { onMounted, onBeforeUnmount, ref } from 'vue'

const root = ref(null)
const logoEl = ref(null)

const GLIDE = 'cubic-bezier(0.2, 0.7, 0.18, 1)'    // long visible travel, soft landing
const OUT   = 'cubic-bezier(0.16, 1, 0.3, 1)'       // snappy crystallise
const IN    = 'cubic-bezier(0.55, 0, 0.85, 0.35)'   // accelerate into the centre
const BACK  = 'cubic-bezier(0.34, 1.56, 0.64, 1)'   // pop with overshoot

/* ---- capability chips: label, icon, ring slot (deg), entry edge ---- */
const ICON = {
  code:    '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
  manage:  '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/>',
  design:  '<path d="M8.3 10a.7.7 0 0 1-.6-1L11 3.2a.7.7 0 0 1 1.2 0l3.4 5.8a.7.7 0 0 1-.6 1Z"/><rect x="3" y="14" width="7" height="7" rx="1"/><circle cx="17.5" cy="17.5" r="3.5"/>',
  write:   '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/>',
  analyze: '<line x1="3" y1="20" x2="21" y2="20"/><line x1="6" y1="20" x2="6" y2="16"/><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/>',
  automate:'<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
}
const CHIPS = [
  { label: 'Code',     icon: ICON.code,     slot: -90, from: 'top'         },
  { label: 'Manage',   icon: ICON.manage,   slot: -30, from: 'right'       },
  { label: 'Design',   icon: ICON.design,   slot:  30, from: 'bottomright' },
  { label: 'Write',    icon: ICON.write,    slot:  90, from: 'bottom'      },
  { label: 'Analyze',  icon: ICON.analyze,  slot: 150, from: 'bottomleft'  },
  { label: 'Automate', icon: ICON.automate, slot: 210, from: 'left'        },
]

/* ---- logo pieces — crystallise out of the convergence point ---- */
const STEPS = [
  { id: 'bg',      d:   0, dur: 620, ease: GLIDE, bg: true, fromScale: .82 },
  { id: 'slashUp', d: 160, dur: 860, ease: OUT,  tx:  120, ty: -300, rot:  80, scale: .40, blur: 14 },
  { id: 'slashLo', d: 260, dur: 860, ease: OUT,  tx: -120, ty:  300, rot: -80, scale: .40, blur: 14 },
  { id: 'chevTL',  d: 120, dur: 880, ease: OUT,  tx: -240, ty: -200, rot:-120, scale: .30, blur: 14 },
  { id: 'chevTR',  d: 190, dur: 880, ease: OUT,  tx:  240, ty: -200, rot: 120, scale: .30, blur: 14 },
  { id: 'chevBL',  d: 260, dur: 880, ease: OUT,  tx: -240, ty:  200, rot: 120, scale: .30, blur: 14 },
  { id: 'chevBR',  d: 330, dur: 880, ease: OUT,  tx:  240, ty:  200, rot:-120, scale: .30, blur: 14 },
  { id: 'glyphX',  d: 560, dur: 680, ease: BACK, tx: -320, ty:   40, rot:-200, scale: 0,   blur: 6 },
  { id: 'glyphEq', d: 680, dur: 680, ease: BACK, tx:  320, ty:  -40, rot: 200, scale: 0,   blur: 6 },
]

/* ---- timeline (ms) ---- */
const CHIP_IN_STAGGER = 80,  CHIP_IN_DUR = 900
const CONVERGE_AT = 1450, CONVERGE_STAGGER = 50, CONVERGE_DUR = 580
const LOGO_START = 1820
const FINALE_AT = 3080

let running = []
let timers = []
let chipLayer = null
let reduce = false

const q = (id) => root.value && root.value.querySelector('#' + id)

function entryPoint (kind, cx, cy, vw, vh) {
  switch (kind) {
    case 'top':         return [cx,         -0.28 * vh]
    case 'left':        return [-0.34 * vw,  cy]
    case 'right':       return [ 1.34 * vw,  cy]
    case 'bottom':      return [cx,           1.30 * vh]
    case 'bottomleft':  return [-0.22 * vw,   1.28 * vh]
    case 'bottomright': return [ 1.22 * vw,   1.28 * vh]
    default:            return [cx,           1.30 * vh]
  }
}

function destroyChips () { if (chipLayer) { chipLayer.remove(); chipLayer = null } }

function clearAll () {
  running.forEach(a => { try { a.cancel() } catch (e) {} }); running = []
  timers.forEach(t => clearTimeout(t)); timers = []
  const logo = logoEl.value
  if (logo) logo.classList.remove('lit', 'breathe', 'idle')
  const ring = q('ring'); if (ring) ring.classList.remove('pulse')
  const sheen = q('sheen'); if (sheen) sheen.classList.remove('sweep')
  destroyChips()
}

function settleStatic () {
  STEPS.forEach(s => {
    const el = q(s.id); if (!el) return
    el.style.opacity = '1'; el.style.transform = 'none'; el.style.filter = 'none'
  })
  logoEl.value && logoEl.value.classList.add('lit')
}

function play () {
  clearAll()
  if (reduce) { settleStatic(); return }

  const rect = logoEl.value.getBoundingClientRect()
  const cx = rect.left + rect.width / 2
  const cy = rect.top + rect.height / 2
  const sx = window.scrollX || 0, sy = window.scrollY || 0  // viewport → document offset
  const vw = window.innerWidth, vh = window.innerHeight
  const R = Math.min(Math.max(Math.min(vw, vh) * 0.24, 148), 192)

  // --- Acts 1 + 2: chips enter from the page edges, ring up, collapse inward ---
  chipLayer = document.createElement('div')
  chipLayer.className = 'sf-chip-layer'
  document.body.appendChild(chipLayer)

  CHIPS.forEach((c, i) => {
    const rad = c.slot * Math.PI / 180, cos = Math.cos(rad), sin = Math.sin(rad)
    const slotX = cx + R * cos, slotY = cy + R * sin

    const anchor = document.createElement('div')
    anchor.className = 'sf-chip-anchor'
    anchor.style.left = (slotX + sx) + 'px'   // document-space position
    anchor.style.top = (slotY + sy) + 'px'
    const chip = document.createElement('div')
    chip.className = 'sf-chip'
    chip.innerHTML =
      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${c.icon}</svg><span>${c.label}</span>`
    anchor.appendChild(chip)
    chipLayer.appendChild(anchor)

    const [ex, ey] = entryPoint(c.from, cx, cy, vw, vh)
    const eDX = (ex - slotX).toFixed(0), eDY = (ey - slotY).toFixed(0)  // enter from off-screen edge
    const cDX = (-R * cos).toFixed(0),   cDY = (-R * sin).toFixed(0)    // collapse to logo centre

    const enterStart    = i * CHIP_IN_STAGGER
    const enterEnd      = enterStart + CHIP_IN_DUR
    const collapseStart = CONVERGE_AT + i * CONVERGE_STAGGER
    const collapseEnd   = collapseStart + CONVERGE_DUR
    const dur = collapseEnd - enterStart

    running.push(chip.animate([
      { offset: 0,
        transform: `translate(${eDX}px, ${eDY}px) scale(.55) rotate(-6deg)`, opacity: 0, filter: 'blur(10px)', easing: GLIDE },
      { offset: (enterEnd - enterStart) / dur,
        transform: 'translate(0px, 0px) scale(1) rotate(0deg)', opacity: 1, filter: 'blur(0px)', easing: 'linear' },
      { offset: (collapseStart - enterStart) / dur,
        transform: 'translate(0px, 0px) scale(1) rotate(0deg)', opacity: 1, filter: 'blur(0px)', easing: IN },
      { offset: 1,
        transform: `translate(${cDX}px, ${cDY}px) scale(.12)`, opacity: 0, filter: 'blur(12px)' },
    ], { duration: dur, delay: enterStart, fill: 'both' }))
  })

  const chipsDone = CONVERGE_AT + (CHIPS.length - 1) * CONVERGE_STAGGER + CONVERGE_DUR
  timers.push(setTimeout(destroyChips, chipsDone + 80))

  // --- Act 3: logo crystallises out of the centre ---
  for (const s of STEPS) {
    const el = q(s.id); if (!el) continue
    let from, to
    if (s.bg) {
      from = { transform: `scale(${s.fromScale})`, opacity: 0 }
      to   = { transform: 'scale(1)', opacity: 1 }
    } else {
      from = { transform: `translate(${s.tx}px, ${s.ty}px) rotate(${s.rot}deg) scale(${s.scale})`, opacity: 0, filter: `blur(${s.blur}px)` }
      to   = { transform: 'translate(0px, 0px) rotate(0deg) scale(1)', opacity: 1, filter: 'blur(0px)' }
    }
    running.push(el.animate([from, to], { duration: s.dur, delay: LOGO_START + s.d, easing: s.ease, fill: 'both' }))
  }

  // --- finale: yellow ring, glint, breath, then gentle idle ---
  timers.push(setTimeout(() => {
    const logo = logoEl.value; if (!logo) return
    logo.classList.add('lit', 'breathe')
    const ring = q('ring'); ring && ring.classList.add('pulse')
    const sheen = q('sheen'); sheen && sheen.classList.add('sweep')
  }, FINALE_AT))
  timers.push(setTimeout(() => { logoEl.value && logoEl.value.classList.add('idle') }, FINALE_AT + 1100))
}

onMounted(() => {
  reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  play()
})
onBeforeUnmount(clearAll)
</script>

<template>
  <div class="sf-hero" ref="root" @click="play" title="Replay">
    <div class="sf-logo" ref="logoEl">
      <div class="sf-ring" id="ring"></div>
      <svg viewBox="0 0 512 512" role="img" aria-label="Starfish logo">
        <rect id="bg" class="pc" x="0" y="0" width="512" height="512" rx="104"
              fill="var(--sf-plate)" stroke="var(--sf-border)" stroke-width="3"/>
        <g fill="var(--sf-ink)">
          <path id="chevTL" class="pc" d="M162 68 L64 160 L162 251 L162 204 L114 160 L162 115 Z"/>
          <path id="chevTR" class="pc" d="M350 68 L448 160 L350 251 L350 204 L398 160 L350 115 Z"/>
          <path id="chevBL" class="pc" d="M162 444 L64 352 L162 261 L162 308 L114 352 L162 397 Z"/>
          <path id="chevBR" class="pc" d="M350 444 L448 352 L350 261 L350 308 L398 352 L350 397 Z"/>
          <path id="slashUp" class="pc" d="M292 65 L346 65 L219 251 L165 251 Z"/>
          <path id="slashLo" class="pc" d="M293 260 L347 260 L218 447 L164 447 Z"/>
          <g id="glyphX" class="pc">
            <rect x="144" y="152.5" width="58" height="13" rx="2" transform="rotate(45 173 159)"/>
            <rect x="144" y="152.5" width="58" height="13" rx="2" transform="rotate(-45 173 159)"/>
          </g>
          <g id="glyphEq" class="pc">
            <rect x="302" y="335" width="75" height="12" rx="4"/>
            <rect x="302" y="359" width="75" height="12" rx="4"/>
          </g>
        </g>
      </svg>
      <div class="sf-sheen-clip"><div class="sf-sheen" id="sheen"></div></div>
    </div>
  </div>
</template>

<style scoped>
.sf-hero{
  --sf-ink:    #f0ebe1;
  --sf-plate:  #0d0d0d;
  --sf-border: #2a2a2a;
  --sf-accent: 255, 220, 0;
  display:grid; place-items:center; width:100%;
  cursor:pointer; user-select:none;
}
.sf-logo{
  position:relative;
  width: clamp(208px, 24vw, 320px);
  height: clamp(208px, 24vw, 320px);
  border-radius: 20.3%;
  transition: box-shadow .8s ease;
}
.sf-logo.lit{
  box-shadow:
    0 28px 64px -30px rgba(0,0,0,.85),
    0 0 46px -10px rgba(var(--sf-accent), .34);
}
.sf-logo.breathe{ animation: sfBreathe 1200ms cubic-bezier(.16,1,.3,1) forwards; }
@keyframes sfBreathe{ 0%{transform:scale(1);} 38%{transform:scale(1.035);} 100%{transform:scale(1);} }
.sf-logo.idle{ animation: sfFloat 6.5s ease-in-out 0s infinite; }
@keyframes sfFloat{ 0%,100%{transform:translateY(-4px);} 50%{transform:translateY(4px);} }

.sf-logo svg{ display:block; width:100%; height:100%; overflow:visible; }
.pc{ transform-box: fill-box; transform-origin:50% 50%; opacity:0; will-change: transform, opacity, filter; }

.sf-ring{
  position:absolute; inset:0; border-radius:22%;
  border:2px solid rgba(var(--sf-accent), .6);
  opacity:0; pointer-events:none; transform-origin:50% 50%;
}
.sf-ring.pulse{ animation: sfRing 950ms cubic-bezier(.22,.61,.36,1) forwards; }
@keyframes sfRing{ 0%{opacity:.6;transform:scale(.72);} 100%{opacity:0;transform:scale(1.85);} }

.sf-sheen-clip{ position:absolute; inset:0; border-radius:20.3%; overflow:hidden; pointer-events:none; }
.sf-sheen{
  position:absolute; inset:-30% -60%; transform:translateX(-130%); opacity:0; mix-blend-mode:screen;
  background: linear-gradient(105deg, transparent 42%, rgba(240,235,225,0) 47%,
    rgba(240,235,225,.5) 50%, rgba(240,235,225,0) 53%, transparent 58%);
}
.sf-sheen.sweep{ animation: sfSweep 900ms cubic-bezier(.22,.61,.36,1) forwards; }
@keyframes sfSweep{ 0%{transform:translateX(-130%);opacity:0;} 16%{opacity:1;} 100%{transform:translateX(130%);opacity:0;} }

@media (prefers-reduced-motion: reduce){
  .sf-logo.breathe,.sf-logo.idle,.sf-ring.pulse{ animation:none; }
  .sf-sheen{ display:none; }
}
</style>

<!-- chips live in a body-level layer, so styles here are intentionally global -->
<style>
/* absolute (not fixed) so the chips are anchored to the page and scroll away
   with the hero, instead of following the viewport when the user scrolls. */
.sf-chip-layer{ position:absolute; top:0; left:0; width:100%; height:0; overflow:visible; z-index:5; pointer-events:none; }
.sf-chip-anchor{ position:absolute; transform: translate(-50%, -50%); }
.sf-chip{
  display:inline-flex; align-items:center; gap:9px; white-space:nowrap;
  padding:10px 15px; border-radius:12px;
  background:#131313; border:1px solid #2a2a2a; color:#f0ebe1;
  font-family:"Space Grotesk","Manrope",-apple-system,system-ui,sans-serif;
  font-weight:500; font-size:14px; letter-spacing:.01em;
  box-shadow: 0 14px 32px -16px rgba(0,0,0,.85);
  opacity:0; will-change: transform, opacity, filter;
}
.sf-chip svg{ width:18px; height:18px; color:#ffdc00; flex:0 0 auto; }
</style>
