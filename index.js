const express = require('express');
const app = express();

const rotasProdutos = require('./routes/produtos.js');
const rotasSeparacao = require('./routes/separacao.js');

const PORT = 3000;

const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use('/produtos', rotasProdutos);
app.use('/separacao', rotasSeparacao);

app.listen(PORT, () => {
    console.log(`Server running in port ${PORT}`);
});





