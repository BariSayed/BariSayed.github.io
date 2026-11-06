# Sayed Mashequl Bari — Academic Website

A static personal/academic website (plain HTML + CSS — no build step) ready to publish
on **GitHub Pages**.

## Files
```
researcher-website/
├─ index.html          # the whole site (edit text here)
├─ README.md           # this file
├─ .nojekyll           # tells GitHub Pages to serve files as-is
├─ assets/
│   ├─ style.css       # colours, fonts, layout
│   └─ profile.jpg     # your profile photo
└─ files/
    └─ cv.pdf          # <-- ADD your CV here (export your Word CV to PDF, name it cv.pdf)
```

## How to publish (step by step)

1. **Log in to GitHub** at https://github.com (username: **BariSayed**).
2. Click **New repository** and name it **exactly**: `BariSayed.github.io`
   - Visibility: **Public**. Do **not** initialise with a README.
3. On the new repo page: **Add file → Upload files**.
4. Drag **all the contents** of this `researcher-website` folder (`index.html`,
   `assets/`, `files/`, `.nojekyll`) into the upload box. Click **Commit changes**.
5. Go to **Settings → Pages**. Set **Source = Deploy from a branch**,
   **Branch = main / (root)**, then **Save**.
6. Wait 1–2 minutes, then open: **https://barisayed.github.io**

## How to update later
- Edit `index.html` directly on GitHub (pencil icon) or upload a new version.
- Replace `assets/profile.jpg` to change the photo (keep the same filename).

## One thing to add
- **CV PDF** — export your Word CV to PDF, name it `cv.pdf`, and place it in `files/`
  (the "CV (PDF)" buttons link to it).

## Optional: custom domain
If you later buy a domain (e.g. `sayedbari.com`), add a file named `CNAME` containing just the
domain, and set it under Settings → Pages → Custom domain.
