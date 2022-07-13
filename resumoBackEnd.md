<html>

   <head>
       <ul> <h1> RESUMO BACK END </h1> </ul>
    </head>
<body>

    Git: controle de versão.
    GitHub: plataforma (rede social).
    Ramificações (Branch): duplicação do projeto que permite alterar partes do código separadamente.
    Escopo {}: é a região onde as variaveis existem.
    Debugger: ferramenta feita para encontrar bugs (CTRL + SHIFT + D).
    
    Tipos de dados:  string: tipo de variavel (texto).
                     number: tipo de variavel (numerica).
                     bool (booleano): variavel do tipo verdadeiro ou falso.
                     null: indica valor nulo (utilizada para excluir um valor de uma variavel sem declarar outro valor).
                     undefined: uma variavel quando o valor nao foi definida.
    
    String template: usar crase ` 
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

				x++; é equivalente a x = x + 1 e equivalente a x +=1; primeiro retorna e depois soma o valor de x.
				x– ;é equivalente a x = x - 1 e equivalente a x -=1; primeiro retorna e depois subtrai o valor de x.
				++x: primeiro soma e depois retorna o valor de x.
				–x; primeiro subtrai e depois retorna o valor de x.
                           
    math.sqrt(x): retorna a raiz quadrada de um numero(x).
    math.pow(x, y) isso equivale a isso (x) ** (y): potenciação.
    math.toFixed(2)
    math.round(2)

    Concatenar strings:	let nomeCompleto = nome + " " + sobrenome;
				console.log(nomeCompleto); // Amanda Aureliano

    Infinity: a resposta é perto do infinito.
    NaN: a resposta nao é um numero real.
	
    Operador de negação: ! ex: !temIngresso = falso

    Operadores de comparação:	> (maior) >=(maior ou igual)
					< (menor) <= (menor ou igual)

    Operadores de igualdade:	== comparação
					= afirmação
					!= diferente
    
    Operadores de identidade:	=== idêntico (conteúdo e tipo igual)
					!== não idêntico
	
    Condicionais:	if (condição) {
      		} else if (condição) {
      		} else {}
	
    E lógico: &&
    OU lógico: ||
	
    Truthiness: verificar se uma coisa é truthy ou falsy.
    Ternário: é a forma mais simples de fazer uma condição if.
	condição ? expr1 : expr2
	condição é sempre uma expressão que será avaliada como verdadeiro ou falso.
	expr1 e expr2 são expressões que contém valores de qualquer tipo, que serão retornados.
	Caso a condição seja verdadeira, expr1 é retornado.
	Caso a condição seja falsa, expr2 é retornado.
	
     Arrays: vetores ou listas, servem para guardar um conjunto de dados ordenados numa mesma variavel.
	ex: const nomes = ['josé', 'joão', 'maria'];
     indice(index) de um array: é a posição de cada item na lista, sempre começando pelo 0
     o ultimo item da lista tem sempre index = lenght - 1
	const nomesEstudantes = ['jose', 'joão', 'maria', 'joana', 'andre'];
	console.log(nomesEstudantes);

console.log(nomesEstudantes[0]); // jose
console.log(nomesEstudantes[1]); // joao
console.log(nomesEstudantes[2]); // maria
console.log(nomesEstudantes[3]); // joana
console.log(nomesEstudantes[4]); // andre
console.log(nomesEstudantes[5]); // undefined

const notasEstudantes = [0, 10, 5, 7, 9];
console.log(notasEstudantes);

nomesEstudantes[0] = 'andreia'; // substitui o jose por andreia
const x = 3;
nomesEstudantes[x] = 'andreia'; // substitui a joana por andreia utilizando o hard code
nomeDaVariavel.length = tamanho do array
ex: console.log(nomesEstudantes.length); // tamanho do array 5, sempre 1+ que o index do array
nomesEstudantes[nomesEstudantes.length] = 'pedro' // isso, vai adicionar o pedro sempre no ultimo indice
nomesEstudantes.push('pedro'); // isso é exatamente igual a linha acima (para colocar no ultimo item do array)
nomesEstudantes.pop(); // para tirar o ultimo item do array
nomesEstudantes.shift(); // tira o primeiro item do array
nomesEstudantes.unshift(‘jose’); // adiciona no primeiro item do array

while: enquanto, alguma coisa for verdade ele vai executar um bloco de código
exemplo: 
const nomesEstudantes = ['jose', 'joao', 'maria', 'joana', 'andre'];
let indice = 0;

while (indice < nomesEstudantes.length) {   //enquanto
    console.log(nomesEstudantes[indice]);
    indice++;
} // jose   joao    maria   joana   andre

for: for (declaração da variavel; até quando eu quero que seja executado; o que eu quero fazer ao final de cada interação) {}
exemplo:
const nomesEstudantes = ['jose', 'joao', 'maria', 'joana', 'andre'];
for (let i = 0; i < nomesEstudantes.length; i++) {
    console.log(nomesEstudantes[i]);
}

	sintaxe:	for (let item of array) {
    O código entre as chaves se repetirá uma vez para cada item do array
}
código:	for (let nome of nomes) {
    console.log(nome);
}
exemplo: const nomes = ['jose', 'joao', 'maria', 'joana', 'andre'];

for (let nome of nomes) {
    console.log(nome);
}

break: interrompe o loop.
