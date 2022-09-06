const express = require('express');

const path = require('path');
const router = express.Router();

const produtos = require('../data/produtos');

router.get('/', (req, res) => {
    res.send(JSON.stringify(produtos));
});

router.post('/', (req, res) => {
    
    const produto = req.body;

    produtos.push(produto);

    res.send('POST CADASTRO OK!');
});

module.exports = router;