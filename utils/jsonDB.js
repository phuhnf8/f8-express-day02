const { join } = require('node:path');
const fs = require('node:fs/promises');
const { existsSync, mkdirSync } = require('node:fs');
const RELATIVE_PATH = '../src/fakeDB';
const loadDB = async (filename) => {
    const target = join(__dirname, RELATIVE_PATH, `${filename}.json`);
    const dir = join(__dirname, RELATIVE_PATH);
    try {
        const data = await fs.readFile(target, { encoding: 'utf-8' });
        return JSON.parse(data);
    } catch (err) {
        if (err.code === 'ENOENT') {
            if (!existsSync(target)) mkdirSync(dir, 744);
            await fs.writeFile(target, JSON.stringify([]));
            return [];
        }
    }
};

const saveDB = async (filename, data) => {
    const target = join(__dirname, RELATIVE_PATH, `${filename}.json`);
    const dir = join(__dirname, RELATIVE_PATH);
    if (!existsSync(dir)) mkdirSync(dir, 744);

    // const current = await loadDB(filename);
    // current.push(data);

    const content = JSON.stringify(data);
    fs.writeFile(target, content);
};

module.exports = {
    loadDB,
    saveDB,
};
