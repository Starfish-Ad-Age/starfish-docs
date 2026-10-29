---
outline: deep
---

# Knowledge Files

Knowledge files are uploads attached to a workspace or folder that the AI can read on demand. PDFs, Word docs, spreadsheets, images, code samples — drop them in once and they're available in every chat in the same scope.

## Supported file types

| Type | What happens on upload |
|------|------------------------|
| PDF | Text extracted. The AI can read it word for word. |
| DOCX (`.docx`) | Text extracted. The AI can read it word for word. |
| XLSX (`.xlsx`, `.xls`) | Cell contents read sheet by sheet. |
| Images (PNG, JPG, GIF, WebP, SVG, etc.) | Stored as is. Models that understand images can look at them. |
| Plain text (`.txt`, `.md`, `.json`, `.csv`, `.ts`, `.py`, etc.) | Read as UTF-8. |
| Anything else | The file is stored, but no text is extracted. The AI can still describe and download the file. |

The per-file size cap is **50 MB**. Files larger than that are rejected at upload time.

## Uploading a file

From the **Knowledge files** section on a workspace or folder page:

- Click **Upload** and pick one or more files.
- Or drag-and-drop files onto the dashed drop zone.

Multiple files can upload in parallel. Each row appears immediately with an **Analyzing** pill while the AI processes it in the background — uploads don't block on analysis.

## What happens during analysis

For every uploaded file, Starfish asks the AI for:

- **A 1–2 sentence description** — concrete and specific. *"Acme Inc brand guidelines — logo, colour palette (#5B2C6F primary, #F4D03F accent), typography. 12 pages."*
- **A suggested filename** when the original looks meaningless.

If the AI can't produce a useful description, Starfish uses a description from the file's details like *"PDF (3.2 MB). Auto-described from metadata only — the AI couldn't generate a richer summary."* The file remains fully usable and the **Re-analyze** button retries it on demand.

## Auto-rename

If you upload a file with a meaningless name — `IMG_4892.png`, `Screenshot 2025-04-26 at 11.32.10.png`, `8400e29b-41d4-4716-9a0f-c7f1.pdf`, `126510.org.pdf`, `WhatsApp Image 2024-07-15 at 18.04.32.jpeg` — Starfish renames it to something descriptive based on the file's contents.

What counts as "meaningless":

- Mostly digits (`126510.org.pdf` — 60%+ digits).
- UUID-shaped or long hex strings.
- Common camera, screenshot, scan, or messenger patterns (`IMG_*`, `Screenshot *`, `Scan_*`, `WhatsApp Image *`).
- Long random strings with little to no real words.

Files with sensible names — `logo1.png`, `brand-guide.pdf`, `Q3-research.pdf` — are kept as-is.

Starfish keeps the original filename. Hover the row to see *"Originally: 126510.org.pdf"* in the tooltip; the Manifest panel also lists the original name.

To turn auto-rename off: **Settings → Workspace → Auto-rename uploaded files**. With the toggle off, the analyzer still proposes a rename, but you have to **Accept** it from the file row before it applies.

## The row layout

By default each row is compact: an icon, the file name, its size, when it was added, an **Analyzing** pill while it is being described, and **Download**, **Re-analyze** and **Delete** buttons.

If a rename is suggested but auto-rename was off, a purple banner under the row offers **Accept** / **Keep**.

Hover the filename to see the original name (if it was renamed) and the full description in a native tooltip.

The list collapses to **3 rows by default**. Click *Show all (N)* to expand, *Show fewer* to collapse back.

## The Manifest panel

Click the **Manifest** button at the top of the Knowledge files section to open a richer view. The Manifest shows every file in this scope with:

- The current and original filenames.
- The full AI-generated description.
- Any warning from the analysis.
- An inline **Edit description** affordance for each file.

Editing a description here marks it as user-edited. Future re-analysis runs **will not overwrite** your edit — your wording wins until you clear it.

## Per-row actions

| Action | What it does |
|--------|--------------|
| **Download** | Opens the file in a new tab with its native MIME type. PDFs preview, images render. |
| **Re-analyze** | Reruns the analysis for a fresh description + rename suggestion. Use when you find the description wrong or after a soft failure. |
| **Delete** | Deletes the file from Starfish. **Your original file in Downloads (or wherever you uploaded from) is never touched.** |

## How the AI uses these files

Every chat in the workspace (or folder) knows which files exist and what each one contains, from their descriptions. When the AI needs the exact content, such as *"what's our exact colour palette?"*, it reads the file. Long documents are read in parts.

A chat can read only the files of its own workspace. A chat in workspace A cannot read files from workspace B.

## Disk usage

Files are stored in the App's local data folder on your Mac. When you delete a file, it is removed at once. When you delete a folder, its files lose their folder link but stay in the workspace. When you delete a workspace, its files are deleted.

## Privacy

To describe a file, and when the AI reads it in a chat, Starfish sends its content to your AI provider through your own key, the same way as your normal chats.

## Tips

- **Drop the source PDF, not a screenshot of it.** Text extraction is far better than vision-OCR-on-screenshot.
- **Re-analyze when you reorganise.** If a description is wrong (model hallucinated, file is more interesting than it looked), one click fixes it.
- **Edit descriptions in the Manifest.** Especially for files the AI couldn't describe well. A user-edited description survives re-analysis.
- **Folder-scope files for confidentiality.** Files in `Acme / Confidential` aren't visible to chats in `Acme / Marketing`, even though both share the workspace-level files.
