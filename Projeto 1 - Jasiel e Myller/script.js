let tabelaVisivel = false; // flag para controlar visibilidade

document.getElementById("btnAdicionar").addEventListener("click", () => {
    const nome = document.getElementById("nomeAluno").value;
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);

    function calcularMedia(n1, n2, n3) {
        return ((n1 + n2 + n3) / 3).toFixed(2);
    }

    function determinarSituacao(media) {
        if (media >= 7) {
            return "Aprovado";
        } else if (media >= 5) {
            return "Recuperação";
        } else {
            return "Reprovado";
        }
    }

    if (!nome || isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        alert("Preencha todos os campos corretamente.");
        return;
    }

    if (
        nota1 < 0 || nota1 > 10 ||
        nota2 < 0 || nota2 > 10 ||
        nota3 < 0 || nota3 > 10
    ) {
        alert("As notas devem estar entre 0 e 10.");
        return;
    }

    const media = calcularMedia(nota1, nota2, nota3);
    const situacao = determinarSituacao(media);

    const tabela = document.getElementById("tabelaAlunos");
    const corpoTabela = tabela.querySelector("tbody");

    const novaLinha = document.createElement("tr");
    novaLinha.innerHTML = `
        <td>${nome}</td>
        <td>${nota1}</td>
        <td>${nota2}</td>
        <td>${nota3}</td>
        <td>${media}</td>
        <td>${situacao}</td>
    `;
    corpoTabela.appendChild(novaLinha);

    if (!tabelaVisivel) {
        tabela.style.display = "table";
        tabelaVisivel = true;
    }
    
    document.getElementById("nomeAluno").value = "";
    document.getElementById("nota1").value = "";
    document.getElementById("nota2").value = "";
    document.getElementById("nota3").value = "";
});