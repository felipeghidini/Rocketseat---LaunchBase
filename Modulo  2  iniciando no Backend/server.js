const express = require('express');
const server = express();

server.get('/', (req, res) => {
    return res.send('Jesus é o SALVADOR');
})

server.listen(5000, () => {
    console.log("Server is running");
})