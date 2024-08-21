import fs from 'fs';
import path from 'path';
async function filePrinter(dirPath: string, indentation: number = 0): Promise<void> {
    try {
        const files = await fs.promises.readdir(dirPath);

        for (const file of files) {
            const filePath = path.join(dirPath, file);
            const stats = await fs.promises.stat(filePath);

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

const relativePath: string = "./node_modules";

filePrinter(path.resolve(relativePath)).catch(e => console.log(e));