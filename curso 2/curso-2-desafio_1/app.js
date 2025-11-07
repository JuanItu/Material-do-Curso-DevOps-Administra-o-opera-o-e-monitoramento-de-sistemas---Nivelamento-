let cidadeEscolhida;
let calculo;

let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio!';

function verificarConsole(){
    console.log('O botão foi clickado!');
}
function verificarAlerta(){
    console.log('Eu amop JS');
}
function verificarPrompt(){
    cidade = prompt('Escolha uma cidade:');
    console.log(`Estive em ${cidade} e lembrei de você.`);
    if (cidade) {
        mensagemFinal = `Estive em ${cidade} e lembrei de você.`; 
    }
    alert(mensagemFinal);
}

function verificarSoma(){
    num1 = parseInt(prompt(`Escolha um número inteiro:`));
    num2 = parseInt(prompt(`Escolha outro número inteiro:`));
    calculo = num1 + num2;
    alert(`${num1} + ${num2} = ${calculo}`);
}
    