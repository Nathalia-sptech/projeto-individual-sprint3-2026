var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

// Rota para o Direct.on
router.post("/cadastrar-directon", function (req, res) {
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (!nome || !email || !senha) {
        return res.status(400).send("Preencha todos os campos!");
    }

    usuarioController.cadastrarDirecton(req, res, nome, email, senha);
});

router.post("/autenticar-directon", function (req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (!email || !senha) {
        return res.status(400).send("Preencha todos os campos!");
    }

    usuarioController.autenticarDirecton(req, res, email, senha);
});

module.exports = router;