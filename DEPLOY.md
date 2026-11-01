# Deploying to GitHub Pages

The site is a static export. The workflow in `.github/workflows/deploy.yml` builds and publishes it on every push to `main`.

1. Repository **Settings → Pages → Build and deployment → Source: GitHub Actions** (once).
2. Push to `main`. Watch **Actions → Deploy to GitHub Pages**. If the very first run fails because Pages was not enabled yet, enable it (step 1) and press **Re-run all jobs**.
3. The site goes live at `https://<owner>.github.io/<repository-name>/` (for this repo: https://carbozone-labs.github.io/rcpunecitylegend/).

## About the sub-folder (base path)

A GitHub project page lives under `/<repository-name>`. The workflow sets `NEXT_PUBLIC_BASE_PATH` to that automatically and the code
(links, images, icons, manifest, sitemap, canonical tags) follows it. Locally (`npm run dev`) the variable is empty and nothing changes.

* Custom domain later (e.g. legends.example.org, served from the root): delete the `NEXT_PUBLIC_BASE_PATH` line in the workflow
  and set `NEXT_PUBLIC_SITE_URL` to `https://legends.example.org`.
* Test the live build locally:
  `NEXT_PUBLIC_BASE_PATH=/rcpunecitylegend npm run build` (PowerShell: `$env:NEXT_PUBLIC_BASE_PATH="/rcpunecitylegend"; npm run build`), then serve the `out` folder under that path.
