document.addEventListener("DOMContentLoaded", () => {

// Matriz de alunos com notas
let alunos = [
  {
    nome: "Myller",
    notas: [8.0, 7.5, 9.0] // Matemática, Português, Ciências
  },
  {
    nome: "Alice",
    notas: [6.5, 8.0, 7.0]
  },
  {
    nome: "Lima",
    notas: [9.0, 9.5, 8.5]
  }
];

const tabela = document.getElementById("tabela-container");

// Nomes das disciplinas
let disciplinas = ["Matemática", "Português", "Ciências"];

// Construção da tabela
let tabelaHTML = "<table><tr><th>Aluno</th>";

// Cabeçalho das disciplinas
for (let i = 0; i < disciplinas.length; i++) {
  tabelaHTML += `<th>${disciplinas[i]}</th>`;
}

// Cabeçalho da média
tabelaHTML += "<th>Média</th></tr>";

// Linhas dos alunos
for (let i = 0; i < alunos.length; i++) {
  let aluno = alunos[i];
  tabelaHTML += `<tr><td>${aluno.nome}</td>`;

  let soma = 0;

  for (let j = 0; j < aluno.notas.length; j++) {
    let nota = aluno.notas[j];
    tabelaHTML += `<td>${nota}</td>`;
    soma += nota;
  }

  let media = (soma / aluno.notas.length).toFixed(2);
  tabelaHTML += `<td><strong>${media}</strong></td></tr>`;
}

tabelaHTML += "</table>";

// Insere a tabela no HTML
document.getElementById("tabela-container").innerHTML = tabelaHTML;

});