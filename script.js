/*let teste= "consoles";

console.log(teste);
console.warn(teste);
console.info(teste);
console.error(teste); 
*/

// 1 . Com base no exemplo do link do slide 1 (o que é javascript), crie um arquivo com um button, que ao clicar exiba a mensagem “Bem vindo ao Reprograma”. 
// Obs. Utilize javascript externo. PAra funcionat tem que criar um <button> no html com a msg bemvindo a reprograma.
/*
//captura a tag button do html. 'button' é uma string que o querySelector recebe e tem que ser assim''
// ele fala vai no meu documento (html) e pega o seletor button. Ele pega só o primeiro.  Se for p pegar todos tem que ser o querySelectorAll.
let botao=document.querySelector('button');

//adiciona o evento clique o 'click' é um evento que eu add. eventlistener aqui selecionei o click para ele ao clicar add a funcao.
botao.addEventListener('click', cliqueBotao);

//criando a funcao para exibir a msg
function cliqueBotao() {
    alert('Bem vindo a reprograma');
}
*/
// 2. Crie 3 variais, e exiba no console o tipo de cada uma, utilizando o typeof
// aqui vai no console e digita typeof nome da variavel e ele printa o tipo ex. typeof nomeNum e ele printa "number"
/*
let nomeNum=10;
let nomeText="Gabi";
let nomeTrue=true;

// Segunda resolução

const nome = "Gabi";
const num = 5;
const ativo = true;

console.log('nome', typeof(nome));
console.log('num', typeof(num));
console.log('ativo', typeof(ativo));
*/

// 3. Crie um botao, que ao ser clicado, exiba:
// - 1 console.log()
// - 1 console.error()
// - 1 console.info()
/*
let capturarP=document.querySelector('p');
capturarP.addEventListener('click', clicaNoBotao);

function clicaNoBotao(){
    console.log('oi meninas')
    console.info('oi meninas')
    console.error('oi meninas')
    console.warn('oi meninas')
}
*/

//--- PARTE Ir e If Ternário ---//


//1. leia um numero e verifique se ele é par ou impar utilizando % 2 === 0
/*
let numeroDigitado = prompt("Digite aqui um número");

if (numeroDigitado % 2 ===0) {
    alert(`${numeroDigitado} é um numero par`)
} else {
     alert(`${numeroDigitado} é um numero impar`)
}
*/

/*2. Faça um script que pede duas notas de um aluno. 
//Em seguida ele deve calcular a média do aluno e dar o seguinte resultado:
 A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
    A mensagem "Reprovado", se a média for menor do que sete;
    A mensagem "Aprovado com Distinção", se a média for igual a dez.
*/
/*
let nota1 = parseFloat(prompt("Digite a primeira nota"));
let nota2 = parseFloat(prompt("Digite a segunda nota"));

let media = ((nota1 + nota2)/2);

if (media ===10){
    alert("Aprovado com distinção");
} else if (media >=7){
    alert("Aprovado");
} else if(media < 7) {
    alert("Reprovado");
}
*/

//3. Faça um script que leia três números inteiros e mostre o maior deles.
//- ler 3 valores
//- condicao qual é o maior deles
/*
let numero1 = parseInt(prompt('Digite o primeiro numero'));
let numero2 = parseInt(prompt('Digite o primeiro numero'));
let numero3 = prompt(('Digite o primeiro numero'));

if (numero1 > numero2 && numero1 > numero3) {
    console.log('numero 1 é maior', numero1);
} else if (numero2 > numero1 && numero2 > numero3){
    console.log ('numero 2 é maior', numero2);
} else {
    console.log('numero 3 é maior', numero3);
}
*/
/*
// colocar mais uma condição para exibir mensagem se todos os numeros forem iguais.
let numero1 = parseInt(prompt('Digite o primeiro numero'));
let numero2 = parseInt(prompt('Digite o primeiro numero'));
let numero3 = parseInt(prompt('Digite o primeiro numero'));

if (numero1 > numero2 && numero1 > numero3) {
    console.log('numero 1 é maior', numero1);
} else if (numero2 > numero1 && numero2 > numero3){
    console.log ('numero 2 é maior', numero2);
} else if (numero3 > numero1 && numero3 > numero2) {
    console.log('numero 3 é maior', numero3);
}
if (numero1 === numero2 && numero1 === numero3){
    console.log('os números são iguais')
}
*/

//4. Faça um script que pede dois inteiros e armazene eles em duas variáveis. Em seguida, troque o valor das variáveis, invertendo e exibindo o antes e o depois em uma janela de alert.
// utilizar uma variável auxiliar - varAux para armazenar um dos numeros.
/*
let x = 10;
let y = 5;
let varAux = 0;
console.log(`valores iniciais ${x}, ${y}, ${varAux}`)
               // valores iniciais 10, 5, 0

varAux = x;    // passo o valor de x para var, logo aqui var vale 10
x = y;         // aqui x assume o valor de y, logo x=5               
y = varAux;    // aqui eu passo o valor do varAux que era o valor do x para Y, logo Y = 10
varAux = 0;    // aqui eu zero novamente o valor do varAux.
console.log(`valores finais ${x}, ${y}, ${varAux}`)
              // valores finais 5, 10, 0

*/

//Transforme os ifs abaixo em if ternario (condicao ? exp 1 : exp2 ).

// 1. 
// if(a > 0) {
// resultado = "valor maior que 0";
// } else {
// resultado = "valor = 0";
// }
/*
let a = 10;
resultado = (a > 0) ? "a é maior" : "valor = 0";
console.log(resultado)
*/

// 2.
// if(sexo === 'feminino') {
// alert('seja bem vinda');
// } else {
// alert('seja bem vindo')
// }
/*
let genero = prompt("Digite seu genero");
(genero ==='feminino') ? alert("seja bem-vinda") : alert("seja bem-vindo");
*/
// 3.
// var isIphone = false;
// var os;

// if (isIphone) {
//   os = "iOS";
// } else {
//   os = "Android";
// }
/*
let isIphone = false;
let os = "";
os = (isIphone) ? "iOS" : "Android";
console.log(os);
*/

/*
let isIphone = false
let os;
os = (isIphone) ? 'ios' : 'android'
os = (isIphone === true) : 'ios' : 'android' 
*/

// 4.
// if(salario < 5000) {
// 	cargo = "junior"
// } else {
// 	cargo = "pleno"
// }

// duas resoluções com o prompt e com salario definido.
//let salario = prompt("digite o salario");
/*
let salario = 7000;
let cargo = "";
cargo = (salario < 5000) ? "junior" : "pleno";
console.log(cargo);
*/

//------Switch-------

//Crie uma variável chamada “fruta”. Esta variável deve receber uma string com o nome de uma fruta. Após, crie uma estrutura condicional switch que receba esta variável e que possua três casos: caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com escassez de kiwis” e caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções e verifique o console do seu navegador. Crie também um default, que retornará uma mensagem de erro no console.
/*
let fruta = prompt("Digite uma fruta aqui");

switch (fruta) {
    case 'maçã':
        console.log("Não vendemos esta fruta aqui");
        break;
    case 'kiwi':
        console.log("Estamos com escassez de kiwis");
        break;
    case 'melancia':
        console.log("Aqui está, são 3 reais o quilo");
        break;
    default:
        console.error("erro no console");
}
*/
// Faça um switch onde ao digitar o nr saia o mês correspondente.
// Se fizer com 1 variável apenas ele vai sobrescrever.
/*
let mes = parseInt(prompt("Digite um numero entre 1 e 12 aqui"));
let nomeMes = ""

switch (mes) {
    case 1:
        nomeMes = "Janeiro";
        break;
    case 2:
        nomeMes = "Fevereiro";
        break;
    case 3:
        nomeMes = "Março";
        break;
    case 4:
        nomeMes = "Abril";
        break;
    case 5:
        nomeMes = "Maio";
        break;
    case 6:
        nomeMes = "Junho";
        break;
    case 7:
        nomeMes = "Julho";
        break;
    case 8:
        nomeMes = "Agosto";
        break;
    case 9:
        nomeMes = "Setembro";
        break;
    case 10:
        nomeMes = "Outubro";
        break;
    case 11:
        nomeMes = "Novembro";
        break;
    case 12:
        nomeMes = "Dezembro";
        break;
    default:
        nomeMes = "Inválido";
}
alert(nomeMes);
*/

// 3. Calcule o valor do salario do dev conforme valores abaixos.
// salario Base: R$ 2.500,00
// salario Junior = salario base + 20%
// salario Pleno = salario base + 35%
// salario Senior = salario base + 50% 
/*
let cargo = prompt("Digite o nível do cargo: junior, pleno ou senior"); // não usa parseInt pq esta digitando letra
let salarioBase = 2500; // não precisa parseFloat pq não dá números decimais.
let salario = ""

switch (cargo) { 
    case "junior":
        salario = salarioBase + (salarioBase * 0.20);  // salarioBase*1.20 (1.20 é = 120%)  / salarioBase *= 0.20
        break;
    case "pleno":
        salario = salarioBase + (salarioBase * 0.35);
        break;
    case "senior":
        salario = salarioBase + (salarioBase * 0.50)
        break;
    default:
        salario = "inválido";
}
alert(`O novo salário é R$ ${salario.toFixed(2)}`);
*/

//------OBJETOS ---------

//1. Crie um Objeto pessoa que receba as propriedades: nome, telefone, idade, altura e peso.
/*
let pessoa = {
    nome: "Gilsevania",
    telefone: 11998271977,
    idade: 42,   // como colocar anos aqui? mistura string com numero?
    altura: 1.63,
    peso: 89,
}
console.log(pessoa);
*/
//2. Crie um objeto animal que receba as propriedades: porte(pequeno, médio ou grande), especie, raça.
/*
let animal = new Object();

animal.porte = "Grande";
animal.especie = "Gado";
animal.raça = "Angus";
*/

// Formas de exibir  de converter e exibir o objeto
//alert(`animal de porte: ${animal.porte}, espécie: ${animal.especie}, raça: ${animal.raça} `);
//alert(JSON.stringify(animal)); convertendo direto no alert ou converto ela antes >
// animal = JSON.(JSON.stringify(animal); e dou alert(animal);
//console.log(animal);

//3. Crie um objeto curso que receba as propriedades: nome, período, professor(a).  
/*
let curso = new Object ({ nome: "JavaScript", periodo:"integral", professor: "Creonilse"});
console.log(curso);
*/

//-----ARRAY-----

//1. Crie uma lista (string), que contenha o nome de 10 alunas da reprograma. 
//Em seguida, verifique o tamanho, e qual aluna está na posição 5.
/*
let alunasReprograma = [
    "Debora", "Adela", "Carolina", "Clau", "Gabrielli", "Giulia", "Ilza", "Jê", "Jordana", "Maria" ];
alert(`o tamanho da lista é ${alunasReprograma.length}, e a aluna da posição 5 é ${alunasReprograma[4]}`);
*/

//2. Crie uma lista de matérias que contenha 6 matérias, e mostre qual matéria está na posição 4.
/*
let materias = [];
materias.push ("lógica");      //push c/ td na mesma linha materias.push ("x", "y", "z");
materias.push ("css");
materias.push ("html");
materias.push ("js");
materias.push ("react");
materias.push ("angular");
materias.push ("orientação profissional")
alert(`A matéria da posição 4 da lista é ${materias[3]}`);
*/

//3. Crie uma lista de números fora de ordem e ordene-a utilizando o método .sort();
/*
let numForaOrdem = [9,8,7,6,5,4,3,2,1];
numForaOrdem.sort(); // (9) [1, 2, 3, 4, 5, 6, 7, 8, 9]
// se colocar numeros 1,4, 21, 54, 34, ele vai colocar pela ordem do primeiro numero, não o nr todo = 1,21,34,4,54.
*/

//4. Crie uma lista vazia e verifique se o length == 0 (se a lista estiver vazia) 
// .push() inserindo algum valor dentro. Se o length for maior > 0 alert() mostrando o tamanho.
/*
let lista = [];
console.log(lista, "valor inicial da lista");

if(lista.length === 0) {
    lista.push("oi");
    console.log(lista, "dentro do primeiro if");
} 
if (lista.length > 0 ) {
    console.log(lista.length, "dento do segundo if")
}
*/

