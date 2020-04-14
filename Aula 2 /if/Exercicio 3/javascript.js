let numero1 = parseInt(prompt('Digite o primeiro numero: '));
let numero2 = parseInt(prompt('Digite o segundo numero: '));
let numero3 = parseInt(prompt('Digite o terceiro numero: '));

let total = "";

if (numero1 === numero2 && numero2 === numero3) {
    console.log(' os numeros sao iguais');
} else if (numero1 > numero2 && numero1 > numero3) {
    total = `numero 1 é maior  ${numero1}`;
    console.log(total);
} else if (numero2 > numero1 && numero2 > numero3) {
    console.log('numero 2 é maior ' + numero2);
} else {
    console.log('numero 3 é maior ', numero3);
}

/*  colocar mais uma condicao para exibir mensagem
 se todos os numeros forem iguais */
