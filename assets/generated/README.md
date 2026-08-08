DEMERZEL AI Hero Image Generation

This folder contains curated prompts and instructions to generate photorealistic hero images that match the DEMERZEL editorial direction.

Files
- `hero_prompts.json` — structured prompts, filenames, and recommended generation settings.

How to use
1. Choose an image generation provider (Stable Diffusion / Replicate / Stability / OpenAI Images). 2. Use the prompts in `hero_prompts.json`. 3. Generate two crops for each hero: desktop (landscape) and mobile (portrait). 4. Save outputs to the `public/assets/generated/` folder using the filenames in the JSON.

Example: Node + Replicate (pseudo-template)

- Install: `npm install node-fetch form-data`.
- Set environment variable: `REPLICATE_TOKEN`.
- Use the following minimal request outline (adapt to provider):

```js
// pseudocode
const prompt = "..."; // from hero_prompts.json
// POST to replicate or stability endpoint with prompt and image size options
// save returned image bytes to the filename listed
```

Important style rules (follow the repository brief):
- No invented LOGOS or brand text in generated images.
- Photographic, not CGI — avoid glossy futuristic props.
- Natural human scale (include a small human or technician when appropriate).
- Palette: muted earth tones with navy and oxidized green accents.
- Produce high-res originals; export optimized JPGs for web (quality ~82-88).

After generation
- Place files under `public/assets/generated/` and commit.
- If you want, I can run crop generation and wire the hero component to use the generated files once you upload them or provide an API key to run generation.
