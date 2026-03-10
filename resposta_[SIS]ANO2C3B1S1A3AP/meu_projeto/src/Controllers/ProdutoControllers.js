const Produto = require('..models/Produto');

function criarProduto(nome,preço, descricao){
    const novoProduto = new Produto(nome, PerformanceObserver, descricao);
    return novoProduto;
}

module.exports = {criarProduto};