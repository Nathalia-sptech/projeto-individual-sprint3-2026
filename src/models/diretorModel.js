var database = require("../database/config")

// salvar as avaliações
function salvarAvaliacao(nota, fkUsuario, fkDiretor) {
    var instrucaoSql = `
        INSERT INTO DirectOn.avaliacao (fk_usuario, fk_diretor, nota)
        VALUES ('${fkUsuario}', '${fkDiretor}', '${nota}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function salvarComentario(comentario, fkUsuario, fkDiretor) {
    var instrucaoSql = `
        INSERT INTO DirectOn.comentario (fk_usuario, fk_diretor, texto)
        VALUES ('${fkUsuario}', '${fkDiretor}', '${comentario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// alimentar gráfico de barra(notas)
function alimentarGraficoBarras(fkDiretor){
    var instrucaoSql = `
        SELECT nota, COUNT(*) as quantidade 
        FROM DirectOn.avaliacao 
        WHERE fk_diretor = ${fkDiretor}
        GROUP BY nota
        ORDER BY nota;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}

// KPI de média de avaliações
function alimentarKpiMedia(fkDiretor){
    var instrucaoSql = `
        SELECT ROUND(AVG(nota),1) as media 
        FROM DirectOn.avaliacao 
        WHERE fk_diretor = ${fkDiretor};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
 // KPI Quantidade de comentários
 function alimentarKpiQtdComentarios(fkDiretor){
    var instrucaoSql = `
        SELECT COUNT(*) as total 
        FROM DirectOn.comentario 
        WHERE fk_diretor = ${fkDiretor};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// coletando os comentários para a sessão de comentários
 function coletarComentario(fkDiretor){
    var instrucaoSql = `
        SELECT c.texto as coment, u.usuario as nomeUsuario
FROM DirectOn.comentario c
INNER JOIN DirectOn.usuario u ON c.fk_usuario = u.id
WHERE c.fk_diretor = ${fkDiretor}
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
module.exports = {
    salvarAvaliacao,
    salvarComentario,
    alimentarGraficoBarras,
    alimentarKpiMedia,
    alimentarKpiQtdComentarios,
    coletarComentario
}