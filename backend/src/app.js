const express = require('express');
const app = express();

const path = require('path');

const postsFolder = require('./markdownReader');

const reactBuildPath = '../../frontend/build';

app.use(express.json());
app.use(express.static(path.join(__dirname, reactBuildPath)));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, reactBuildPath + '/index.html'));
});

app.get('/post/:id', (req, res) => {
    res.sendFile(path.join(__dirname, reactBuildPath + '/index.html'));
});

app.get('/api/postList', async (req, res) => {
    try {
        const postsFiles = await postsFolder.readMarkdownFolder();
        res.send(postsFiles);
    } catch (error) {
        res.status(500).send('Error');
    }
});

app.get('/api/postList/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const postsFile = await postsFolder.readMarkdownFile(id);
        res.send(postsFile);
    } catch (error) {
        res.status(500).send('Error');
    }
});

app.listen(3000, () => {
    console.log('Server is listening...')
});