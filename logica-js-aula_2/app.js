alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 9;
console.log(numeroSecreto);
let chute;
let tentativas = 1;


while(chute != numeroSecreto ){
    
    chute = prompt('Escolha um número entre 1 e 10');
    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
       break;
    } else {
        if(chute < numeroSecreto){
            alert('O chute '+ chute + ' é menor que o numero secreto');
        }else{
            alert(`O numero secreto é maior que o ${chute}`);
        }
    }
    tentativas ++;
}
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);
