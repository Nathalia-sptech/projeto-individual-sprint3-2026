var usuarioModel = require("../models/usuarioModel");

// Função para o Direct.on
function cadastrarDirecton(req, res, nome, email, senha) {
    usuarioModel.cadastrarDirecton(nome, email, senha)
        .then(function (resultado) {
            res.json({ sucesso: true });
        }).catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function autenticarDirecton(req, res, email, senha) {
    usuarioModel.autenticarDirecton(email, senha)
        .then(function (resultado) {
            if (resultado.length == 1) {
                res.json({ sucesso: true, usuario: resultado[0] });
            } else if (resultado.length == 0) {
                res.status(403).send("Email e/ou senha inválido(s)");
            } else {
                res.status(403).send("Mais de um usuário encontrado!");
            }
        }).catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    cadastrarDirecton,
    autenticarDirecton
}