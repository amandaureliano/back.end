<h1>REVISÃO</h1>

    - while: quando uma expressao seja verdadeira e quer que seja executada interruptamente é melhor usar while.
    é mais utilizado quando uma variavel tem um valor booleano.
    
    - for: quando um array tem um tamanho especifio é melhor usar o for (é mais indicado usar o let para dizer que 
    a variavel vai ter o valor alterado, mas funciona com const tbm)
    
    - array: é melhor sempre utilizar o for of: 
        for (let item of array) {
            // código
        };
   
    - forEach -> para cada(tradução)
    
                const pessoas = [
                    'Aline',
                    'Paulo',
                    'Joilton',
                    'Jailson',
                    'Mendes'
                ];

                pessoas.forEach(valor, indice) -> {
                console.log(valor, indice);
                }
    
    - for de C -> 
    
                for (let = 0; i < pessoas.lenght; i++) {
                    let valor = pessoas[i];
                    let indice = i;
                }
                console.log(valor, i);
    
    
    - .charAt(posição) -> pegaria o indice
    
                if (valor.charAt(0) === "A" && valor.charAt(1) === "B") {
                    quantidadeDePessoasComLetraA++;
                }
                
    - 
    
