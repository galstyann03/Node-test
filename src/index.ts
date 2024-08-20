const fs = require('fs');
const path = require('path');

async function filePrinter(path: string):Promise<string> {
    return await fs.promises.readdir(path);
}

filePrinter("./node_modules").then((data) => {
    for (const file of data) {
        fs.stat(path.join(__dirname, file), (err: any, stats: any) => {
            if (err) throw err;
            console.log(stats.isDirectory());
        });

    }
    console.log(data[0])
    console.log(path.dirname(data[0]));
})
    .catch(e => console.log(e));