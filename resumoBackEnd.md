<html>

   <head>
       <ul> <h1> RESUMO BACK END </h1> </ul>
    </head>
<body>

    Git: controle de versão.
    GitHub: plataforma (rede social).
    Ramificações (Branch): duplicação do projeto que permite alterar partes do código separadamente.
    Escopo {}: é a região onde as variaveis existem.
    
    Tipos de dados:  string: tipo de variavel (texto)
                     number: tipo de variavel (numerica)
                     bool (booleano): variavel do tipo verdadeiro ou falso
                     null: indica valor nulo (utilizada para excluir um valor de uma variavel sem declarar outro valor)
                     undefined: uma variavel quando o valor nao foi definida 
    
    string template: usar crase ` 
                     exemplo: console.log(`Minha altura é ${alturaEmMetros} metros e a minha idade é ${idade} anos`);
	                 resposta do terminal: Minha altura é 1.69 metros e a minha idade é 23 anos.
   
   
    Variaveis: const: usado para definir uma variavel que seja constante, que não pode ser alterada (atribuida um novo valor);
               let: usado para definir uma variavel que possa ser alterada (atribuida um novo valor);
               var: parecido com o let, mas nao é mais utilizado. ele consegue rodar um codigo sem declarar um valor, undefined.
    
    Operadores aritméticos:	resto da divisão % 
				let resultado = x + y;
				resultado = x - y;
				resultado = x * y;
				resultado = x / y;

				x = x + 3; isso é equivalente a isso x += 3;
				x = x - 3; isso é equivalente a isso x -= 3;
				x = x * 3; isso é equivalente a isso x *= 3;
				x = x / 3; isso é equivalente a isso x /= 3;

				x++; é equivalente a x = x + 1 e equivalente a x +=1; primeiro retorna e depois soma o valor de x
				x– ;é equivalente a x = x - 1 e equivalente a x -=1; primeiro retorna e depois subtrai o valor de x
				++x: primeiro soma e depois retorna o valor de x
				–x; primeiro subtrai e depois retorna o valor de x
                           
    math.sqrt(x): retorna a raiz quadrada de um numero(x)
    math.pow(x, y) isso equivale a isso (x) ** (y): potenciação
    math.toFixed(2)
    math.round(2)

    concatenar strings:	let nomeCompleto = nome + " " + sobrenome;
				console.log(nomeCompleto); // Amanda Aureliano

    infinity: a resposta é perto do infinito
    NaN: a resposta nao é um numero real


operadores de comparação:    > (maior) >=(maior ou igual)
< (menor) <= (menor ou igual)
operadores de igualdade:       == comparação
= afirmação
!= diferente
operadores de identidade:      === idêntico (conteúdo e tipo igual)
			!== não idêntico
condicionais: if (condição) {
      } else if (condição) {
      } else {}
Debugger: ferramenta feita para encontrar bugs (CTRL + SHIFT + D)
E lógico: &&
OU lógico: ||
Operador de negação: ! ex: !temIngresso = falso
Truthiness: verificar se uma coisa é truthy ou falsy
	ex: if (apelido != 0) {
    console.log(apelido);
} else if (sobrenome != 0) {
    console.log(`${primeiroNome} ${sobrenome}`);
} else {
    console.log(primeiroNome);
}
 isso é equivalente ao Truthiness 
if (apelido) {
    console.log(apelido);
} else if (sobrenome) {
    console.log(primeiroNome + " " + sobrenome);
} else {
    console.log(primeiroNome)
}

Ternário: é a forma mais simples de fazer uma condição if
condição ? expr1 : expr2
condição é sempre uma expressão que será avaliada como verdadeiro ou falso
expr1 e expr2 são expressões que contém valores de qualquer tipo, que serão retornados
Caso a condição seja verdadeira, expr1 é retornado
Caso a condição seja falsa, expr2 é retornado
ex:  const saldo = 10;
const unidade = (saldo === 1 ? “real” : “reais”);
console.log(`Você tem ${saldo} ${unidade}`); 
typeof variável == 'number' : retorna o tipo da variável
array.includes(variável) : vai pegar a variável e incluir na array, se a variável já existir vai retornar true

const caractere = "E";

// if (caractere === "A" || caractere === "E" || caractere === "I" || caractere === "O" || caractere === "U") {
//     console.log("Vogal maiúscula");
// } else if (caractere === "a" || caractere === "e" || caractere === "i" || caractere === "o" || caractere === "u") {
//     console.log("Vogal minúscula");
// } else if (typeof caractere == 'number') {
//     console.log("Número");
// } else {
//     console.log("Consoante");
// }

let minusculas = ['a', 'e', 'i', 'o', 'u'];
let maiúsculas = ['A', 'E', 'I', 'O', 'U'];
let resultado;

// resultado =
//     maiúsculas.includes(caractere) ? "Vogal maiúscula" :
//         minusculas.includes(caractere) ? "Vogal minúscula" :
//             typeof caractere == 'number' ? "Número" : "Consoante"

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
