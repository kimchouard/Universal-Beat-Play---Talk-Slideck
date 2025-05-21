import fs from 'fs-extra';
import path from 'path';

const CWD = process.cwd();
const HOMEPAGE_SRC_PATH = path.join(CWD, 'homepage');
const PUBLIC_SRC_PATH = path.join(CWD, 'public');
const LEGACY_IMAGES_SRC_PATH = path.join(CWD, 'images'); // To also copy root /images if it exists

const DIST_PATH = path.join(CWD, 'dist');
const DIST_IMAGES_PATH = path.join(DIST_PATH, 'images'); // Explicitly for legacy images if not in public

async function buildHomepage() {
    try {
        console.log('Building homepage and copying public assets...');

        // Ensure dist directory exists
        await fs.ensureDir(DIST_PATH);

        // Copy contents of public directory to dist
        // This will include /public/images, /public/chevre.mp3, etc.
        if (await fs.pathExists(PUBLIC_SRC_PATH)) {
            await fs.copy(PUBLIC_SRC_PATH, DIST_PATH, { overwrite: true }); // Overwrite to ensure freshness
            console.log(`Copied contents of ${PUBLIC_SRC_PATH} to ${DIST_PATH}`);
        } else {
            console.warn(`Public directory not found at ${PUBLIC_SRC_PATH}, skipping copy.`);
        }

        // Copy homepage/index.html to dist/index.html, potentially overwriting if public had an index.html
        const homepageHtmlSrc = path.join(HOMEPAGE_SRC_PATH, 'index.html');
        const homepageHtmlDest = path.join(DIST_PATH, 'index.html');
        if (await fs.pathExists(homepageHtmlSrc)) {
            await fs.copy(homepageHtmlSrc, homepageHtmlDest, { overwrite: true });
            console.log(`Copied ${homepageHtmlSrc} to ${homepageHtmlDest}`);
        } else {
            console.warn(`Homepage HTML not found at ${homepageHtmlSrc}, no root index.html created for homepage.`);
        }

        // Also copy root /images to dist/images if it exists, for legacy assets not in public/images
        // This ensures they are available under /images/ path in the output.
        if (await fs.pathExists(LEGACY_IMAGES_SRC_PATH)) {
            await fs.ensureDir(DIST_IMAGES_PATH); // Ensure dist/images exists
            console.log(`Found legacy images at ${LEGACY_IMAGES_SRC_PATH}. Copying its contents to dist/images...`);
            await fs.copy(LEGACY_IMAGES_SRC_PATH, DIST_IMAGES_PATH, { overwrite: true, errorOnExist: false });
            console.log(`Copied contents of ${LEGACY_IMAGES_SRC_PATH} to ${DIST_IMAGES_PATH}`);
        }

        console.log('Homepage and public assets build complete.');

    } catch (error) {
        console.error('Error building homepage and public assets:', error);
        process.exit(1);
    }
}

buildHomepage(); 