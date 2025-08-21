// script.js
document.getElementById("btnVerificar").addEventListener("click", function() {
    const resultado = document.getElementById("resultado");
    let idade = Number(document.getElementById("idade").value);
    let temCNH = document.getElementById("temCNH").checked;

    if (idade >= 18 && temCNH) {
        resultado.textContent = "Você está apto a dirigir.";
        resultado.className = "verde";
    } else {
        resultado.textContent = "Você não está apto a dirigir.";
        resultado.className = "vermelho";
    }
});