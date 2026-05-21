Optimize images in the portfolio's public directory for web delivery.

Target directory: `public/work/` (or a specific subdirectory if given in $ARGUMENTS).

Steps:
1. Find all image files (jpg, jpeg, png, gif) in the target directory:
   ```
   find public/work -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \)
   ```
2. Check what optimization tools are available:
   - `sharp` via Node (`node -e "require('sharp')"`) — preferred
   - `sips` (macOS built-in) — fallback
   - `ffmpeg` — last resort for format conversion

3. For each image, optimize it:
   - **With sharp** (write a small Node script and run it):
     - Convert JPEGs to quality 85
     - Convert PNGs to quality 80
     - Resize to max 2400px wide while preserving aspect ratio
     - Save as the same filename (overwrite in place) AND create a `.webp` sibling
   - **With sips** (macOS fallback):
     - `sips --resampleWidth 2400 {file}` for oversized images
     - Report that WebP conversion requires sharp
   
4. Report a before/after summary table:
   ```
   File                           Before    After     Savings
   ──────────────────────────────────────────────────────────
   work/dashboard/cover.jpg       2.4 MB    480 KB    80%
   ```

5. Remind the user to use Astro's `<Image>` component from `astro:assets` for automatic optimization at build time — that's the preferred long-term approach for production images.
