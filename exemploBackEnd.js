EXEMPLOS

1. 
let nome = "Amanda"; //string
let idade = 23; // number
let altura = 1.69; // number

2.
let nota;
console.log(nota); // undefined

nota = null;
console.log(nota); // null

3.
console.log(`Minha altura é ${alturaEmMetros} metros e a minha idade é ${idade} anos`); // string template
// resposta do terminal: Minha altura é 1.69 metros e a minha idade é 23 anos

4.
let resto = 12 % 5;
console.log(resto); // 2

5.
let x = 10, y = 2;
let resultado = x + y;
console.log(resultado); // 12
resultado = x - y;
console.log(resultado); // 8
resultado = x * y;
console.log(resultado); // 20
resultado = x / y;
console.log(resultado); // 5

6.
let x = 12;
x = x + 3; isso é equivalente a isso x += 3;
x = x - 3; isso é equivalente a isso x -= 3;
x = x * 3; isso é equivalente a isso x *= 3;
x = x / 3; isso é equivalente a isso x /= 3;
console.log(x);

7.
let x = 10, y = 2;
resultado = x - y;
console.log(`A subtração de ${x} e ${y} é ${resultado}`); // A subtração de 10 e 2 é 8
resultado = x * y;
console.log(`A multiplicação de ${x} e ${y} é`, resultado); // A multiplicação de 10 e 2 é 20

8. concatenar strings
let nome = "Amanda";
let sobrenome = "Aureliano";
let nomeCompleto = nome + " " + sobrenome;
console.log(nomeCompleto); // Amanda Aureliano

9. Truthiness
if (apelido) {
  console.log(apelido);
} else if (sobrenome) {
    console.log(primeiroNome + " " + sobrenome);
} else {
    console.log(primeiroNome);
}

10. Ternário
const saldo = 10;
const unidade = (saldo === 1 ? “real” : “reais”);
console.log(`Você tem ${saldo} ${unidade}`); 
typeof variável == 'number' // retorna o tipo da variável
array.includes(variável) // vai pegar a variável e incluir na array, se a variável já existir vai retornar true

11.
const caractere = "E";

if (caractere === "A" || caractere === "E" || caractere === "I" || caractere === "O" || caractere === "U") {
     console.log("Vogal maiúscula");
} else if (caractere === "a" || caractere === "e" || caractere === "i" || caractere === "o" || caractere === "u") {
     console.log("Vogal minúscula");
} else if (typeof caractere == 'number') {
     console.log("Número");
} else {
     console.log("Consoante");
}

12.
let minusculas = ['a', 'e', 'i', 'o', 'u'];
let maiúsculas = ['A', 'E', 'I', 'O', 'U'];
let resultado;

resultado = maiúsculas.includes(caractere) ? "Vogal maiúscula" :
            minusculas.includes(caractere) ? "Vogal minúscula" :
typeof caractere == 'number' ? "Número" : "Consoante"

if (maiúsculas.includes(caractere)) {
    resultado = "Vogal maiúscula";
} else if (minusculas.includes(caractere)) {
    resultado = "Vogal minúscula";
} else if (typeof caractere == 'number') {
    resultado = "Número";
} else {
    resultado = "Consoante";
}
console.log(resultado);

13. 
const paises = ['Brasil', 'Russia', 'India', 'China', 'África do Sul'];

paises.push('Madagascar'); // [ 'Brasil', 'Russia', 'India', 'China', 'África do Sul', 'Madagascar' ]
paises.pop(); // [ 'Brasil', 'Russia', 'India', 'China', 'África do Sul' ]
paises.unshift('França'); // [ 'França', 'Brasil', 'Russia', 'India', 'China', 'África do Sul' ]
paises.shift(); // [ 'Brasil', 'Russia', 'India', 'China', 'África do Sul' ]

const ultimo = paises[paises.length - 1];
console.log(ultimo); // África do Sul
console.log(paises[1]); // Russia
console.log(paises[2]); // India

14.
const numeros = [12, 13, 07, 98, 09];

let i = 0;

//enquanto o i for menor que o tamanho do array
while (i < numeros.length) {
    // executar isso
    console.log(numeros[i]);
    i++;
}

15.
const numeros = [12, 13, 07, 98, 09, 95, 01, 66]; // tamanho 8
let soma = 0;

for (let i = 0; i < numeros.length; i++) {
    // será executado para i de 0 a 7 | 8 não será executado
    soma = soma + numeros[i];
    //soma += numeros[i]; isso é exatamente igual a linha de cima
    console.log(soma);  // 12   25  32  130 139 234 235 301
}

16.
const palavra = 'Alemanha';
let encontrado = false;

for (let letra of palavra) {
    if (letra === 'h') {
        console.log('Tem a letra h');
        encontrado = true;
        break;
    }
}

if (!encontrado) {
    console.log('não tem h');
}

17.
const palavra = 'abracadabra';
let quantidade = 0;

for (let letra of palavra) {
    if (letra === 'a') {
        quantidade++;
    }
}
console.log(quantidade);

18.
for (let i = 10; i >= 0; i--) {
    console.log(i);
} // 10 9 8 7 6 5 4 3 2 1 0

exercicio 6: 
let numero = 2;

while (numero <= 50) {
    console.log(numero);
    numero += 2;
}
