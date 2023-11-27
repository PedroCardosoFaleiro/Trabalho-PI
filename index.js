const express = require('express');
const server = express();
const dados = require('./src/data/dados.json');
const fs = require('fs');

server.use(express.json());

server.listen(3000, () => {
    console.log("Servidor está funcionando!");
});

server.get('/medicamentos', (req, res) => {
    res.json(dados.medicamentos);
});

server.post('/medicamentos', (req, res) => {
    const novoMedicamento = req.body;
    dados.medicamentos.push(novoMedicamento);
    salvarDados(dados);
    res.status(201).json(novoMedicamento);
});

server.put('/medicamentos/:id', (req, res) => {
    const idMedicamento = req.params.id;
    res.send(`Atualizar Medicamento ${idMedicamento}`);
});

server.delete('/medicamentos/:id', (req, res) => {
    const idMedicamento = req.params.id;
   
    res.send(`Excluir Medicamento ${idMedicamento}`);
});

server.get('/clientes', (req, res) => {
    res.json(dados.clientes);
});

server.post('/clientes', (req, res) => {
    const novoCliente = req.body;
    dados.clientes.push(novoCliente);
    salvarDados(dados);
    res.status(201).json(novoCliente);
});

server.put('/clientes/:id', (req, res) => {
    const idCliente = req.params.id;
    res.send(`Atualizar Cliente ${idCliente}`);
});

server.delete('/clientes/:id', (req, res) => {
    const idCliente = req.params.id;
    
    res.send(`Excluir Cliente ${idCliente}`);
});

server.get('/fornecedores', (req, res) => {
    res.json(dados.fornecedores);
});

server.post('/fornecedores', (req, res) => {
    const novoFornecedor = req.body;
    dados.fornecedores.push(novoFornecedor);
    salvarDados(dados);
    res.status(201).json(novoFornecedor);
});

server.put('/fornecedores/:id', (req, res) => {
    const idFornecedor = req.params.id;
    res.send(`Atualizar Fornecedor ${idFornecedor}`);
});

server.delete('/fornecedores/:id', (req, res) => {
    const idFornecedor = req.params.id;
    res.send(`Excluir Fornecedor ${idFornecedor}`);
});

server.get('/vendas', (req, res) => {
    res.json(dados.vendas);
});

server.post('/vendas', (req, res) => {
    const novaVenda = req.body;
    dados.vendas.push(novaVenda);
    salvarDados(dados);
    res.status(201).json(novaVenda);
});

server.put('/vendas/:id', (req, res) => {
    const idVenda = req.params.id;
    res.send(`Atualizar Venda ${idVenda}`);
});

server.delete('/vendas/:id', (req, res) => {
    const idVenda = req.params.id;
    res.send(`Excluir Venda ${idVenda}`);
});

function salvarDados(dados) {
    fs.writeFileSync(__dirname + "/src/data/dados.json", JSON.stringify(dados, null, 2));
}