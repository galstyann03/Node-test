const fs = require('fs').promises;
const path = require('path');

async function filePrinter(dirPath: string, indentation: number = 0): Promise<void> {
    try {
        const files = await fs.readdir(dirPath);

        for (const file of files) {
            const filePath = path.join(dirPath, file);
            const stats = await fs.stat(filePath);

            if (stats.isDirectory()) {
                console.log(`${"    ".repeat(indentation)}📁${file}`);
                await filePrinter(filePath, indentation + 1);
            } else {
                console.log(`${"    ".repeat(indentation)}📄${file}`);
            }
        }
    } catch (err) {
        throw err;
    }
}

filePrinter("./node_modules").catch(e => console.log(e));