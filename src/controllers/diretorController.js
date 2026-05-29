var diretorModel = require("../models/diretorModel");

function salvarAvaliacao(req, res, nota, comentario, fkUsuario, fkDiretor) {
    diretorModel.salvarAvaliacao(nota, fkUsuario, fkDiretor)
        .then(function () {
            return diretorModel.salvarComentario(comentario, fkUsuario, fkDiretor);
        })
        .then(function (resultado) {
            res.json({ sucesso: true });
        }).catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function alimentarGraficoBarras(req, res,fkDiretor){
    diretorModel.alimentarGraficoBarras(fkDiretor)
        .then(function (resultado) {
            res.json(resultado);
        }).catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function alimentarKpiMedia(req, res,fkDiretor){
    diretorModel.alimentarKpiMedia(fkDiretor)
        .then(function (resultado) {
            res.json(resultado);
        }).catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}
function alimentarKpiQtdComentarios(req, res,fkDiretor){
    diretorModel.alimentarKpiQtdComentarios(fkDiretor)
        .then(function (resultado) {
            res.json(resultado);
        }).catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function coletarComentario(req, res,fkDiretor){
    diretorModel.coletarComentario(fkDiretor)
        .then(function (resultado) {
            res.json(resultado);
        }).catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}
module.exports = {
    salvarAvaliacao,
    alimentarGraficoBarras,
    alimentarKpiMedia,
    alimentarKpiQtdComentarios,
    coletarComentario
}