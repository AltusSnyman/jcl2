const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');

function walkDir(dir, files = []) {
    for (const entry of fs.readdirSync(dir)) {
        const full = path.join(dir, entry);
        if (fs.statSync(full).isDirectory()) {
            walkDir(full, files);
        } else if (/\.(png|jpg|jpeg)$/i.test(entry) && !entry.includes('noise')) {
            files.push(full);
        }
    }
    return files;
}

async function convert() {
    const images = walkDir(publicDir);
    let converted = 0;
    let savedBytes = 0;
    for (const imgPath of images) {
        const webpPath = imgPath.replace(/\.(png|jpg|jpeg)$/i, '.webp');
        if (fs.existsSync(webpPath)) {
            console.log(`SKIP (exists): ${path.relative(publicDir, webpPath)}`);
            continue;
        }
        try {
            const originalSize = fs.statSync(imgPath).size;
            await sharp(imgPath)
                .webp({ quality: 82, effort: 4 })
                .toFile(webpPath);
            const newSize = fs.statSync(webpPath).size;
            const saved = originalSize - newSize;
            savedBytes += saved;
            converted++;
            console.log(`OK: ${path.relative(publicDir, imgPath)} → .webp  (${Math.round(originalSize / 1024)}KB → ${Math.round(newSize / 1024)}KB, saved ${Math.round(saved / 1024)}KB)`);
        } catch (e) {
            console.error(`ERR: ${imgPath}: ${e.message}`);
        }
    }
    console.log(`\nDone: ${converted} images converted. Total saved: ${Math.round(savedBytes / 1024)}KB`);
}

convert();
