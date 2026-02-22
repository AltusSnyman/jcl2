---
name: image-generation
description: When the user wants to generate images, illustrations, or graphics for their website or marketing materials. This skill provides the framework for determining the right format, aspect ratio, and prompt structure (photorealistic vs. illustration) to ensure high-quality, brand-aligned visual assets.
---

# Image Generation Skill

Use this skill whenever the user requests the creation of an image, or when you are conceptualizing a new webpage section that requires visual assets. 

**Do not just write a basic prompt.** You must act as an Art Director. Follow this framework to determine exactly what the prompt should look like before generating it.

## Step 1: Determine the Asset Type
Is this a photograph or an illustration?
- **Photography:** Best for lifestyle shots, physical products, real-world environments, or conveying human emotion.
- **Illustration/UI Graphic:** Best for abstract concepts, SaaS platforms, data visualization, minimalist branding, or when exact color matching is critical.

## Step 2: Determine Placement & Aspect Ratio
Where will this image live on the website? The placement dictates the aspect ratio (`--ar` in prompt).

*   **Hero Backgrounds / Full Width:** 16:9 (`--ar 16:9`) or 21:9 (`--ar 21:9`).
*   **Split Section (1 row, 2 columns):** 1:1 (`--ar 1:1`) or 4:3 (`--ar 4:3`) depending on text volume.
*   **Blog Post Thumbnails / Social Sharing:** 1.91:1 (`--ar 191:100` or standard landscape) or 16:9.
*   **Mobile Specific Hero / Vertical Banners:** 9:16 (`--ar 9:16`) or 4:5 (`--ar 4:5`).
*   **Icons / Avatars / Component Thumbnails:** 1:1 (`--ar 1:1`).
*   **Standard Content Blocks (In-text):** 3:2 (`--ar 3:2`) or 4:3 (`--ar 4:3`).

## Step 3: Architecture for Photography Prompts
If the asset is a photograph, assemble the prompt using this structure:

`[Subject/Action] + [Setting/Context] + [Lighting] + [Camera/Lens Specs] + [Style/Modifiers] + [Parameters]`

1.  **Subject/Action:** Be hyper-specific. What exactly is happening? (e.g., "A diverse team of professionals analyzing data on a transparent screen").
2.  **Setting/Context:** Describe the environment. (e.g., "in a modern, sunlit glass office overlooking a city skyline").
3.  **Lighting:** Set the mood. (e.g., "soft golden hour light", "dramatic rim lighting", "clean studio lighting").
4.  **Camera Specs:** Make it realistic by acting like a photographer. (e.g., "shot on Sony A7R IV, 35mm lens, f/1.8, shallow depth of field, creamy bokeh").
5.  **Style Modifiers:** (e.g., "ultra-photorealistic, 8k resolution, cinematic, hyper-detailed").
6.  **Parameters (Midjourney):** Always append `--style raw` (reduces cartoonish AI artifacts) and the chosen `--ar`.

*Example Photography Prompt:*
> "Extreme macro shot of a sleek silver smartwatch on a minimalist grey background, studio lighting, sharp focus, 100mm macro lens, f/2.8, 8k, photorealistic, --ar 1:1 --style raw"

## Step 4: Architecture for Illustration & UI Prompts
If the asset is an illustration or abstract UI graphic, assembling the prompt requires strict attention to brand identity:

`[Subject/UI Element] + [Illustration Style] + [Brand Colors] + [Composition/Mood] + [Negative Prompts/Parameters]`

1.  **Subject/UI Element:** What is it? (e.g., "data visualization chart," "dashboard interface layout," "hero banner abstract illustration").
2.  **Illustration Style:** Be explicit about the aesthetic. (e.g., "minimalist flat design", "isometric 3D", "geometric shapes", "futuristic neon").
3.  **Brand Colors (CRITICAL):** Use HEX codes if generating the prompt for a color-aware engine, or highly descriptive color names. (e.g., "primary brand color navy blue #003366 and accent vibrant coral #FF6B35, over a soft UI background #F7F7F7").
4.  **Composition/Mood:** How are elements arranged? (e.g., "floating elements, clean white space, sleek and professional atmosphere").
5.  **Negative Prompts:** Filter out bad artifacts. (e.g., "no text, no letters, no clutter").
6.  **Parameters:** Append the chosen aspect ratio (`--ar`).

*Example Illustration Prompt:*
> "Futuristic UI layout for a website background banner, overlapping abstract geometric transparent shapes, clean lines, flowing composition, ambient lighting, using brand colors deep teal #1A535C and bright mint #4ECDC4 over a matte dark background, high-resolution vector art style, no text, no letters, --ar 16:9"

## Step 5: Final Review & Generation
Before providing the prompt to the user or passing it to an image generation tool (like your `generate_image` tool):
1. Did I choose the right aspect ratio based on where this goes?
2. Did I dictate specific lighting or illustration styles?
3. Did I include the branding colors if it's an abstract/UI graphic?
4. Are negative prompts included to remove text/watermarks?

Generate the image based on this meticulous prompt, or provide the assembled prompt directly to the user for them to use in Midjourney/DALL-E.
