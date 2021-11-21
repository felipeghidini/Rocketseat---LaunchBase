const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
const videos = require("./data");

server.use(express.static('public'));

server.set('view engine', 'njk');

nunjucks.configure('views', {
    express: server,
    autoescape: false
})

server.get('/', (req, res) => {
    const data = {
        avatar_url: "https://avatars.githubusercontent.com/u/49081674?s=400&u=8ae5c833ff4fe50cae5a2209e7f5fed13f671619&v=4",
        name: "Felipe Ghidini",
        role: "Aluno Rocketseat",
        description: "Programador focado em Desenvolvimento Web, que procura um maior aperfeiçoamento a cada dia",
        links: [
            { name: "Github", url: 'https://github.com/felipeghidini'},
            { name: "Linkedin", url: "https://www.linkedin.com/in/felipe-ghidini-471a3510a/"}
        ]
    }

    return res.render('sobre', { sobre: data });
})

server.get('/classes', (req, res) => {
    return res.render('classes', { items: videos });
})

server.listen(5000, () => {
    console.log("Server is running");
})