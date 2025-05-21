import fs from 'fs-extra';
import path from 'path';

const CWD = process.cwd();
const DIST_PATH = path.join(CWD, 'dist');

async function clean() {
    try {
        console.log(`Cleaning ${DIST_PATH} directory...`);
        await fs.remove(DIST_PATH);
        console.log('Clean complete.');
    } catch (error) {
        console.error('Error cleaning dist directory:', error);
        process.exit(1);
    }
}

clean(); 