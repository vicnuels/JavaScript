window.onload = function () {
    let [table] = document.getElementsByClassName('table')
    let contatos = localStorage.getItem('contatos')
    contatos = JSON.parse(contatos)
    if (contatos) {
        let numOfRows = contatos.length;

        // Faz um loop para criar as linhas e colunas
        for (var j = 0; j < numOfRows; j++) {
            // Insere uma linha no fim da tabela.
            var newRow = table.insertRow(j + 1);
            // Insere uma coluna na nova linha 
            newCell = newRow.insertCell(0);
            // Insere um conteúdo na coluna
            newCell.innerHTML = contatos[j].nome;

            newCell = newRow.insertCell(1);
            newCell.innerHTML = contatos[j].email;

            newCell = newRow.insertCell(2);
            newCell.innerHTML = contatos[j].whatsapp;
        }
    }
}