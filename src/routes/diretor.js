var express = require("express");
var router = express.Router();

var diretorController = require("../controllers/diretorController");

router.post("/salvar-avaliacao", function (req, res) {
    var nota = req.body.notaServer;
    var comentario = req.body.comentarioServer;
    var fkUsuario = req.body.fkUsuarioServer;
    var fkDiretor = req.body.fkDiretorServer;

    diretorController.salvarAvaliacao(req, res, nota, comentario, fkUsuario, fkDiretor);
});

router.post("/salvar-favorito", function (req, res) {
    var fkUsuario = req.body.fkUsuarioServer;
    var fkDiretor = req.body.fkDiretorServer;

    diretorController.favoritar(req, res, fkUsuario, fkDiretor);
});

router.get("/alimentar-grafico-barras/:fkDiretor", function (req, res) {
    var fkDiretor = req.params.fkDiretor;
    diretorController.alimentarGraficoBarras(req, res, fkDiretor);
});

router.get("/alimentar-kpi-media/:fkDiretor", function (req, res) {
    var fkDiretor = req.params.fkDiretor;
    diretorController.alimentarKpiMedia(req, res, fkDiretor);
});

router.get("/alimentar-kpi-Qtd-comentarios/:fkDiretor", function (req, res) {
    var fkDiretor = req.params.fkDiretor;
    diretorController.alimentarKpiQtdComentarios(req, res, fkDiretor);
});

router.get("/coletar-comentario/:fkDiretor", function (req, res) {
    var fkDiretor = req.params.fkDiretor;
    diretorController.coletarComentario(req, res, fkDiretor);
});

 

module.exports = router;