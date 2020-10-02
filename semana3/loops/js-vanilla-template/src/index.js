// Exercícios de Interpretação de Código

// 1- 
// O código está criando um loop para i e repetindo a let valor dentro do laço for. Conforme o loop vai seguindo, o valor += i segura os valores e joga para a let valor. O resultado impresso no console é 10.

// 2-
// a) 19
//    21
//    23
//    25
//    27
//    30

// b) Não, pois precisaria chamar o índice separado.


// Exercícios de Escrita de Código

// 3- a)

// const numeros = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// for (let i = 0; i < numeros.length; i = i + 1){
//     let elemento = numeros[i];
//     console.log(elemento);
// }

// b)
// const numeros = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// for (let i = 0; i < numeros.length; i = i +1){
//     let elemento = numeros[i];
//     console.log(elemento/10);
// }

// c)
// const numeros = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// 2	const numerosPar = []
// 3	
// 4	for (let numero of numeros){
// 5	    if(numero % 2 === 0){
// 6	        numerosPar.push(numero)
// 7	    }
// 8	    
// 9	}
// 10	
// 11	console.log(numerosPar);

// d)
// const numeros = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// let contador = 0

// for (let numero of numeros){
//     console.log(`O elemento do index ${contador} é ${numero}`)
//     contador ++
// }

// e)
// const numeros = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// let valorMaximo = -Infinity
// let valorMinimo = Infinity


// for(let numero of numeros){
//     if(numero > valorMaximo){
//         valorMaximo = numero
//     }

//     if(numero < valorMinimo){
//         valorMinimo = numero
//     }
// }     
    


// console.log(`O maior valor é: ${valorMaximo} e o menor valor é: ${valorMinimo}`)
