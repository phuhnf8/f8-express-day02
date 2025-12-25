const { join } = require('node:path');
const fs = require('node:fs/promises');
const { existsSync, mkdirSync } = require('node:fs');

const loadDB = async (filename) => {
    const target = join(__dirname, '../fakeDB', `${filename}.json`);
    const dir = join(__dirname, '../fakeDB');
    try {
        const data = await fs.readFile(target, { encoding: 'utf-8' });
        return JSON.parse(data);
    } catch (err) {
        if (err.code === 'ENOENT') {
            if (!existsSync(target)) mkdirSync(dir, 744);
            fs.writeFile(target, JSON.stringify([]));
            return '[]';
        }
    }
};

const saveDB = async (filename, data) => {
    const target = join(__dirname, '../fakeDB', `${filename}.json`);
    const txt = await loadDB(filename);
    console.log(txt);
    const current = JSON.parse(txt);
    current.push(data);
    const content = JSON.stringify(current);
    fs.writeFile(target, content);
};

(async () => {
    console.log(
        await saveDB('db', {
            boo: 'beep',
            hil: 1203,
        })
    );
})();

module.exports = {
    loadDB,
    saveDB,
};
