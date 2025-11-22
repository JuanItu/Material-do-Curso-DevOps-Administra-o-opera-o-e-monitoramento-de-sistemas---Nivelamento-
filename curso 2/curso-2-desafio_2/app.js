function saudacao() {
    console.log('Olá, mundo');
}
saudacao();

function pegarNome() {
    nome = prompt('Me diga seu nome :)');
    console.log(`Olá, ${nome}`);
}
pegarNome(); 

function numero() {
    valor = prompt('Escreva um numero inteiro.');
    dobraValor = valor * 2;
    console.log(`O dobro do seu numero é ${dobraValor}`);
}
numero();

function variosNumeros() {
    
    num1 = parseInt(prompt('Escreva o primeiro numero inteiro.'));
    num2 = parseInt(prompt('Escreva o segundo numero inteiro.'));
    num3 = parseInt(prompt('Escreva o terceiro numero inteiro.'));
    media = (num1 + num2 + num3) / 3;
    console.log(`A media do seu numero é ${media}`);
}
variosNumeros();

function encontrarMaior(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

let numero1 = parseInt(prompt('Escreva o primeiro número inteiro:'));
let numero2 = parseInt(prompt('Escreva o segundo número inteiro:'));

let maior = encontrarMaior(numero1, numero2);
console.log(`O número maior entre ${numero1} e ${numero2} é: ${maior}`);

function numeroVsNumero(numero) {
    let numeroParametro = parseInt(prompt('Escreva o número parâmetro inteiro:'));
    multiplicaNumeroParametro = numeroParametro * numeroParametro;
    console.log(`O resultado da multiplicação de ${numeroParametro} entre ${numeroParametro} é: ${multiplicaNumeroParametro}`);

}
numeroVsNumero();
