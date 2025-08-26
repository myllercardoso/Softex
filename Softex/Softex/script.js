document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById("numero");
    const btnGerar = document.getElementById("btnGerar");
    const btnLimpar = document.getElementById("btnLimpar");
    const lista = document.getElementById("resultado");
    
    function gerarTabuada() {
        const valor = Number (input.value);
        lista.innerHTML = "";

        if (Number.isNaN(valor)) {
            const li = document.createElement("li");
            li.textContent = "Digite um número válido.";
            lista.appendChild(li);
            return;
        }

        for (let i = 1; i <= 10; i++) {
            const li = document.createElement("li");
            li.textContent = `${valor} x ${i} = ${valor * i}`;
            lista.appendChild(li);
        }
    }

    function limpar() {
        input.value = '';
        lista.innerHTML = '';
        input.focus()
    }

    btnGerar.addEventListener('click', gerarTabuada);
    btnLimpar.addEventListener('click', limpar);
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') gerarTabuada ();

    

    })

})
