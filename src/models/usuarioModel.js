var database = require("../database/config")


function cadastrarDirecton(nome, email, senha) {
    var instrucaoSql = `
        INSERT INTO DirectOn.usuario (usuario, email, senha) VALUES ('${nome}', '${email}', '${senha}');
    `;
        
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function autenticarDirecton(email, senha) {
    var instrucaoSql = `
        SELECT id, usuario, email FROM DirectOn.usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrarDirecton,
    autenticarDirecton
}