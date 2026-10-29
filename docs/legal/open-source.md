---
title: Open-source licences
---

# Open-source licences

Starfish is built with open-source software. Each component below keeps its own licence, and nothing in our [Terms of Service](/legal/terms) limits your rights under those licences. The full licence texts ship inside the app (Settings > General > Open-source licenses, and the file THIRD_PARTY_LICENSES.md in Starfish.app/Contents/Resources).

## FFmpeg

Starfish uses FFmpeg 8.1.3 (https://ffmpeg.org), licensed under the GNU Lesser General Public License version 2.1 or later (LGPL). Starfish does not own FFmpeg.

FFmpeg is a separate program inside the app at Starfish.app/Contents/Resources/bin/ffmpeg. You may replace it with your own build.

It is built without changes from the official release https://ffmpeg.org/releases/ffmpeg-8.1.3.tar.xz and the library archives listed below, with the configuration below.

Written offer: for at least three years from the date you received this version of Starfish, we will give anyone who asks the complete corresponding source code of this FFmpeg build, including the build script, for no more than our cost of distributing it. Write to Starfish Ad Age LLC, 140 E Tyler St, Suite 200, Longview, TX 75601, USA, or email communications@starfishadage.com.

Source archives (SHA-256):

```
pkgconf https://distfiles.ariadne.space/pkgconf/pkgconf-3.0.8.tar.xz 943f0bc88bcaeceb630b00262e2a8ad5ea4fac3fba72a4267d8b9ec6b35d1194
automake https://ftpmirror.gnu.org/automake/automake-1.19.tar.xz e3e2c2e3abf37898138db5b6c1d1dc35c9160c5978be7947d2c741705251d445
opus https://ftp.osuosl.org/pub/xiph/releases/opus/opus-1.6.1.tar.gz 6ffcb593207be92584df15b32466ed64bbec99109f007c82205f0194572411a1
libogg https://ftp.osuosl.org/pub/xiph/releases/ogg/libogg-1.3.6.tar.gz 83e6704730683d004d20e21b8f7f55dcb3383cdf84c0daedf30bde175f774638
libvorbis https://ftp.osuosl.org/pub/xiph/releases/vorbis/libvorbis-1.3.7.tar.xz b33cc4934322bcbf6efcbacf49e3ca01aadbea4114ec9589d1b1e9d20f72954b
lame https://downloads.sourceforge.net/project/lame/lame/4.0/lame-4.0.tar.gz 3df5124d5ad3a98312ffd7ba6a9b36230e4f8a3e66d3ce0f425e336c32d216eb
libvpx https://github.com/webmproject/libvpx/archive/refs/tags/v1.17.0.tar.gz 1020f184046187baa2985dbde38e0691f49c44088bca7a1842b0236c6081dc0a
libwebp https://storage.googleapis.com/downloads.webmproject.org/releases/webp/libwebp-1.6.0.tar.gz e4ab7009bf0629fd11982d4c2aa83964cf244cffba7347ecd39019a9e38c4564
dav1d https://code.videolan.org/videolan/dav1d/-/archive/1.5.4/dav1d-1.5.4.tar.bz2 2abfb0c89212e6e4733a54e0ae509ec00a5b845a6360946f918806e14aedb011
zimg https://github.com/sekrit-twc/zimg/archive/refs/tags/release-3.0.6.tar.gz be89390f13a5c9b2388ce0f44a5e89364a20c1c57ce46d382b1fcc3967057577
freetype https://downloads.sourceforge.net/project/freetype/freetype2/2.15.0/freetype-2.15.0.tar.xz 93cd47eb719c325107f2d3cf087d06299e944c3b48a40b55537302304dea1dd5
fribidi https://github.com/fribidi/fribidi/releases/download/v1.0.17/fribidi-1.0.17.tar.xz 6949dcde27d41cebad1fd741fcafc36d55a1020d2d872d4a6eb3914caabbada2
harfbuzz https://github.com/harfbuzz/harfbuzz/releases/download/14.6.0/harfbuzz-14.6.0.tar.xz d07a007327277708a2a73ae437887cdbaf282937f6d03ca5467723e9099af586
fontconfig https://gitlab.freedesktop.org/fontconfig/fontconfig/-/archive/2.18.3/fontconfig-2.18.3.tar.gz 9ae01e1d53acdef56010c5451cd34aa41d325b2faccd8606448d8fa01b2496b3
libass https://github.com/libass/libass/releases/download/0.17.5/libass-0.17.5.tar.xz 2dca25c0e0c837ddf00b52011b3f82cac1e4ddd3ad018227806b0c2288864acc
svtav1 https://gitlab.com/AOMediaCodec/SVT-AV1/-/archive/v4.2.0/SVT-AV1-v4.2.0.tar.bz2 512f2ea5649e3e76c2dddcc25c2556fb67a9582baaab207c9c96161c94659dad
ffmpeg https://ffmpeg.org/releases/ffmpeg-8.1.3.tar.xz 7138d28c96d9d3e3af4ee3d8cad72741f8ffb40da90c1112235dea3ecd3178a3
```

Build configuration:

```
configuration:
    --prefix=/tmp/starfish-r1/build/prefix
    --arch=arm64
    --cc=clang
    --cxx=clang++
    --pkg-config=pkg-config --pkg-config-flags=--static
    --extra-cflags='-mmacosx-version-min=12.0 -I/tmp/starfish-r1/build/prefix/include'
    --extra-ldflags='-mmacosx-version-min=12.0 -L/tmp/starfish-r1/build/prefix/lib'
    --extra-libs=-lc++
    --disable-ffplay
    --disable-ffprobe
    --disable-doc
    --disable-debug
    --enable-videotoolbox
    --enable-audiotoolbox
    --enable-libopus
    --enable-libvorbis
    --enable-libmp3lame
    --enable-libvpx
    --enable-libwebp
    --enable-libdav1d
    --enable-libzimg
    --enable-libfreetype
    --enable-libharfbuzz
    --enable-libfribidi
    --enable-libass
    --enable-fontconfig
    --enable-libsvtav1

Exiting with exit code 0
```

The build is made by the script `scripts/build-ffmpeg-lgpl.sh`: it downloads the archives above, checks each SHA-256, builds the libraries and FFmpeg as a static macOS arm64 program without `--enable-gpl` or `--enable-nonfree`, and writes the licence file that ships next to the program.

## Electron and Chromium

Electron 41.3.0 bundles Chromium, Node.js and other components. Their notices ship in Starfish.app/Contents/Resources/LICENSES.chromium.html.

## Components (700)

| Component | Version | Licence | Copyright |
| --- | --- | --- | --- |
| @ai-sdk/gateway | 3.0.170 | Apache-2.0 | Copyright 2023 Vercel, Inc. |
| @ai-sdk/mcp | 1.0.70 | Apache-2.0 | Copyright 2023 Vercel, Inc. |
| @ai-sdk/provider | 3.0.15 | Apache-2.0 | Copyright 2023 Vercel, Inc. |
| @ai-sdk/provider-utils | 4.0.45 | Apache-2.0 | - |
| @antfu/install-pkg | 1.1.0 | MIT | Copyright (c) 2021 Anthony Fu <https://github.com/antfu> |
| @babel/runtime | 7.27.0 | MIT | Copyright (c) 2014-present Sebastian McKenzie and other contributors |
| @braintree/sanitize-url | 7.1.2 | MIT | Copyright (c) 2017 Braintree |
| @chevrotain/types | 11.1.2 | Apache-2.0 | copyright license to reproduce, prepare Derivative Works of, |
| @edge-runtime/cookies | 6.0.0 | MIT | - |
| @edge-runtime/ponyfill | 4.0.0 | MIT | - |
| @edge-runtime/primitives | 6.0.0 | MIT | - |
| @fast-csv/format | 4.3.5 | MIT | Copyright (c) 2011-2019 C2FO |
| @fast-csv/parse | 4.3.6 | MIT | Copyright (c) 2011-2019 C2FO |
| @fastify/busboy | 2.1.1 | MIT | Copyright Brian White. All rights reserved. |
| @hono/node-server | 1.19.13 | MIT | Copyright (c) 2022 - present, Yusuke Wada and Hono contributors |
| @hono/node-server | 1.19.14 | MIT | Copyright (c) 2022 - present, Yusuke Wada and Hono contributors |
| @hono/node-server | 2.1.1 | MIT | Copyright (c) 2022 - present, Yusuke Wada and Hono contributors |
| @iconify-icons/simple-icons | 1.2.74 | CC0-1.0 | - |
| @iconify/react | 6.0.2 | MIT | Copyright (c) 2019-PRESENT Vjacheslav Trushkin |
| @iconify/types | 2.0.0 | MIT | Copyright (c) 2021 - 2022 Vjacheslav Trushkin / Iconify OÜ |
| @iconify/utils | 3.1.4 | MIT | Copyright (c) 2021-PRESENT Vjacheslav Trushkin |
| @img/colour | 1.1.0 | MIT | Copyright (c) 2012 Heather Arthur |
| @mermaid-js/parser | 1.2.1 | MIT | Copyright (c) 2023 Yokozuna59 |
| @modelcontextprotocol/sdk | 1.27.1 | MIT | Copyright (c) 2024 Anthropic, PBC |
| @modelcontextprotocol/sdk | 1.29.0 | MIT | Copyright (c) 2024 Anthropic, PBC |
| @modelcontextprotocol/sdk | 1.30.0 | MIT | Copyright (c) 2024 Anthropic, PBC |
| @myriaddreamin/typst-ts-node-compiler | 0.7.0 | Apache-2.0 | copyright license to reproduce, prepare Derivative Works of, |
| @myriaddreamin/typst-ts-node-compiler-darwin-arm64 | 0.7.0 | Apache-2.0 | - |
| @napi-rs/canvas | 0.1.99 | MIT | Copyright (c) 2020 lynweklm@gmail.com |
| @napi-rs/canvas-darwin-arm64 | 0.1.99 | MIT | Copyright (c) 2011 Google Inc. All rights reserved. |
| @next/env | 16.2.3 | MIT | Next.js Team <support@vercel.com> |
| @next/swc-darwin-arm64 | 16.2.3 | MIT | - |
| @nodelib/fs.scandir | 2.1.5 | MIT | Copyright (c) Denis Malinochkin |
| @nodelib/fs.stat | 2.0.5 | MIT | Copyright (c) Denis Malinochkin |
| @nodelib/fs.walk | 1.2.8 | MIT | Copyright (c) Denis Malinochkin |
| @opentelemetry/api | 1.9.0 | Apache-2.0 | copyright license to reproduce, prepare Derivative Works of, |
| @pdf-lib/standard-fonts | 1.0.0 | MIT | Copyright (c) 2018 Andrew Dillon |
| @pdf-lib/upng | 1.0.1 | MIT | Copyright (c) 2017 Photopea |
| @standard-schema/spec | 1.1.0 | MIT | Copyright (c) 2024 Colin McDonnell |
| @supabase/auth-js | 2.99.1 | MIT | Copyright (c) 2020 Supabase |
| @supabase/functions-js | 2.99.1 | MIT | Supabase |
| @supabase/postgrest-js | 2.99.1 | MIT | Supabase |
| @supabase/realtime-js | 2.99.1 | MIT | Supabase |
| @supabase/storage-js | 2.99.1 | MIT | Supabase |
| @supabase/supabase-js | 2.99.1 | MIT | Supabase |
| @swc/helpers | 0.5.15 | Apache-2.0 | copyright license to reproduce, prepare Derivative Works of, |
| @tanstack/query-core | 5.90.20 | MIT | Copyright (c) 2021-present Tanner Linsley |
| @tanstack/react-query | 5.90.21 | MIT | Copyright (c) 2021-present Tanner Linsley |
| @types/d3 | 7.4.3 | MIT | Copyright (c) Microsoft Corporation. |
| @types/d3-array | 3.2.2 | MIT | Copyright (c) Microsoft Corporation. |
| @types/d3-axis | 3.0.6 | MIT | Copyright (c) Microsoft Corporation. |
| @types/d3-brush | 3.0.6 | MIT | Copyright (c) Microsoft Corporation. |
| @types/d3-chord | 3.0.6 | MIT | Copyright (c) Microsoft Corporation. |
| @types/d3-color | 3.1.3 | MIT | Copyright (c) Microsoft Corporation. |
| @types/d3-contour | 3.0.6 | MIT | Copyright (c) Microsoft Corporation. |
| @types/d3-delaunay | 6.0.4 | MIT | Copyright (c) Microsoft Corporation. |
| @types/d3-dispatch | 3.0.7 | MIT | Copyright (c) Microsoft Corporation. |
| @types/d3-drag | 3.0.7 | MIT | Copyright (c) Microsoft Corporation. |
| @types/d3-dsv | 3.0.7 | MIT | Copyright (c) Microsoft Corporation. |
| @types/d3-ease | 3.0.2 | MIT | Copyright (c) Microsoft Corporation. |
| @types/d3-fetch | 3.0.7 | MIT | Copyright (c) Microsoft Corporation. |
| @types/d3-force | 3.0.10 | MIT | Copyright (c) Microsoft Corporation. |
| @types/d3-format | 3.0.4 | MIT | Copyright (c) Microsoft Corporation. |
| @types/d3-geo | 3.1.1 | MIT | Copyright (c) Microsoft Corporation. |
| @types/d3-hierarchy | 3.1.7 | MIT | Copyright (c) Microsoft Corporation. |
| @types/d3-interpolate | 3.0.4 | MIT | Copyright (c) Microsoft Corporation. |
| @types/d3-path | 3.1.1 | MIT | Copyright (c) Microsoft Corporation. |
| @types/d3-polygon | 3.0.2 | MIT | Copyright (c) Microsoft Corporation. |
| @types/d3-quadtree | 3.0.6 | MIT | Copyright (c) Microsoft Corporation. |
| @types/d3-random | 3.0.4 | MIT | Copyright (c) Microsoft Corporation. |
| @types/d3-scale | 4.0.9 | MIT | Copyright (c) Microsoft Corporation. |
| @types/d3-scale-chromatic | 3.1.0 | MIT | Copyright (c) Microsoft Corporation. |
| @types/d3-selection | 3.0.11 | MIT | Copyright (c) Microsoft Corporation. |
| @types/d3-shape | 3.1.8 | MIT | Copyright (c) Microsoft Corporation. |
| @types/d3-time | 3.0.4 | MIT | Copyright (c) Microsoft Corporation. |
| @types/d3-time-format | 4.0.3 | MIT | Copyright (c) Microsoft Corporation. |
| @types/d3-timer | 3.0.2 | MIT | Copyright (c) Microsoft Corporation. |
| @types/d3-transition | 3.0.9 | MIT | Copyright (c) Microsoft Corporation. |
| @types/d3-zoom | 3.0.8 | MIT | Copyright (c) Microsoft Corporation. |
| @types/debug | 4.1.12 | MIT | Copyright (c) Microsoft Corporation. |
| @types/estree | 1.0.8 | MIT | Copyright (c) Microsoft Corporation. |
| @types/estree-jsx | 1.0.5 | MIT | Copyright (c) Microsoft Corporation. |
| @types/geojson | 7946.0.16 | MIT | Copyright (c) Microsoft Corporation. |
| @types/hast | 3.0.4 | MIT | Copyright (c) Microsoft Corporation. |
| @types/katex | 0.16.8 | MIT | Copyright (c) Microsoft Corporation. |
| @types/mdast | 4.0.4 | MIT | Copyright (c) Microsoft Corporation. |
| @types/ms | 2.1.0 | MIT | Copyright (c) Microsoft Corporation. |
| @types/node | 14.18.63 | MIT | Copyright (c) Microsoft Corporation. |
| @types/node | 20.19.35 | MIT | Copyright (c) Microsoft Corporation. |
| @types/node | 22.20.1 | MIT | Copyright (c) Microsoft Corporation. |
| @types/phoenix | 1.6.7 | MIT | Copyright (c) Microsoft Corporation. |
| @types/react | 19.2.14 | MIT | Copyright (c) Microsoft Corporation. |
| @types/trusted-types | 2.0.7 | MIT | Copyright (c) Microsoft Corporation. |
| @types/unist | 2.0.11 | MIT | Copyright (c) Microsoft Corporation. |
| @types/unist | 3.0.3 | MIT | Copyright (c) Microsoft Corporation. |
| @types/ws | 8.18.1 | MIT | Copyright (c) Microsoft Corporation. |
| @ungap/structured-clone | 1.3.0 | ISC | Copyright (c) 2021, Andrea Giammarchi, @WebReflection |
| @upsetjs/venn.js | 2.0.0 | MIT | Copyright (c) 2013 Ben Frederickson |
| @vercel/og | 0.11.1 | MPL-2.0 | (c) under Patent Claims infringed by Covered Software in the absence of |
| @vercel/oidc | 3.2.0 | Apache-2.0 | copyright license to reproduce, prepare Derivative Works of, |
| @xmldom/xmldom | 0.8.13 | MIT | Copyright 2019 - present Christopher J. Brody and other contributors, as listed in: https://github.com/xmldom/xmldom/graphs/contributors |
| @xterm/addon-fit | 0.11.0 | MIT | Copyright (c) 2019, The xterm.js authors (https://github.com/xtermjs/xterm.js) |
| @xterm/xterm | 6.0.0 | MIT | Copyright (c) 2017-2019, The xterm.js authors (https://github.com/xtermjs/xterm.js) |
| @xyflow/react | 12.12.0 | MIT | Copyright (c) 2019-2025 webkid GmbH |
| @xyflow/system | 0.0.83 | MIT | Copyright (c) 2019-2025 webkid GmbH |
| accepts | 2.0.0 | MIT | Copyright (c) 2014 Jonathan Ong <me@jongleberry.com> |
| agent-base | 7.1.4 | MIT | Copyright (c) 2013 Nathan Rajlich <nathan@tootallnate.net> |
| ai | 6.0.250 | Apache-2.0 | Copyright 2023 Vercel, Inc. |
| ajv | 8.18.0 | MIT | Copyright (c) 2015-2021 Evgeny Poberezkin |
| ajv | 8.20.0 | MIT | Copyright (c) 2015-2021 Evgeny Poberezkin |
| ajv-formats | 3.0.1 | MIT | Copyright (c) 2020 Evgeny Poberezkin |
| archiver | 5.3.2 | MIT | Copyright (c) 2012-2014 Chris Talkington, contributors. |
| archiver-utils | 2.1.0 | MIT | Copyright (c) 2015 Chris Talkington. |
| archiver-utils | 3.0.4 | MIT | Copyright (c) 2015 Chris Talkington. |
| Archivo font | - | OFL-1.1 | Copyright 2020 The Archivo Project Authors (https://github.com/Omnibus-Type/Archivo) Archivo-Italic[wdth,wght].ttf: Copyright 2020 The Archivo Project Authors (https://github.com/Omnibus-Type/Archivo) |
| argparse | 1.0.10 | MIT | Copyright (C) 2012 by Vitaly Puzrin |
| argparse | 2.0.1 | Python-2.0 | Copyright (c) 1991 - 1995, Stichting Mathematisch Centrum Amsterdam, |
| async | 3.2.6 | MIT | Copyright (c) 2010-2018 Caolan McMahon |
| asynckit | 0.4.0 | MIT | Copyright (c) 2016 Alex Indigo |
| audiotee | 0.0.7 | MIT | - |
| bail | 2.0.2 | MIT | Copyright (c) 2015 Titus Wormer <tituswormer@gmail.com> |
| balanced-match | 1.0.2 | MIT | Copyright (c) 2013 Julian Gruber &lt;julian@juliangruber.com&gt; |
| base64-js | 1.5.1 | MIT | Copyright (c) 2014 Jameson Little |
| baseline-browser-mapping | 2.10.0 | Apache-2.0 | copyright license to reproduce, prepare Derivative Works of, |
| better-sqlite3 | 12.8.0 | MIT | Copyright (c) 2017 Joshua Wise |
| big-integer | 1.6.52 | Unlicense | Peter Olson <peter.e.c.olson+npm@gmail.com> |
| bignumber.js | 9.3.1 | MIT | Copyright © `<2025>` `Michael Mclaughlin` |
| binary | 0.3.0 | MIT | James Halliday |
| bindings | 1.5.0 | MIT | Copyright (c) 2012 Nathan Rajlich &lt;nathan@tootallnate.net&gt; |
| bl | 4.1.0 | MIT | Copyright (c) 2013-2019 bl contributors |
| bluebird | 3.4.7 | MIT | Copyright (c) 2013-2015 Petka Antonov |
| body-parser | 2.2.2 | MIT | Copyright (c) 2014 Jonathan Ong <me@jongleberry.com> |
| body-parser | 2.3.0 | MIT | Copyright (c) 2014 Jonathan Ong <me@jongleberry.com> |
| brace-expansion | 1.1.13 | MIT | Copyright (c) 2013 Julian Gruber <julian@juliangruber.com> |
| brace-expansion | 2.1.0 | MIT | Copyright (c) 2013 Julian Gruber <julian@juliangruber.com> |
| braces | 3.0.3 | MIT | Copyright (c) 2014-present, Jon Schlinkert. |
| buffer | 5.7.1 | MIT | Copyright (c) Feross Aboukhadijeh, and other contributors. |
| buffer-crc32 | 0.2.13 | MIT | Copyright (c) 2013 Brian J. Brennan |
| buffer-equal-constant-time | 1.0.1 | BSD-3-Clause | Copyright (c) 2013, GoInstant Inc., a salesforce.com company |
| buffer-indexof-polyfill | 1.0.2 | MIT | Copyright (c) 2015 Sarosia |
| buffers | 0.1.1 | Not stated by the package | James Halliday <mail@substack.net> (http://substack.net) |
| builder-util-runtime | 9.5.1 | MIT | Copyright (c) 2015 Loopline Systems |
| bundle-name | 4.1.0 | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com) |
| bytes | 3.1.2 | MIT | Copyright (c) 2012-2014 TJ Holowaychuk <tj@vision-media.ca> |
| call-bind-apply-helpers | 1.0.2 | MIT | Copyright (c) 2024 Jordan Harband |
| call-bound | 1.0.4 | MIT | Copyright (c) 2024 Jordan Harband |
| caniuse-lite | 1.0.30001776 | CC-BY-4.0 | copyright and certain other rights. Our licenses are |
| ccount | 2.0.1 | MIT | Copyright (c) 2015 Titus Wormer <tituswormer@gmail.com> |
| chainsaw | 0.1.0 | MIT/X11 | James Halliday <mail@substack.net> (http://substack.net) |
| character-entities | 2.0.2 | MIT | Copyright (c) 2015 Titus Wormer <tituswormer@gmail.com> |
| character-entities-html4 | 2.1.0 | MIT | Copyright (c) 2015 Titus Wormer <tituswormer@gmail.com> |
| character-entities-legacy | 3.0.0 | MIT | Copyright (c) 2015 Titus Wormer <tituswormer@gmail.com> |
| character-reference-invalid | 2.0.1 | MIT | Copyright (c) 2015 Titus Wormer <tituswormer@gmail.com> |
| chownr | 1.1.4 | ISC | Copyright (c) Isaac Z. Schlueter and Contributors |
| Chromium, Node.js and the other components bundled with Electron | 41.3.0 | BSD-3-Clause and others | Copyright The Chromium Authors and the other listed authors |
| class-variance-authority | 0.7.1 | Apache-2.0 | copyright license to reproduce, prepare Derivative Works of, |
| classcat | 5.0.5 | MIT | Copyright © Jorge Bucaran <<https://jorgebucaran.com>> |
| client-only | 0.0.1 | MIT | - |
| cloudflared | 2026.10.0 | Apache-2.0 | Copyright Cloudflare, Inc. |
| clsx | 2.1.1 | MIT | Copyright (c) Luke Edwards <luke.edwards05@gmail.com> (lukeed.com) |
| combined-stream | 1.0.8 | MIT | Copyright (c) 2011 Debuggable Limited <felix@debuggable.com> |
| comma-separated-tokens | 2.0.3 | MIT | Copyright (c) 2016 Titus Wormer <tituswormer@gmail.com> |
| commander | 13.1.0 | MIT | Copyright (c) 2011 TJ Holowaychuk <tj@vision-media.ca> |
| commander | 7.2.0 | MIT | Copyright (c) 2011 TJ Holowaychuk <tj@vision-media.ca> |
| commander | 8.3.0 | MIT | Copyright (c) 2011 TJ Holowaychuk <tj@vision-media.ca> |
| compress-commons | 4.1.2 | MIT | Copyright (c) 2014 Chris Talkington, contributors. |
| concat-map | 0.0.1 | MIT | James Halliday |
| content-disposition | 1.0.1 | MIT | Copyright (c) 2014-2017 Douglas Christopher Wilson |
| content-disposition | 1.1.0 | MIT | Copyright (c) 2014-2017 Douglas Christopher Wilson |
| content-disposition | 2.0.1 | MIT | Copyright (c) 2014-2017 Douglas Christopher Wilson |
| content-type | 1.0.5 | MIT | Copyright (c) 2015 Douglas Christopher Wilson |
| content-type | 2.0.0 | MIT | Copyright (c) 2015 Douglas Christopher Wilson |
| content-type | 2.1.0 | MIT | Copyright (c) 2015 Douglas Christopher Wilson |
| cookie | 0.7.2 | MIT | Copyright (c) 2012-2014 Roman Shtylman <shtylman@gmail.com> |
| cookie-signature | 1.2.2 | MIT | Copyright (c) 2012–2024 LearnBoost <tj@learnboost.com> and other contributors; |
| core-util-is | 1.0.2 | MIT | Copyright Node.js contributors. All rights reserved. |
| cors | 2.8.6 | MIT | Copyright (c) 2013 Troy Goode <troygoode@gmail.com> |
| cose-base | 1.0.3 | MIT | Copyright (c) 2019 - present, iVis@Bilkent. |
| cose-base | 2.2.0 | MIT | Copyright (c) 2019 - present, iVis@Bilkent. |
| crc-32 | 1.2.2 | Apache-2.0 | copyright license to reproduce, prepare Derivative Works of, |
| crc32-stream | 4.0.3 | MIT | Copyright (c) 2014 Chris Talkington, contributors. |
| croner | 10.0.1 | MIT | Copyright (c) 2015-2021 Hexagon <github.com/Hexagon> |
| cross-spawn | 7.0.6 | MIT | Copyright (c) 2018 Made With MOXY Lda <hello@moxy.studio> |
| csstype | 3.2.3 | MIT | Copyright (c) 2017-2018 Fredrik Nicol |
| cytoscape | 3.34.1 | MIT | Copyright (c) 2016-2026, The Cytoscape Consortium. |
| cytoscape-cose-bilkent | 4.1.0 | MIT | Copyright (c) 2016-2018, The Cytoscape Consortium. |
| cytoscape-fcose | 2.2.0 | MIT | Copyright (c) 2018 - present, iVis-at-Bilkent. |
| d3 | 7.9.0 | ISC | Copyright 2010-2023 Mike Bostock |
| d3-array | 2.12.1 | BSD-3-Clause | Copyright 2010-2020 Mike Bostock |
| d3-array | 3.2.4 | ISC | Copyright 2010-2023 Mike Bostock |
| d3-axis | 3.0.0 | ISC | Copyright 2010-2021 Mike Bostock |
| d3-brush | 3.0.0 | ISC | Copyright 2010-2021 Mike Bostock |
| d3-chord | 3.0.1 | ISC | Copyright 2010-2021 Mike Bostock |
| d3-color | 3.1.0 | ISC | Copyright 2010-2022 Mike Bostock |
| d3-contour | 4.0.2 | ISC | Copyright 2012-2023 Mike Bostock |
| d3-delaunay | 6.0.4 | ISC | Copyright 2018-2021 Observable, Inc. |
| d3-dispatch | 3.0.1 | ISC | Copyright 2010-2021 Mike Bostock |
| d3-drag | 3.0.0 | ISC | Copyright 2010-2021 Mike Bostock |
| d3-dsv | 3.0.1 | ISC | Copyright 2013-2021 Mike Bostock |
| d3-ease | 3.0.1 | BSD-3-Clause | Copyright 2010-2021 Mike Bostock |
| d3-fetch | 3.0.1 | ISC | Copyright 2016-2021 Mike Bostock |
| d3-force | 3.0.0 | ISC | Copyright 2010-2021 Mike Bostock |
| d3-format | 3.1.2 | ISC | Copyright 2010-2026 Mike Bostock |
| d3-geo | 3.1.1 | ISC | Copyright 2010-2024 Mike Bostock |
| d3-hierarchy | 3.1.2 | ISC | Copyright 2010-2021 Mike Bostock |
| d3-interpolate | 3.0.1 | ISC | Copyright 2010-2021 Mike Bostock |
| d3-path | 1.0.9 | BSD-3-Clause | Copyright 2015-2016 Mike Bostock |
| d3-path | 3.1.0 | ISC | Copyright 2015-2022 Mike Bostock |
| d3-polygon | 3.0.1 | ISC | Copyright 2010-2021 Mike Bostock |
| d3-quadtree | 3.0.1 | ISC | Copyright 2010-2021 Mike Bostock |
| d3-random | 3.0.1 | ISC | Copyright 2010-2021 Mike Bostock |
| d3-sankey | 0.12.3 | BSD-3-Clause | Copyright 2015, Mike Bostock |
| d3-scale | 4.0.2 | ISC | Copyright 2010-2021 Mike Bostock |
| d3-scale-chromatic | 3.1.0 | ISC | Copyright 2010-2024 Mike Bostock |
| d3-selection | 3.0.0 | ISC | Copyright 2010-2021 Mike Bostock |
| d3-shape | 1.3.7 | BSD-3-Clause | Copyright 2010-2015 Mike Bostock |
| d3-shape | 3.2.0 | ISC | Copyright 2010-2022 Mike Bostock |
| d3-time | 3.1.0 | ISC | Copyright 2010-2022 Mike Bostock |
| d3-time-format | 4.1.0 | ISC | Copyright 2010-2021 Mike Bostock |
| d3-timer | 3.0.1 | ISC | Copyright 2010-2021 Mike Bostock |
| d3-transition | 3.0.1 | ISC | Copyright 2010-2021 Mike Bostock |
| d3-zoom | 3.0.0 | ISC | Copyright 2010-2021 Mike Bostock |
| dagre-d3-es | 7.0.14 | MIT | Copyright (c) 2022-2024 Thibaut Lassalle, David Newell, Alois Klink, Sidharth Vinod and dagre-es contributors |
| dayjs | 1.11.23 | MIT | Copyright (c) 2018-present, iamkun |
| debug | 4.4.3 | MIT | Copyright (c) 2014-2017 TJ Holowaychuk <tj@vision-media.ca> |
| decode-named-character-reference | 1.3.0 | MIT | Copyright (c) Titus Wormer <tituswormer@gmail.com> |
| decompress-response | 6.0.0 | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com) |
| deep-extend | 0.6.0 | MIT | Copyright (c) 2013-2018, Viacheslav Lotsmanov |
| default-browser | 5.5.0 | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com) |
| default-browser-id | 5.0.1 | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com) |
| define-lazy-prop | 3.0.0 | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com) |
| delaunator | 5.1.0 | ISC | Copyright (c) 2026, Mapbox |
| delayed-stream | 1.0.0 | MIT | Copyright (c) 2011 Debuggable Limited <felix@debuggable.com> |
| depd | 2.0.0 | MIT | Copyright (c) 2014-2018 Douglas Christopher Wilson |
| dequal | 2.0.3 | MIT | Copyright (c) Luke Edwards <luke.edwards05@gmail.com> (lukeed.com) |
| detect-libc | 2.1.2 | Apache-2.0 | copyright license to reproduce, prepare Derivative Works of, |
| devlop | 1.1.0 | MIT | Copyright (c) 2023 Titus Wormer <tituswormer@gmail.com> |
| DiceBear Voxel Bot avatars | - | CC0-1.0 | "Voxel Bot" by DiceBear |
| dingbat-to-unicode | 1.0.1 | BSD-2-Clause | Michael Williamson <mike@zwobble.org> |
| Dm Sans font | - | OFL-1.1 | Copyright 2014 The DM Sans Project Authors (https://github.com/googlefonts/dm-fonts) DMSans-Italic[opsz,wght].ttf: Copyright 2014 The DM Sans Project Authors (https://github.com/googlefonts/dm-fonts) |
| dom-to-pptx | - | MIT | Copyright (c) 2025 Atharva Dharmendra Jagtap and dom-to-pptx contributors |
| dompurify | 3.4.14 | (MPL-2.0 OR Apache-2.0) | copyright license to reproduce, prepare Derivative Works of, |
| dotenv | 16.6.1 | BSD-2-Clause | Copyright (c) 2015, Scott Motte |
| dotenv | 17.4.1 | BSD-2-Clause | Copyright (c) 2015, Scott Motte |
| duck | 0.1.12 | BSD | Copyright (c) 2013, Michael Williamson |
| dunder-proto | 1.0.1 | MIT | Copyright (c) 2024 ECMAScript Shims |
| duplexer2 | 0.1.4 | BSD-3-Clause | Copyright (c) 2013, Deoxxa Development |
| ecdsa-sig-formatter | 1.0.11 | Apache-2.0 | copyright license to reproduce, prepare Derivative Works of, |
| ee-first | 1.1.1 | MIT | Copyright (c) 2014 Jonathan Ong me@jongleberry.com |
| Electron | 41.3.0 | MIT | Copyright (c) Electron contributors |
| electron-updater | 6.8.3 | MIT | Copyright (c) 2015 Loopline Systems |
| encodeurl | 2.0.0 | MIT | Copyright (c) 2016 Douglas Christopher Wilson |
| end-of-stream | 1.4.5 | MIT | Copyright (c) 2014 Mathias Buus |
| entities | 6.0.1 | BSD-2-Clause | Copyright (c) Felix Böhm |
| es-define-property | 1.0.1 | MIT | Copyright (c) 2024 Jordan Harband |
| es-errors | 1.3.0 | MIT | Copyright (c) 2024 Jordan Harband |
| es-object-atoms | 1.1.1 | MIT | Copyright (c) 2024 Jordan Harband |
| es-object-atoms | 1.1.2 | MIT | Copyright (c) 2024 Jordan Harband |
| es-set-tostringtag | 2.1.0 | MIT | Copyright (c) 2022 ECMAScript Shims |
| es-toolkit | 1.51.0 | MIT | Copyright (c) 2024 Viva Republica, Inc. |
| escape-html | 1.0.3 | MIT | Copyright (c) 2012-2013 TJ Holowaychuk |
| escape-string-regexp | 5.0.0 | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com) |
| estree-util-is-identifier-name | 3.0.0 | MIT | Copyright (c) 2020 Titus Wormer <tituswormer@gmail.com> |
| etag | 1.8.1 | MIT | Copyright (c) 2014-2016 Douglas Christopher Wilson |
| eventsource | 3.0.7 | MIT | Copyright (c) EventSource GitHub organisation |
| eventsource-parser | 3.0.6 | MIT | Copyright (c) 2025 Espen Hovlandsdal <espen@hovlandsdal.com> |
| eventsource-parser | 3.0.8 | MIT | Copyright (c) 2026 Espen Hovlandsdal <espen@hovlandsdal.com> |
| eventsource-parser | 3.1.0 | MIT | Copyright (c) 2026 Espen Hovlandsdal <espen@hovlandsdal.com> |
| eventsource-parser | 3.1.1 | MIT | Copyright (c) 2026 Espen Hovlandsdal <espen@hovlandsdal.com> |
| exceljs | 4.4.0 | MIT | Copyright (c) 2014-2019 Guyon Roche |
| expand-template | 2.0.3 | (MIT OR WTFPL) | Copyright (c) 2018 Lars-Magnus Skog |
| express | 5.2.1 | MIT | Copyright (c) 2009-2014 TJ Holowaychuk <tj@vision-media.ca> |
| express | 5.3.0 | MIT | Copyright (c) 2009-2014 TJ Holowaychuk <tj@vision-media.ca> |
| express-rate-limit | 8.3.1 | MIT | Copyright 2023 Nathan Friedly, Vedant K |
| express-rate-limit | 8.3.2 | MIT | Copyright 2023 Nathan Friedly, Vedant K |
| express-rate-limit | 8.5.2 | MIT | Copyright 2023 Nathan Friedly, Vedant K |
| express-rate-limit | 8.7.0 | MIT | Copyright 2023 Nathan Friedly, Vedant K |
| extend | 3.0.2 | MIT | Copyright (c) 2014 Stefan Thomas |
| fast-csv | 4.3.6 | MIT | Copyright (c) 2011-2019 C2FO |
| fast-deep-equal | 3.1.3 | MIT | Copyright (c) 2017 Evgeny Poberezkin |
| fast-glob | 3.3.3 | MIT | Copyright (c) Denis Malinochkin |
| fast-uri | 3.1.0 | BSD-3-Clause | Copyright (c) 2011-2021, Gary Court until https://github.com/garycourt/uri-js/commit/a1acf730b4bba3f1097c9f52e7d9d3aba8cdcaae |
| fast-uri | 3.1.2 | BSD-3-Clause | Copyright (c) 2011-2021, Gary Court until https://github.com/garycourt/uri-js/commit/a1acf730b4bba3f1097c9f52e7d9d3aba8cdcaae |
| fast-uri | 3.1.3 | BSD-3-Clause | Copyright (c) 2011-2021, Gary Court until https://github.com/garycourt/uri-js/commit/a1acf730b4bba3f1097c9f52e7d9d3aba8cdcaae |
| fast-uri | 3.1.8 | BSD-3-Clause | Copyright (c) 2011-2021, Gary Court until https://github.com/garycourt/uri-js/commit/a1acf730b4bba3f1097c9f52e7d9d3aba8cdcaae |
| fastdom | 1.0.12 | MIT | Wilson Page |
| fastq | 1.20.1 | ISC | Copyright (c) 2015-2020, Matteo Collina <matteo.collina@gmail.com> |
| fflate | 0.8.3 | MIT | Copyright (c) 2026 Arjun Barrett |
| FFmpeg | 8.1.3 | LGPL-2.1-or-later | Copyright (c) the FFmpeg developers |
| Figtree font | - | OFL-1.1 | Copyright 2022 The Figtree Project Authors (https://github.com/erikdkennedy/figtree) Figtree-Italic[wght].ttf: Copyright 2022 The Figtree Project Authors (https://github.com/erikdkennedy/figtree) |
| file-uri-to-path | 1.0.0 | MIT | Copyright (c) 2014 Nathan Rajlich <nathan@tootallnate.net> |
| fill-range | 7.1.1 | MIT | Copyright (c) 2014-present, Jon Schlinkert. |
| finalhandler | 2.1.1 | MIT | Copyright (c) 2014-2022 Douglas Christopher Wilson <doug@somethingdoug.com> |
| form-data | 4.0.5 | MIT | Copyright (c) 2012 Felix Geisendörfer (felix@debuggable.com) and contributors |
| forwarded | 0.2.0 | MIT | Copyright (c) 2014-2017 Douglas Christopher Wilson |
| framer-motion | 12.34.5 | MIT | Copyright (c) 2018 Framer B.V. |
| fresh | 2.0.0 | MIT | Copyright (c) 2012 TJ Holowaychuk <tj@vision-media.ca> |
| fs-constants | 1.0.0 | MIT | Copyright (c) 2018 Mathias Buus |
| fs-extra | 10.1.0 | MIT | Copyright (c) 2011-2017 JP Richardson |
| fs.realpath | 1.0.0 | ISC | Copyright (c) Isaac Z. Schlueter and Contributors |
| fstream | 1.0.12 | ISC | Copyright (c) Isaac Z. Schlueter and Contributors |
| function-bind | 1.1.2 | MIT | Copyright (c) 2013 Raynos. |
| gaxios | 6.7.1 | Apache-2.0 | copyright license to reproduce, prepare Derivative Works of, |
| gcp-metadata | 6.1.1 | Apache-2.0 | copyright license to reproduce, prepare Derivative Works of, |
| Geist font | - | OFL-1.1 | Copyright 2024 The Geist Project Authors (https://github.com/vercel/geist-font) Geist-Italic[wght].ttf: Copyright 2024 The Geist Project Authors (https://github.com/vercel/geist-font) |
| Geist Mono font | - | OFL-1.1 | Copyright 2024 The Geist Project Authors (https://github.com/vercel/geist-font.git) GeistMono-Italic[wght].ttf: Copyright 2024 The Geist Project Authors (https://github.com/vercel/geist-font.git) |
| get-intrinsic | 1.3.0 | MIT | Copyright (c) 2020 Jordan Harband |
| get-proto | 1.0.1 | MIT | Copyright (c) 2025 Jordan Harband |
| github-from-package | 0.0.0 | MIT | James Halliday |
| glob | 7.2.3 | ISC | Copyright (c) Isaac Z. Schlueter and Contributors |
| glob-parent | 5.1.2 | ISC | Copyright (c) 2015, 2019 Elan Shanker |
| google-auth-library | 9.15.1 | Apache-2.0 | copyright license to reproduce, prepare Derivative Works of, |
| google-logging-utils | 0.0.2 | Apache-2.0 | copyright license to reproduce, prepare Derivative Works of, |
| googleapis | 148.0.0 | Apache-2.0 | copyright license to reproduce, prepare Derivative Works of, |
| googleapis-common | 7.2.0 | Apache-2.0 | copyright license to reproduce, prepare Derivative Works of, |
| gopd | 1.2.0 | MIT | Copyright (c) 2022 Jordan Harband |
| graceful-fs | 4.2.11 | ISC | Copyright (c) 2011-2022 Isaac Z. Schlueter, Ben Noordhuis, and Contributors |
| gtoken | 7.1.0 | MIT | Copyright (c) 2014 Ryan Seys |
| hachure-fill | 0.5.2 | MIT | Copyright (c) 2023 Preet Shihn |
| harper.js | 2.10.0 | Apache-2.0 | copyright license to reproduce, prepare Derivative Works of, |
| has-symbols | 1.1.0 | MIT | Copyright (c) 2016 Jordan Harband |
| has-tostringtag | 1.0.2 | MIT | Copyright (c) 2021 Inspect JS |
| hasown | 2.0.2 | MIT | Copyright (c) Jordan Harband and contributors |
| hasown | 2.0.3 | MIT | Copyright (c) Jordan Harband and contributors |
| hasown | 2.0.4 | MIT | Copyright (c) Jordan Harband and contributors |
| hast-util-embedded | 3.0.0 | MIT | Copyright (c) 2016 Titus Wormer <tituswormer@gmail.com> |
| hast-util-from-dom | 5.0.1 | ISC | Copyright (c) Keith McKnight <keith@mcknig.ht> |
| hast-util-from-html | 2.0.3 | MIT | Copyright (c) 2022 Titus Wormer <tituswormer@gmail.com> |
| hast-util-from-html-isomorphic | 2.0.0 | MIT | Copyright (c) 2023 Remco Haszing <remcohaszing@gmail.com> |
| hast-util-from-parse5 | 8.0.3 | MIT | Copyright (c) Titus Wormer <tituswormer@gmail.com> |
| hast-util-has-property | 3.0.0 | MIT | Copyright (c) 2016 Titus Wormer <tituswormer@gmail.com> |
| hast-util-is-body-ok-link | 3.0.1 | MIT | Copyright (c) Titus Wormer |
| hast-util-is-element | 3.0.0 | MIT | Copyright (c) 2016 Titus Wormer <tituswormer@gmail.com> |
| hast-util-minify-whitespace | 1.0.1 | MIT | Copyright (c) Titus Wormer |
| hast-util-parse-selector | 4.0.0 | MIT | Copyright (c) 2016 Titus Wormer <tituswormer@gmail.com> |
| hast-util-phrasing | 3.0.1 | MIT | Copyright (c) 2016 Titus Wormer <tituswormer@gmail.com> |
| hast-util-to-html | 9.0.5 | MIT | Copyright (c) Titus Wormer <tituswormer@gmail.com> |
| hast-util-to-jsx-runtime | 2.3.6 | MIT | Copyright (c) Titus Wormer <tituswormer@gmail.com> |
| hast-util-to-mdast | 10.1.2 | MIT | Copyright (c) Titus Wormer <tituswormer@gmail.com> |
| hast-util-to-text | 4.0.2 | MIT | Copyright (c) 2019 Titus Wormer <tituswormer@gmail.com> |
| hast-util-whitespace | 3.0.0 | MIT | Copyright (c) 2016 Titus Wormer <tituswormer@gmail.com> |
| hastscript | 9.0.1 | MIT | Copyright (c) Titus Wormer <tituswormer@gmail.com> |
| highlight.js | 11.11.1 | BSD-3-Clause | Copyright (c) 2006, Ivan Sagalaev. |
| hono | 4.12.12 | MIT | Copyright (c) 2021 - present, Yusuke Wada and Hono contributors |
| hono | 4.12.14 | MIT | Copyright (c) 2021 - present, Yusuke Wada and Hono contributors |
| hono | 4.12.18 | MIT | Copyright (c) 2021 - present, Yusuke Wada and Hono contributors |
| hono | 4.12.23 | MIT | Copyright (c) 2021 - present, Yusuke Wada and Hono contributors |
| hono | 4.12.24 | MIT | Copyright (c) 2021 - present, Yusuke Wada and Hono contributors |
| hono | 4.12.25 | MIT | Copyright (c) 2021 - present, Yusuke Wada and Hono contributors |
| hono | 4.12.27 | MIT | Copyright (c) 2021 - present, Yusuke Wada and Hono contributors |
| hono | 4.13.8 | MIT | Copyright (c) 2021 - present, Yusuke Wada and Hono contributors |
| html-url-attributes | 3.0.1 | MIT | Copyright (c) Titus Wormer |
| html-void-elements | 3.0.0 | MIT | Copyright (c) 2016 Titus Wormer <tituswormer@gmail.com> |
| http-errors | 2.0.1 | MIT | Copyright (c) 2014 Jonathan Ong me@jongleberry.com |
| https | 1.0.0 | ISC | hardus van der berg <hardus@sunfork.com> (http://www.sunfork.com) |
| https-proxy-agent | 7.0.6 | MIT | Copyright (c) 2013 Nathan Rajlich <nathan@tootallnate.net> |
| Ibm Plex Sans font | - | OFL-1.1 | Copyright 2019 IBM Corp. All rights reserved. IBMPlexSans-Italic[wdth,wght].ttf: Copyright 2019 IBM Corp. All rights reserved. |
| iceberg-js | 0.8.1 | MIT | Copyright (c) 2025 Supabase |
| iconv-lite | 0.6.3 | MIT | Copyright (c) 2011 Alexander Shtuchkin |
| iconv-lite | 0.7.2 | MIT | Copyright (c) 2011 Alexander Shtuchkin |
| iconv-lite | 0.7.3 | MIT | Copyright (c) 2011 Alexander Shtuchkin |
| ieee754 | 1.2.1 | BSD-3-Clause | Copyright 2008 Fair Oaks Labs, Inc. |
| image-size | 1.2.1 | MIT | Copyright © 2013-Present Aditya Yadav, http://netroy.in |
| immediate | 3.0.6 | MIT | Copyright (c) 2012 Barnesandnoble.com, llc, Donavon West, Domenic Denicola, Brian Cavalier |
| import-meta-resolve | 4.2.0 | MIT | Copyright (c) Titus Wormer <mailto:tituswormer@gmail.com> |
| inflight | 1.0.6 | ISC | Copyright (c) Isaac Z. Schlueter |
| inherits | 2.0.4 | ISC | Copyright (c) Isaac Z. Schlueter |
| ini | 1.3.8 | ISC | Copyright (c) Isaac Z. Schlueter and Contributors |
| inline-style-parser | 0.2.7 | MIT | Copyright (c) 2012 TJ Holowaychuk <tj@vision-media.ca> |
| Inter font | - | OFL-1.1 | Copyright 2016 The Inter Project Authors (https://github.com/rsms/inter) Inter-Italic[opsz,wght].ttf: Copyright 2016 The Inter Project Authors (https://github.com/rsms/inter) |
| internmap | 1.0.1 | ISC | Copyright 2021 Mike Bostock |
| internmap | 2.0.3 | ISC | Copyright 2021 Mike Bostock |
| ip-address | 10.1.0 | MIT | Copyright (C) 2011 by Beau Gunderson |
| ip-address | 10.2.0 | MIT | Copyright (C) 2011 by Beau Gunderson |
| ip-address | 10.7.2 | MIT | Copyright (C) 2011 by Beau Gunderson |
| ipaddr.js | 1.9.1 | MIT | Copyright (C) 2011-2017 whitequark <whitequark@whitequark.org> |
| is-alphabetical | 2.0.1 | MIT | Copyright (c) 2016 Titus Wormer <tituswormer@gmail.com> |
| is-alphanumerical | 2.0.1 | MIT | Copyright (c) 2016 Titus Wormer <tituswormer@gmail.com> |
| is-decimal | 2.0.1 | MIT | Copyright (c) 2016 Titus Wormer <tituswormer@gmail.com> |
| is-docker | 3.0.0 | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com) |
| is-extglob | 2.1.1 | MIT | Copyright (c) 2014-2016, Jon Schlinkert |
| is-glob | 4.0.3 | MIT | Copyright (c) 2014-2017, Jon Schlinkert. |
| is-hexadecimal | 2.0.1 | MIT | Copyright (c) 2016 Titus Wormer <tituswormer@gmail.com> |
| is-in-ssh | 1.0.0 | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com) |
| is-inside-container | 1.0.0 | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com) |
| is-number | 7.0.0 | MIT | Copyright (c) 2014-present, Jon Schlinkert. |
| is-plain-obj | 4.1.0 | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com) |
| is-promise | 4.0.0 | MIT | Copyright (c) 2014 Forbes Lindesay |
| is-stream | 2.0.1 | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com) |
| is-wsl | 3.1.1 | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com) |
| isarray | 1.0.0 | MIT | Julian Gruber |
| isexe | 2.0.0 | ISC | Copyright (c) Isaac Z. Schlueter and Contributors |
| Jetbrains Mono font | - | OFL-1.1 | Copyright 2020 The JetBrains Mono Project Authors (https://github.com/JetBrains/JetBrainsMono) JetBrainsMono-Italic[wght].ttf: Copyright 2020 The JetBrains Mono Project Authors (https://github.com/JetBrains/JetBrainsMono) |
| jose | 6.2.12 | MIT | Copyright (c) 2018 Filip Skokan |
| jose | 6.2.2 | MIT | Copyright (c) 2018 Filip Skokan |
| jose | 6.2.3 | MIT | Copyright (c) 2018 Filip Skokan |
| js-yaml | 4.1.1 | MIT | Copyright (C) 2011-2015 by Vitaly Puzrin |
| json-bigint | 1.0.0 | MIT | Copyright (c) 2013 Andrey Sidorov |
| json-schema | 0.4.0 | (AFL-2.1 OR BSD-3-Clause) | Copyright (c) 2005-2015, The Dojo Foundation |
| json-schema-traverse | 1.0.0 | MIT | Copyright (c) 2017 Evgeny Poberezkin |
| json-schema-typed | 8.0.2 | BSD-2-Clause | Remy Rylan |
| jsonfile | 6.2.0 | MIT | Copyright (c) 2012-2015, JP Richardson <jprichardson@gmail.com> |
| jszip | 3.10.1 | (MIT OR GPL-3.0-or-later) | Copyright (c) 2009-2016 Stuart Knightley, David Duponchel, Franz Buchinger, António Afonso |
| jwa | 2.0.1 | MIT | Copyright (c) 2013 Brian J. Brennan |
| jws | 4.0.1 | MIT | Copyright (c) 2013 Brian J. Brennan |
| Karla font | - | OFL-1.1 | Copyright 2019 The Karla Project Authors (https://github.com/googlefonts/karla) Karla-Italic[wght].ttf: Copyright 2019 The Karla Project Authors (https://github.com/googlefonts/karla) |
| katex | 0.16.47 | MIT | Copyright (c) 2013-2020 Khan Academy and other contributors |
| khroma | 2.1.0 | Not stated by the package | Copyright (c) 2019-present Fabio Spampinato, Andrew Maney |
| layout-base | 1.0.2 | MIT | Copyright (c) 2019 iVis@Bilkent |
| layout-base | 2.0.1 | MIT | Copyright (c) 2019 iVis@Bilkent |
| lazy-val | 1.0.5 | MIT | Vladimir Krivosheev |
| lazystream | 1.0.1 | MIT | Copyright (c) 2013 J. Pommerening, contributors. |
| lie | 3.3.0 | MIT | - |
| listenercount | 1.0.1 | ISC | Copyright (c) MMXV jden <jason@denizac.org> |
| lodash-es | 4.18.1 | MIT | Copyright OpenJS Foundation and other contributors <https://openjsf.org/> |
| lodash.defaults | 4.2.0 | MIT | Copyright jQuery Foundation and other contributors <https://jquery.org/> |
| lodash.difference | 4.5.0 | MIT | Copyright jQuery Foundation and other contributors <https://jquery.org/> |
| lodash.escaperegexp | 4.1.2 | MIT | Copyright jQuery Foundation and other contributors <https://jquery.org/> |
| lodash.flatten | 4.4.0 | MIT | Copyright jQuery Foundation and other contributors <https://jquery.org/> |
| lodash.groupby | 4.6.0 | MIT | Copyright jQuery Foundation and other contributors <https://jquery.org/> |
| lodash.isboolean | 3.0.3 | MIT | Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/> |
| lodash.isequal | 4.5.0 | MIT | Copyright JS Foundation and other contributors <https://js.foundation/> |
| lodash.isfunction | 3.0.9 | MIT | Copyright JS Foundation and other contributors <https://js.foundation/> |
| lodash.isnil | 4.0.0 | MIT | Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/> |
| lodash.isplainobject | 4.0.6 | MIT | Copyright jQuery Foundation and other contributors <https://jquery.org/> |
| lodash.isundefined | 3.0.1 | MIT | Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/> |
| lodash.union | 4.6.0 | MIT | Copyright jQuery Foundation and other contributors <https://jquery.org/> |
| lodash.uniq | 4.5.0 | MIT | Copyright jQuery Foundation and other contributors <https://jquery.org/> |
| longest-streak | 3.1.0 | MIT | Copyright (c) 2015 Titus Wormer <mailto:tituswormer@gmail.com> |
| lop | 0.4.2 | BSD-2-Clause | Copyright (c) 2013, Michael Williamson |
| Lora font | - | OFL-1.1 | Copyright 2011 The Lora Project Authors (https://github.com/cyrealtype/Lora-Cyrillic), with Reserved Font Name "Lora". Lora-Italic[wght].ttf: Copyright 2011 The Lora Project Authors (https://github.com/cyrealtype/Lora-Cyrillic), with Reserved Font Name "Lora". |
| lowlight | 3.3.0 | MIT | Copyright (c) Titus Wormer <tituswormer@gmail.com> |
| lucide-react | 0.576.0 | ISC | Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026. |
| mammoth | 1.12.0 | BSD-2-Clause | Copyright (c) 2013, Michael Williamson |
| Manrope font | - | OFL-1.1 | Copyright 2019 The Manrope Project Authors (https://github.com/sharanda/manrope) |
| markdown-table | 3.0.4 | MIT | Copyright (c) Titus Wormer <tituswormer@gmail.com> |
| marked | 16.4.2 | MIT | Copyright (c) 2018+, MarkedJS (https://github.com/markedjs/) |
| math-intrinsics | 1.1.0 | MIT | Copyright (c) 2024 ECMAScript Shims |
| mdast-util-find-and-replace | 3.0.2 | MIT | Copyright (c) Titus Wormer <tituswormer@gmail.com> |
| mdast-util-from-markdown | 2.0.3 | MIT | Copyright (c) Titus Wormer <tituswormer@gmail.com> |
| mdast-util-gfm | 3.1.0 | MIT | Copyright (c) Titus Wormer <tituswormer@gmail.com> |
| mdast-util-gfm-autolink-literal | 2.0.1 | MIT | Copyright (c) 2020 Titus Wormer <tituswormer@gmail.com> |
| mdast-util-gfm-footnote | 2.1.0 | MIT | Copyright (c) Titus Wormer <tituswormer@gmail.com> |
| mdast-util-gfm-strikethrough | 2.0.0 | MIT | Copyright (c) 2020 Titus Wormer <tituswormer@gmail.com> |
| mdast-util-gfm-table | 2.0.0 | MIT | Copyright (c) 2020 Titus Wormer <tituswormer@gmail.com> |
| mdast-util-gfm-task-list-item | 2.0.0 | MIT | Copyright (c) 2020 Titus Wormer <tituswormer@gmail.com> |
| mdast-util-math | 3.0.0 | MIT | Copyright (c) 2020 Titus Wormer <tituswormer@gmail.com> |
| mdast-util-mdx-expression | 2.0.1 | MIT | Copyright (c) 2020 Titus Wormer <tituswormer@gmail.com> |
| mdast-util-mdx-jsx | 3.2.0 | MIT | Copyright (c) 2020 Titus Wormer <tituswormer@gmail.com> |
| mdast-util-mdxjs-esm | 2.0.1 | MIT | Copyright (c) 2020 Titus Wormer <tituswormer@gmail.com> |
| mdast-util-phrasing | 4.1.0 | MIT | Copyright (c) 2017 Titus Wormer <tituswormer@gmail.com> |
| mdast-util-to-hast | 13.2.1 | MIT | Copyright (c) 2016 Titus Wormer <tituswormer@gmail.com> |
| mdast-util-to-markdown | 2.1.2 | MIT | Copyright (c) Titus Wormer <tituswormer@gmail.com> |
| mdast-util-to-string | 4.0.0 | MIT | Copyright (c) 2015 Titus Wormer <tituswormer@gmail.com> |
| media-typer | 1.1.0 | MIT | Copyright (c) 2014-2017 Douglas Christopher Wilson |
| media-typer | 1.1.1 | MIT | Copyright (c) 2014-2017 Douglas Christopher Wilson |
| merge-descriptors | 2.0.0 | MIT | Copyright (c) Jonathan Ong <me@jongleberry.com> |
| merge2 | 1.4.1 | MIT | Copyright (c) 2014-2020 Teambition |
| mermaid | 11.17.0 | MIT | Copyright (c) 2014 - 2022 Knut Sveidqvist |
| micromark | 4.0.2 | MIT | Copyright (c) Titus Wormer <tituswormer@gmail.com> |
| micromark-core-commonmark | 2.0.3 | MIT | Copyright (c) Titus Wormer <tituswormer@gmail.com> |
| micromark-extension-gfm | 3.0.0 | MIT | Copyright (c) 2020 Titus Wormer <tituswormer@gmail.com> |
| micromark-extension-gfm-autolink-literal | 2.1.0 | MIT | Copyright (c) 2020 Titus Wormer <tituswormer@gmail.com> |
| micromark-extension-gfm-footnote | 2.1.0 | MIT | Copyright (c) 2021 Titus Wormer <tituswormer@gmail.com> |
| micromark-extension-gfm-strikethrough | 2.1.0 | MIT | Copyright (c) 2020 Titus Wormer <tituswormer@gmail.com> |
| micromark-extension-gfm-table | 2.1.1 | MIT | Copyright (c) Titus Wormer <tituswormer@gmail.com> |
| micromark-extension-gfm-tagfilter | 2.0.0 | MIT | Copyright (c) 2020 Titus Wormer <tituswormer@gmail.com> |
| micromark-extension-gfm-task-list-item | 2.1.0 | MIT | Copyright (c) 2020 Titus Wormer <tituswormer@gmail.com> |
| micromark-extension-math | 3.1.0 | MIT | Copyright (c) 2020 Titus Wormer <tituswormer@gmail.com> |
| micromark-factory-destination | 2.0.1 | MIT | Copyright (c) Titus Wormer <tituswormer@gmail.com> |
| micromark-factory-label | 2.0.1 | MIT | Copyright (c) Titus Wormer <tituswormer@gmail.com> |
| micromark-factory-space | 2.0.1 | MIT | Copyright (c) Titus Wormer <tituswormer@gmail.com> |
| micromark-factory-title | 2.0.1 | MIT | Copyright (c) Titus Wormer <tituswormer@gmail.com> |
| micromark-factory-whitespace | 2.0.1 | MIT | Copyright (c) Titus Wormer <tituswormer@gmail.com> |
| micromark-util-character | 2.1.1 | MIT | Copyright (c) Titus Wormer <tituswormer@gmail.com> |
| micromark-util-chunked | 2.0.1 | MIT | Copyright (c) Titus Wormer <tituswormer@gmail.com> |
| micromark-util-classify-character | 2.0.1 | MIT | Copyright (c) Titus Wormer <tituswormer@gmail.com> |
| micromark-util-combine-extensions | 2.0.1 | MIT | Copyright (c) Titus Wormer <tituswormer@gmail.com> |
| micromark-util-decode-numeric-character-reference | 2.0.2 | MIT | Copyright (c) Titus Wormer <tituswormer@gmail.com> |
| micromark-util-decode-string | 2.0.1 | MIT | Copyright (c) Titus Wormer <tituswormer@gmail.com> |
| micromark-util-encode | 2.0.1 | MIT | Copyright (c) Titus Wormer <tituswormer@gmail.com> |
| micromark-util-html-tag-name | 2.0.1 | MIT | Copyright (c) Titus Wormer <tituswormer@gmail.com> |
| micromark-util-normalize-identifier | 2.0.1 | MIT | Copyright (c) Titus Wormer <tituswormer@gmail.com> |
| micromark-util-resolve-all | 2.0.1 | MIT | Copyright (c) Titus Wormer <tituswormer@gmail.com> |
| micromark-util-sanitize-uri | 2.0.1 | MIT | Copyright (c) Titus Wormer <tituswormer@gmail.com> |
| micromark-util-subtokenize | 2.1.0 | MIT | Copyright (c) Titus Wormer <tituswormer@gmail.com> |
| micromark-util-symbol | 2.0.1 | MIT | Copyright (c) Titus Wormer <tituswormer@gmail.com> |
| micromark-util-types | 2.0.2 | MIT | Copyright (c) Titus Wormer <tituswormer@gmail.com> |
| micromatch | 4.0.8 | MIT | Copyright (c) 2014-present, Jon Schlinkert. |
| mime-db | 1.52.0 | MIT | Copyright (c) 2014 Jonathan Ong <me@jongleberry.com> |
| mime-db | 1.54.0 | MIT | Copyright (c) 2014 Jonathan Ong <me@jongleberry.com> |
| mime-types | 2.1.35 | MIT | Copyright (c) 2014 Jonathan Ong <me@jongleberry.com> |
| mime-types | 3.0.2 | MIT | Copyright (c) 2014 Jonathan Ong <me@jongleberry.com> |
| mimic-response | 3.1.0 | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com) |
| minimatch | 3.1.5 | ISC | Copyright (c) Isaac Z. Schlueter and Contributors |
| minimatch | 5.1.9 | ISC | Copyright (c) 2011-2023 Isaac Z. Schlueter and Contributors |
| minimist | 1.2.8 | MIT | James Halliday |
| mkdirp | 0.5.6 | MIT | Copyright 2010 James Halliday (mail@substack.net) |
| mkdirp-classic | 0.5.3 | MIT | Copyright (c) 2020 James Halliday (mail@substack.net) and Mathias Buus |
| motion-dom | 12.34.5 | MIT | Copyright (c) 2024 [Motion](https://motion.dev) B.V. |
| motion-utils | 12.29.2 | MIT | Copyright (c) 2024 [Motion](https://motion.dev) B.V. |
| ms | 2.1.3 | MIT | Copyright (c) 2020 Vercel, Inc. |
| nanoid | 3.3.11 | MIT | Copyright 2017 Andrey Sitnik <andrey@sitnik.ru> |
| napi-build-utils | 2.0.0 | MIT | Copyright (c) 2018 inspiredware |
| negotiator | 1.0.0 | MIT | Copyright (c) 2012-2014 Federico Romero |
| negotiator | 1.1.0 | MIT | Copyright (c) 2012-2014 Federico Romero |
| next | 16.2.3 | MIT | Copyright (c) 2025 Vercel, Inc. |
| next-themes | 0.4.6 | MIT | Copyright (c) 2022 Paco Coursey |
| node-abi | 3.88.0 | MIT | Copyright (c) 2016 Lukas Geiger |
| node-addon-api | 7.1.1 | MIT | Copyright (c) 2017 [Node.js API collaborators](https://github.com/nodejs/node-addon-api#collaborators) |
| node-fetch | 2.7.0 | MIT | Copyright (c) 2016 David Frank |
| node-pty | 1.1.0 | MIT | Copyright (c) 2012-2015, Christopher Jeffrey (https://github.com/chjj/) |
| node-readable-to-web-readable-stream | 0.4.2 | MIT | Copyright (c) 2025 Borewit |
| normalize-path | 3.0.0 | MIT | Copyright (c) 2014-2018, Jon Schlinkert. |
| NVIDIA NeMo TitaNet small model | - | Apache-2.0 | Copyright NVIDIA Corporation |
| object-assign | 4.1.1 | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com) |
| object-inspect | 1.13.4 | MIT | Copyright (c) 2013 James Halliday |
| on-finished | 2.4.1 | MIT | Copyright (c) 2013 Jonathan Ong <me@jongleberry.com> |
| once | 1.4.0 | ISC | Copyright (c) Isaac Z. Schlueter and Contributors |
| open | 11.0.0 | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com) |
| Open Design simple-deck template (adapted) | 014bffbf775f4514020cef8bbffdc0eb5a0009ce | Apache-2.0 | Copyright 2026 Open Design contributors |
| open-seo skills (adapted) | - | MIT | Copyright (c) 2026 Ben Senescu |
| option | 0.2.4 | BSD-2-Clause | Copyright (c) 2013, Michael Williamson |
| Outfit font | - | OFL-1.1 | Copyright 2021 The Outfit Project Authors (https://github.com/Outfitio/Outfit-Fonts) |
| package-manager-detector | 1.8.0 | MIT | Copyright (c) 2020-PRESENT Anthony Fu <https://github.com/antfu> |
| pako | 1.0.11 | (MIT AND Zlib) | Copyright (C) 2014-2017 by Vitaly Puzrin and Andrei Tuputcyn |
| parse-entities | 4.0.2 | MIT | Copyright (c) Titus Wormer <mailto:tituswormer@gmail.com> |
| parse5 | 7.3.0 | MIT | Copyright (c) 2013-2019 Ivan Nikulin (ifaaan@gmail.com, https://github.com/inikulin) |
| parseurl | 1.3.3 | MIT | Copyright (c) 2014 Jonathan Ong <me@jongleberry.com> |
| path-data-parser | 0.1.0 | MIT | Copyright (c) 2020 Preet Shihn |
| path-is-absolute | 1.0.1 | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com) |
| path-key | 3.1.1 | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com) |
| path-to-regexp | 8.4.2 | MIT | Copyright (c) 2014 Blake Embrey (hello@blakeembrey.com) |
| pdf-lib | 1.17.1 | MIT | Copyright (c) 2019 Andrew Dillon |
| PDF.js standard fonts (Foxit, Liberation) | 5.6.205 | BSD-style (Foxit) and OFL-1.1 (Liberation) | Copyright (c) 2012 Red Hat, Inc. |
| pdfjs-dist | 5.6.205 | Apache-2.0 | copyright license to reproduce, prepare Derivative Works of, |
| picocolors | 1.1.1 | ISC | Copyright (c) 2021-2024 Oleksii Raspopov, Kostiantyn Denysov, Anton Verinov |
| picomatch | 2.3.2 | MIT | Copyright (c) 2017-present, Jon Schlinkert. |
| pkce-challenge | 5.0.1 | MIT | Copyright (c) 2019 |
| Plus Jakarta Sans font | - | OFL-1.1 | Copyright 2020 The Plus Jakarta Sans Project Authors (https://github.com/tokotype/PlusJakartaSans) PlusJakartaSans-Italic[wght].ttf: Copyright 2020 The Plus Jakarta Sans Project Authors (https://github.com/tokotype/PlusJakartaSans) |
| points-on-curve | 0.2.0 | MIT | Copyright (c) 2020 Preet Shihn |
| points-on-path | 0.2.1 | MIT | Copyright (c) 2020 Preet |
| postcss | 8.4.31 | MIT | Copyright 2013 Andrey Sitnik <andrey@sitnik.ru> |
| powershell-utils | 0.1.0 | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com) |
| pptxgenjs | 4.0.1 | MIT | Copyright (c) 2015-2022 Brent Ely |
| prebuild-install | 7.1.3 | MIT | Copyright (c) 2015 Mathias Buus |
| process-nextick-args | 2.0.1 | MIT | - |
| property-information | 7.1.0 | MIT | Copyright (c) Titus Wormer <mailto:tituswormer@gmail.com> |
| proxy-addr | 2.0.7 | MIT | Copyright (c) 2014-2016 Douglas Christopher Wilson |
| proxy-addr | 2.0.8 | MIT | Copyright (c) 2014-2016 Douglas Christopher Wilson |
| Public Sans font | - | OFL-1.1 | Copyright 2015 The Public Sans Project Authors (https://github.com/uswds/public-sans) PublicSans-Italic[wght].ttf: Copyright 2015 The Public Sans Project Authors (https://github.com/uswds/public-sans) |
| pump | 3.0.4 | MIT | Copyright (c) 2014 Mathias Buus |
| pyannote segmentation-3.0 model | 3.0 | MIT | Copyright (c) 2020 CNRS |
| qrcode-generator | 2.0.4 | MIT | Kazuhiko Arase |
| qs | 6.15.0 | BSD-3-Clause | Copyright (c) 2014, Nathan LaFreniere and other [contributors](https://github.com/ljharb/qs/graphs/contributors) |
| qs | 6.15.1 | BSD-3-Clause | Copyright (c) 2014, Nathan LaFreniere and other [contributors](https://github.com/ljharb/qs/graphs/contributors) |
| qs | 6.15.2 | BSD-3-Clause | Copyright (c) 2014, Nathan LaFreniere and other [contributors](https://github.com/ljharb/qs/graphs/contributors) |
| qs | 6.15.3 | BSD-3-Clause | Copyright (c) 2014, Nathan LaFreniere and other [contributors](https://github.com/ljharb/qs/graphs/contributors) |
| qs | 6.16.0 | BSD-3-Clause | Copyright (c) 2014, Nathan LaFreniere and other [contributors](https://github.com/ljharb/qs/graphs/contributors) |
| queue | 6.0.2 | MIT | Copyright (c) 2014 Jesse Tane <jesse.tane@gmail.com> |
| queue-microtask | 1.2.3 | MIT | Copyright (c) Feross Aboukhadijeh |
| range-parser | 1.2.1 | MIT | Copyright (c) 2012-2014 TJ Holowaychuk <tj@vision-media.ca> |
| range-parser | 1.3.0 | MIT | Copyright (c) 2012-2014 TJ Holowaychuk <tj@vision-media.ca> |
| raw-body | 3.0.2 | MIT | Copyright (c) 2013-2014 Jonathan Ong <me@jongleberry.com> |
| rc | 1.2.8 | (BSD-2-Clause OR MIT OR Apache-2.0) | Copyright (c) 2011 Dominic Tarr |
| react | 19.2.3 | MIT | Copyright (c) Meta Platforms, Inc. and affiliates. |
| react-dom | 19.2.3 | MIT | Copyright (c) Meta Platforms, Inc. and affiliates. |
| react-is | 19.3.0-canary-3f0b9e61-20260317 | MIT | Copyright (c) Meta Platforms, Inc. and affiliates. |
| react-markdown | 10.1.0 | MIT | Copyright (c) Espen Hovlandsdal |
| react-refresh | 0.12.0 | MIT | Copyright (c) Facebook, Inc. and its affiliates. |
| readable-stream | 2.3.8 | MIT | Copyright Node.js contributors. All rights reserved. |
| readable-stream | 3.6.2 | MIT | Copyright Node.js contributors. All rights reserved. |
| readdir-glob | 1.1.3 | Apache-2.0 | copyright license to reproduce, prepare Derivative Works of, |
| regenerator-runtime | 0.13.4 | MIT | Copyright (c) 2014-present, Facebook, Inc. |
| rehype-highlight | 7.0.2 | MIT | Copyright (c) Titus Wormer <tituswormer@gmail.com> |
| rehype-katex | 7.0.1 | MIT | Junyoung Choi <fluke8259@gmail.com> (https://rokt33r.github.io) |
| rehype-minify-whitespace | 6.0.2 | MIT | Copyright (c) Titus Wormer |
| remark-gfm | 4.0.1 | MIT | Copyright (c) Titus Wormer <tituswormer@gmail.com> |
| remark-math | 6.0.0 | MIT | Junyoung Choi <fluke8259@gmail.com> (https://rokt33r.github.io) |
| remark-parse | 11.0.0 | MIT | Copyright (c) 2014 Titus Wormer <tituswormer@gmail.com> |
| remark-rehype | 11.1.2 | MIT | Copyright (c) Titus Wormer <tituswormer@gmail.com> |
| remark-stringify | 11.0.0 | MIT | Copyright (c) 2014 Titus Wormer <tituswormer@gmail.com> |
| require-from-string | 2.0.2 | MIT | Copyright (c) Vsevolod Strukchinsky <floatdrop@gmail.com> (github.com/floatdrop) |
| reusify | 1.1.0 | MIT | Copyright (c) 2015-2024 Matteo Collina |
| rimraf | 2.6.3 | ISC | Copyright (c) Isaac Z. Schlueter and Contributors |
| ripgrep | 14.1.1 | MIT OR Unlicense | Copyright (c) 2015 Andrew Gallant |
| robust-predicates | 3.0.3 | Unlicense | Vladimir Agafonkin |
| roughjs | 4.6.6 | MIT | Copyright (c) 2019 Preet Shihn |
| router | 2.2.0 | MIT | Copyright (c) 2013 Roman Shtylman |
| Rubik font | - | OFL-1.1 | Copyright 2015 The Rubik Project Authors (https://github.com/googlefonts/rubik) Rubik-Italic[wght].ttf: Copyright 2015 The Rubik Project Authors (https://github.com/googlefonts/rubik) |
| run-applescript | 7.1.0 | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com) |
| run-parallel | 1.2.0 | MIT | Copyright (c) Feross Aboukhadijeh |
| rw | 1.3.3 | BSD-3-Clause | Copyright (c) 2014-2016, Michael Bostock |
| safe-buffer | 5.1.2 | MIT | Copyright (c) Feross Aboukhadijeh |
| safe-buffer | 5.2.1 | MIT | Copyright (c) Feross Aboukhadijeh |
| safer-buffer | 2.1.2 | MIT | Copyright (c) 2018 Nikita Skovoroda <chalkerx@gmail.com> |
| sax | 1.5.0 | BlueOak-1.0.0 | copyright in it. |
| saxes | 5.0.1 | ISC | Louis-Dominique Dubeau <ldd@lddubeau.com> |
| scheduler | 0.27.0 | MIT | Copyright (c) Meta Platforms, Inc. and affiliates. |
| semver | 7.7.4 | ISC | Copyright (c) Isaac Z. Schlueter and Contributors |
| send | 1.2.1 | MIT | Copyright (c) 2012 TJ Holowaychuk |
| serve-static | 2.2.1 | MIT | Copyright (c) 2010 Sencha Inc. |
| server-only | 0.0.1 | MIT | - |
| setimmediate | 1.0.5 | MIT | Copyright (c) 2012 Barnesandnoble.com, llc, Donavon West, and Domenic Denicola |
| setprototypeof | 1.2.0 | ISC | Copyright (c) 2015, Wes Todd |
| sharp | 0.34.5 | Apache-2.0 | Lovell Fuller <npm@lovell.info> |
| shebang-command | 2.0.0 | MIT | Copyright (c) Kevin Mårtensson <kevinmartensson@gmail.com> (github.com/kevva) |
| shebang-regex | 3.0.0 | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com) |
| sherpa-onnx-darwin-arm64 | 1.13.3 | Apache-2.0 | copyright license to reproduce, prepare Derivative Works of, |
| sherpa-onnx-node | 1.13.3 | Apache-2.0 | copyright license to reproduce, prepare Derivative Works of, |
| side-channel | 1.1.0 | MIT | Copyright (c) 2019 Jordan Harband |
| side-channel | 1.1.1 | MIT | Copyright (c) 2019 Jordan Harband |
| side-channel-list | 1.0.0 | MIT | Copyright (c) 2024 Jordan Harband |
| side-channel-list | 1.0.1 | MIT | Copyright (c) 2024 Jordan Harband |
| side-channel-map | 1.0.1 | MIT | Copyright (c) 2024 Jordan Harband |
| side-channel-weakmap | 1.0.2 | MIT | Copyright (c) 2019 Jordan Harband |
| simple-concat | 1.0.1 | MIT | Copyright (c) Feross Aboukhadijeh |
| simple-get | 4.0.1 | MIT | Copyright (c) Feross Aboukhadijeh |
| sonner | 2.0.7 | MIT | Copyright (c) 2023 Emil Kowalski |
| Sora font | - | OFL-1.1 | Copyright 2019 The Sora Project Authors (https://github.com/sora-xor/sora-font) |
| Source Sans 3 font | - | OFL-1.1 | copyright statement(s). |
| Source Serif 4 font | - | OFL-1.1 | copyright statement(s). |
| source-map-js | 1.2.1 | BSD-3-Clause | Copyright (c) 2009-2011, Mozilla Foundation and contributors |
| Space Grotesk font | - | OFL-1.1 | Copyright 2020 The Space Grotesk Project Authors (https://github.com/floriankarsten/space-grotesk) |
| space-separated-tokens | 2.0.2 | MIT | Copyright (c) 2016 Titus Wormer <tituswormer@gmail.com> |
| sprintf-js | 1.0.3 | BSD-3-Clause | Copyright (c) 2007-2014, Alexandru Marasteanu <hello [at) alexei (dot] ro> |
| statuses | 2.0.2 | MIT | Copyright (c) 2014 Jonathan Ong <me@jongleberry.com> |
| strictdom | 1.0.1 | MIT | Wilson Page |
| string_decoder | 1.1.1 | MIT | Copyright Node.js contributors. All rights reserved. |
| string_decoder | 1.3.0 | MIT | Copyright Node.js contributors. All rights reserved. |
| stringify-entities | 4.0.4 | MIT | Copyright (c) 2015 Titus Wormer <mailto:tituswormer@gmail.com> |
| strip-json-comments | 2.0.1 | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com) |
| style-to-js | 1.1.21 | MIT | Copyright (c) 2020 Menglin "Mark" Xu <mark@remarkablemark.org> |
| style-to-object | 1.0.14 | MIT | Copyright (c) 2017 Menglin "Mark" Xu <mark@remarkablemark.org> |
| styled-jsx | 5.1.6 | MIT | Copyright (c) 2016-present Vercel, Inc. |
| stylis | 4.4.0 | MIT | Copyright (c) 2016-present Sultan Tarimo |
| tailwind-merge | 3.5.0 | MIT | Copyright (c) 2021 Dany Castillo |
| tar-fs | 2.1.4 | MIT | Copyright (c) 2014 Mathias Buus |
| tar-stream | 2.2.0 | MIT | Copyright (c) 2014 Mathias Buus |
| tiny-typed-emitter | 2.1.0 | MIT | Copyright (c) 2020 Zurab Benashvili (binier) <zura.bena@gmail.com> |
| tinyexec | 1.0.4 | MIT | Copyright (c) 2024 Tinylibs |
| tmp | 0.2.5 | MIT | Copyright (c) 2014 KARASZI István |
| to-regex-range | 5.0.1 | MIT | Copyright (c) 2015-present, Jon Schlinkert. |
| toidentifier | 1.0.1 | MIT | Copyright (c) 2016 Douglas Christopher Wilson <doug@somethingdoug.com> |
| tr46 | 0.0.3 | MIT | Sebastian Mayr <npm@smayr.name> |
| traverse | 0.3.9 | MIT/X11 | Copyright 2010 James Halliday (mail@substack.net) |
| trim-lines | 3.0.1 | MIT | Copyright (c) 2015 Titus Wormer <mailto:tituswormer@gmail.com> |
| trim-trailing-lines | 2.1.0 | MIT | Copyright (c) 2015 Titus Wormer <mailto:tituswormer@gmail.com> |
| trough | 2.2.0 | MIT | Copyright (c) 2016 Titus Wormer <tituswormer@gmail.com> |
| ts-dedent | 2.3.0 | MIT | Copyright (c) 2018 Tamino Martinius |
| tslib | 1.14.1 | 0BSD | Copyright (c) Microsoft Corporation. |
| tslib | 2.8.1 | 0BSD | Copyright (c) Microsoft Corporation. |
| tunnel-agent | 0.6.0 | Apache-2.0 | Mikeal Rogers <mikeal.rogers@gmail.com> (http://www.futurealoof.com) |
| type-is | 2.0.1 | MIT | Copyright (c) 2014 Jonathan Ong <me@jongleberry.com> |
| type-is | 2.1.0 | MIT | Copyright (c) 2014 Jonathan Ong <me@jongleberry.com> |
| underscore | 1.13.8 | MIT | Copyright (c) 2009-2022 Jeremy Ashkenas, Julian Gonggrijp, and DocumentCloud and Investigative Reporters & Editors |
| undici | 5.29.0 | MIT | Copyright (c) Matteo Collina and Undici contributors |
| undici | 8.1.0 | MIT | Copyright (c) Matteo Collina and Undici contributors |
| undici-types | 6.21.0 | MIT | Copyright (c) Matteo Collina and Undici contributors |
| unified | 11.0.5 | MIT | Copyright (c) 2015 Titus Wormer <tituswormer@gmail.com> |
| unist-util-find-after | 5.0.0 | MIT | Copyright (c) 2015 Titus Wormer <tituswormer@gmail.com> |
| unist-util-is | 6.0.1 | MIT | Copyright (c) 2015 Titus Wormer <tituswormer@gmail.com> |
| unist-util-position | 5.0.0 | MIT | Copyright (c) 2015 Titus Wormer <tituswormer@gmail.com> |
| unist-util-remove-position | 5.0.0 | MIT | Copyright (c) 2016 Titus Wormer <tituswormer@gmail.com> |
| unist-util-stringify-position | 4.0.0 | MIT | Copyright (c) 2016 Titus Wormer <tituswormer@gmail.com> |
| unist-util-visit | 5.1.0 | MIT | Copyright (c) 2015 Titus Wormer <tituswormer@gmail.com> |
| unist-util-visit-parents | 6.0.2 | MIT | Copyright (c) 2016 Titus Wormer <tituswormer@gmail.com> |
| universalify | 2.0.1 | MIT | Copyright (c) 2017, Ryan Zimmerman <opensrc@ryanzim.com> |
| unpdf | 1.6.2 | MIT | Copyright (c) 2023-PRESENT Johann Schopplich |
| unpipe | 1.0.0 | MIT | Copyright (c) 2015 Douglas Christopher Wilson <doug@somethingdoug.com> |
| unzipper | 0.10.14 | MIT | Copyright (c) 2012 - 2013 Near Infinity Corporation |
| url-template | 2.0.8 | BSD | Copyright (c) 2012-2014, Bram Stein |
| use-sync-external-store | 1.7.0 | MIT | Copyright (c) Meta Platforms, Inc. and affiliates. |
| util-deprecate | 1.0.2 | MIT | Copyright (c) 2014 Nathan Rajlich <nathan@tootallnate.net> |
| uuid | 14.0.2 | MIT | Copyright (c) 2010-2020 Robert Kieffer and other contributors |
| uuid | 8.3.2 | MIT | Copyright (c) 2010-2020 Robert Kieffer and other contributors |
| uuid | 9.0.1 | MIT | Copyright (c) 2010-2020 Robert Kieffer and other contributors |
| vary | 1.1.2 | MIT | Copyright (c) 2014-2017 Douglas Christopher Wilson |
| vfile | 6.0.3 | MIT | Copyright (c) 2015 Titus Wormer <tituswormer@gmail.com> |
| vfile-location | 5.0.3 | MIT | Copyright (c) 2016 Titus Wormer <tituswormer@gmail.com> |
| vfile-message | 4.0.3 | MIT | Copyright (c) Titus Wormer <tituswormer@gmail.com> |
| web-namespaces | 2.0.1 | MIT | Copyright (c) 2016 Titus Wormer <tituswormer@gmail.com> |
| webidl-conversions | 3.0.1 | BSD-2-Clause | Copyright (c) 2014, Domenic Denicola |
| whatwg-url | 5.0.0 | MIT | Copyright (c) 2015–2016 Sebastian Mayr |
| which | 2.0.2 | ISC | Copyright (c) Isaac Z. Schlueter and Contributors |
| wrappy | 1.0.2 | ISC | Copyright (c) Isaac Z. Schlueter and Contributors |
| ws | 8.19.0 | MIT | Copyright (c) 2011 Einar Otto Stangvik <einaros@gmail.com> |
| wsl-utils | 0.3.1 | MIT | Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com) |
| xmlbuilder | 10.1.1 | MIT | Copyright (c) 2013 Ozgur Ozcitak |
| xmlchars | 2.2.0 | MIT | Copyright Louis-Dominique Dubeau and contributors to xmlchars |
| zip-stream | 4.1.1 | MIT | Copyright (c) 2014 Chris Talkington, contributors. |
| zod | 3.25.76 | MIT | Copyright (c) 2025 Colin McDonnell |
| zod | 4.3.6 | MIT | Copyright (c) 2025 Colin McDonnell |
| zod | 4.4.3 | MIT | Copyright (c) 2025 Colin McDonnell |
| zod | 4.6.7 | MIT | Copyright (c) 2025 Colin McDonnell |
| zod-to-json-schema | 3.25.1 | ISC | Copyright (c) 2020, Stefan Terdell |
| zod-to-json-schema | 3.25.2 | ISC | Copyright (c) 2020, Stefan Terdell |
| zustand | 4.5.7 | MIT | Copyright (c) 2019 Paul Henschel |
| zustand | 5.0.11 | MIT | Copyright (c) 2019 Paul Henschel |
| zwitch | 2.0.4 | MIT | Copyright (c) 2016 Titus Wormer <tituswormer@gmail.com> |

