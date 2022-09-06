const express = require('express');

const router = express.Router();

const produtos = require('../data/produtos');
const produtosSeparacao = require('../data/produtosSeparacao');

router.get('/', (req, res) => {
    res.send(JSON.stringify(produtosSeparacao));
});

router.post('/', (req, res) => {

    const { uid } = req.body;

    const produtoLido = produtos.find(prod => prod.uid === uid);

    produtosSeparacao.push(produtoLido);

    res.send("POST SEP OK!")
})

module.exports = router;