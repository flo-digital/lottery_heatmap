# Ötöslottó Hőtérkép

Interactive heatmap of Hungarian Ötöslottó draw frequencies —
**automatically updated every Sunday** via GitHub Actions.

---

## One-time setup (~10 minutes)

### 1 · Create a GitHub repository

Go to [github.com/new](https://github.com/new) and create a **public** repository
named `otos-lotto-heatmap` (private works too, but GitHub Pages requires a paid
plan for private repos).

### 2 · Push this project

```bash
cd otos-lotto-heatmap       # the folder you unzipped
git init
git add .
git commit -m "initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/otos-lotto-heatmap.git
git push -u origin main
```

### 3 · Set the base URL

Open **`vite.config.js`** and change the `base` line to match your repo name:

```js
base: "/otos-lotto-heatmap/",
```

Commit and push:

```bash
git add vite.config.js
git commit -m "fix: set correct base URL"
git push
```

### 4 · Enable GitHub Pages

1. On GitHub, go to your repo → **Settings** → **Pages**
2. Under *Build and deployment → Source*, choose **GitHub Actions**
3. Click **Save**

The first deploy starts automatically. After ~2 minutes your app will be live at:

```
https://YOUR_USERNAME.github.io/otos-lotto-heatmap/
```

---

## How the automation works

```
Every Sunday 10:00 UTC
        │
        ▼
 update.yml runs
        │
        ├─ Downloads otos.csv from szerencsejatek.hu
        ├─ Parses draws + jackpots
        ├─ Regenerates src/App.jsx with fresh data
        │
        └─ New draw found?
               │
        YES ───┤  git commit + push  ──►  deploy.yml triggers
               │                                │
        NO ────┘  (nothing committed)            ▼
                                         Vite build + publish
                                         to GitHub Pages
```

| File | Purpose |
|------|---------|
| `scripts/update_data.py` | Downloads CSV, regenerates `src/App.jsx`. Run locally with `python scripts/update_data.py` |
| `src/App.template.jsx` | The React component without data — **do not edit `src/App.jsx` directly**, edit the template instead |
| `.github/workflows/update.yml` | Runs every Sunday, commits if data changed |
| `.github/workflows/deploy.yml` | Triggered on every push to `main` — builds with Vite and deploys to GitHub Pages |

---

## Running locally

```bash
npm install
npm run dev
```

To test a data refresh locally:

```bash
python scripts/update_data.py
npm run dev
```

## Customising

- **Change the schedule**: edit the `cron:` line in `.github/workflows/update.yml`
- **Edit the UI**: edit `src/App.template.jsx`, then run `python scripts/update_data.py` locally to regenerate `src/App.jsx` before committing
