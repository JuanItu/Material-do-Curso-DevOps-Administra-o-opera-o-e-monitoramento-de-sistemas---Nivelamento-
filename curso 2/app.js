let numeroSecreto = numeroAleatorio();

function exibirTextoTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
exibirTextoTela('h1', 'Jogo do numero secreto' );
exibirTextoTela('p', 'Escolha um numero de 1 a 10');

function verificarChute(){
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);
}

function numeroAleatorio() {
    return parseInt(Math.random() *10 + 1);
}