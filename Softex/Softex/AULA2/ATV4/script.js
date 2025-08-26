function mostrarSaudacao(){
    //Pega o parágrafo com id="mensagem"
    let nome = "Myller";
    const paragrafo = document.getElementById("mensagem");

    //Altera o conteúdo do parágrafo
    paragrafo.textContent = "Olá, " + nome + ", seja bem-vindo!🐻";
}