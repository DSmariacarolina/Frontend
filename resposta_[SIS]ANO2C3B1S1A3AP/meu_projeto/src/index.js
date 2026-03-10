const Produto = require('../models/Produto');

function criarProduto(nome, preco, descricao) {
    const novoProduto = new Produto(nome, preco, descricao);
    return novoProduto;
}

module.exports = { criarProduto };
