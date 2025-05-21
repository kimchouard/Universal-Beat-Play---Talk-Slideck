# talks.chouard.kim

This repository hosts the slide decks for various tech talks by Kim Chouard.

## Project Structure

- `homepage/`: Contains the main `index.html` listing all talks.
- `packages/`: Each subdirectory here is a separate Slidev slide deck.
  - `[talk-slug]/index.md`: The markdown file for the slide deck.
- `public/`: Global static assets (images, fonts, etc.) used across slide decks and the homepage.
- `scripts/`: Helper scripts for building and cleaning.
- `dist/`: The build output directory. Served by Netlify.

## Available Slide Decks

- **Universal Beat & Play**: Developing cross-platform music games with React Native.
  - Path: `packages/universal-beat-play`
- **Mozart Never Had React Native: You Do**: Exploring modern app development with React Native (for App.js 2025).
  - Path: `packages/appjs-2025-mozart-react-native`

## Development

1.  **Install dependencies:**
    ```bash
    pnpm install
    ```

2.  **Develop a specific slide deck:**
    Replace `[talk-slug]` with the folder name of the talk in `packages/` (e.g., `universal-beat-play`).
    ```bash
    pnpm run dev:[talk-slug]
    # Example for Universal Beat & Play (usually on http://localhost:3031)
    pnpm run dev:universal-beat-play
    # Example for App.js 2025 talk (usually on http://localhost:3032)
    pnpm run dev:appjs-2025-mozart-react-native
    ```
    This will open the slide deck in your browser with hot-reloading.

3.  **View the main homepage locally:**
    This serves the `dist` folder after building the homepage.
    ```bash
    pnpm run dev
    ```
    Then open the URL provided by the `serve` command (usually `http://localhost:3000`).

## Building for Production

To build all slide decks and the homepage for deployment:

```bash
pnpm run build
```
This will generate all static files into the `dist/` directory.

## Exporting to PDF

To export a specific slide deck to PDF:

```bash
pnpm run export:[talk-slug]
# Example
pnpm run export:universal-beat-play
```
PDFs will be saved in `dist/pdf/`.

## Deployment

This site is configured for deployment on Netlify. Pushing to the main branch will trigger a new build and deployment based on `netlify.toml`.
