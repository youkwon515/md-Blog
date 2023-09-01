const fs = require('fs/promises');

const postsFolderPath = './posts';

const readMarkdownFolder = async () => {
    try {
        const files = await fs.readdir(postsFolderPath);
        return files;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

const readMarkdownFile = async (id) => {
    try {
        const fileNameArr = await readMarkdownFolder();
        const markdownContent = await fs.readFile(postsFolderPath + `/${fileNameArr[id]}`, 'utf8');
        return markdownContent;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

module.exports = {
    readMarkdownFolder,
    readMarkdownFile
};