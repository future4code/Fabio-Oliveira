// Exercícios de Interpretação de Código

// Exercício 1 -

// O código faz uma conversão de valores. Através da função, o usuário colocará um valor dentro da const cotacao e traz um retorno fazendo o cálculo do valor em dólar que está sendo informação e a cotação que será informada pelo usuário. Na const meuDinheiro, a função é chamada junto de um valor e então realiza o cálculo chamado no return. O resultado apresentado no console, considerando a cotação atual do dólar, será de 560.


// Exercício 2 -

// O código mostra o resultado de cada investimento informado no tipoDeInvestimento. O switch multiplica o valor informado pelo usuário pelo valor de cada investimento. Em caso de erro de informações, apresenta um alerta. Por fim, retorna o valor final já calculado. 
// Na const novoMontante, o valor informado no console será de 150 * 1.1, totalizando 165.
// Na const segundoMontante, será exibido o alert, pois Tesouro Direto não é um tipo de investimento válido.


// Exercício 3 -

// O código contém um array que passará por um loop do tipo for que irá separá-los em dois grupos que serão contidos nos arrays array1 e array2. Através do if(numero % 2 === 0), o código irá separar os números entre pares e ímpares usando o resto de divisão representado pelo símbolo %. Se os números forem pares, irão para o array1. Se não forem, irão para o array2.
// O primeiro console.log mostra o tamanho total do array numeros, que é 14.
// O segundo console.log mostra o tamanho do array formado apenas por números pares, que é 6.
// O terceiro console.log mostra o tamanho do array formado apenas por números ímpares, que é 8.


// Exercício 4 - 

// O código contém um array que será analisado pelo loop for of. Através das variáveis numero 1 e numero 2.
// No if(numero < numero1), o código irá analisar quais números são menores que o valor de numero1, que no caso é infinito. Considerando o primeiro elemento do array, caso ele seja menor do que o valor de numero1, ele se tornará o novo valor de numero1 e assim até o final do array. Para o segundo if(numero > numero2), a lógica de raciocínio é similar, mas no caso é para encontrar o maior número. Considerando o primeiro elemento do array, caso ele seja maior que o valor de numero2, que no caso é 0, ele se tornará o novo valor de numero2.
// O valor de console.log(numero1) será -10 e o console.log(numero2) será 1590.




// Exercícios de Lógica de Programação

// Exercício 1 -

// For, For Of e While.

// Exemplo For:

// let numeros = [1, 55, 14, 10, 12]

// const exemploFor = () => {for (let i = 0; i < 5; i ++){
//     console.log(i)
// }
// }

// exemploFor()



// Exemplo For... Of... :

// let numeros = [1, 55, 14, 10, 12]

//const exemploForOf = () => for (let numero of numeros){
//     console.log(numero)
// }
// }

// exemploForOf()




// Exemplo While:

// let i = 10

//const exemploWhile = () => while (i <= 20){
//     console.log(i++)
// }
// }

// exemploWhile()


// Exercício 2 -

// boolean 1 = true
// boolean 2 = false
// boolean3 = true
// booleano4 = false

// a) false
// b) false
// c) true
// d) true
// e) true


// Exercício 3 -

// const quantidadeDeNumerosPares = (numero) => {
// let i = 0
// while(i < numero){
//   console.log(i*2)
//   i++
// }
// }

// quantidadeDeNumerosPares(5)

// O código não funcionava pois faltava adicionar um implemento para ele. Tirando o igual pude igualar o pedido no enunciado.


// Exercício 4 -

// const triangulos = (a,b,c) => {
//     if(a === b && b === c){
//         console.log("Este triângulo é equilátero")
    
// } else if(a === b && b !== c){
//     console.log("Este triângulo é isósceles")

// } else{
//     console.log("Este triângulo é escaleno")
// }
// }

// triangulos(1,2,3)


// Exercício 5 -

// let numero1 = Number(prompt("Digite um número"))
// let numero2 = Number(prompt("Digite outro número"))

// let numeroSolicitado = () => {
//     if (numero1 > numero2){
//         console.log(`O maior é: ${numero1}`)

//     }else if(numero2 > numero1){
//         console.log(`O maior é: ${numero2}`)

//     } else {
//         console.log(`Os números são iguais`) 

// }
// }

// let numeroDivisivel = () =>{
//     if (numero1 % numero2 === 0){
//         console.log(`O ${numero1} é divisível por ${numero2}`)

//     } else{
//         console.log(`O ${numero1} não é divisível por ${numero2}`)
//     }
// }

//     let diferencaNumeros = () => {
//     let resultado = numero1 - numero2

//     if(resultado > 0){
//         console.log(`A diferença entre eles é: ${resultado}`)

//     }else{
//         console.log(`A diferença entre eles é: ${-resultado}`)
//     }
    
//     }


// numeroSolicitado()
// numeroDivisivel()
// diferencaNumeros()



// Exercício de Funções

// Exercício 1 -

// const arrayNumeros = () => {


// const numeros = [10, 40, 32, 5]


// let numero1 = Infinity;
// let numero2 = 0;



    
//     for(let numero of numeros ){
//         if(numero < numero1){
//             numero1 = numero;
//         }
//         numeros.splice(1,1)

//         if(numero > numero2){
//             numero2 = numero;
//         }
        
//         numeros.splice(3,1)
//     }

    
//     console.log(numero1)
//     console.log(numero2)

    
// }

// arrayNumeros()




// Exercício 2 -

// const alerta = () => {
//     window.alert("Hello Labenu!");
// }

// alerta()



// Exercícios de Objetos

// Exercício 1 - Arrays são estruturas que nos permitem guardar e acessar informações ao mesmo tempo. Já os objetos, são estruturas que nos permitem guardar e acessar elementos, até mesmo arrays. Com ele conseguimos criar modelos mais realista e organizada.


// Exercício 2 -

// const criaRetangulo = (lado1, lado2) => {

//     const retangulo = {
//     largura: lado1,
//     altura: lado2,
//     perímetro: (2 * (lado1 + lado2)),
//     área: (lado1 * lado2)

//     }
//     console.log(retangulo)
// }

// criaRetangulo()


// Exercício 3 -

// const filmesFavoritos = () => {

// const filmes = {
//         nome: 'As Vantagens de Ser Invisível',
//         direcao: "Stephen Chbosky",
//         anoDeLancamento: 2012,
//         elenco: ['Logan Lerman', 'Ezra Miller', 'Emma Watson']
    
// }
// console.log(`Venha assistir ao filme ${filmes.nome}, de ${filmes.anoDeLancamento}, dirigido por ${filmes.direcao} e estrelado por ${filmes.elenco[0]}, ${filmes.elenco[1]} e ${filmes.elenco[2]}`)
//     }


//     filmesFavoritos()


// Exercício 4-

// const contatoUsuario = {
//     nome: 'Monkey D. Luffy',
//     idade: 19,
//     email: 'luffy@chapeudepalha.com',
//     endereco: 'Thousand Sunny'
// }

// const anonimizarPessoa = () => {
//     const novoContatoUsuario = {
//         ...contatoUsuario,
//         nome: 'ANÔNIMO'
//     }

//     console.log(novoContatoUsuario)
    
// }

// anonimizarPessoa()



// Exercícios de Funções de Array

// Exercício 1 -

// a) 
// const nomesPessoas = [
// 	{ nome: "Pedro", idade: 20 },
// 	{ nome: "João", idade: 10 },
// 	{ nome: "Paula", idade: 12 },
// 	{ nome: "Artur", idade: 89 } 
// ]

// const pessoasAdultas = nomesPessoas.filter( (pessoa) => {

//     if(pessoa.idade >= 20){
//         return true
//     }
// })

// b)

// const pessoasInfantis = nomesPessoas.filter( (pessoa) => {
//     if(pessoa.idade < 20){
//         return true
//     }
// })

// console.log(nomesPessoas)
// console.log(pessoasAdultas)
// console.log(pessoasInfantis)


// Exercício 2-

// a)

const array = [1,2,3,4,5,6]

// const multiplicaArray = array.map( (numero) => {
//    return numero * 2
      
// })

// // b)

// const multiplicaArrayPorTres = array.map( (numero) => {
//     return String(numero * 3)

// })

// console.log(multiplicaArray)
// console.log(multiplicaArrayPorTres)


// // c)

    const paridade = array.map( (numero) => {
        if(numero % 2 === 0){
            return `${numero} é par`
        }
        return `${numero} é ímpar`
    })

    console.log(paridade)


// Exercício 4 -

// a)

// const pessoas = [
// 	{ nome: "Paula", idade: 12, altura: 1.8},
// 	{ nome: "João", idade: 20, altura: 1.3},
// 	{ nome: "Pedro", idade: 15, altura: 1.9},
// 	{ nome: "Luciano", idade: 22, altura: 1.8},
// 	{ nome: "Artur", idade: 10, altura: 1.2},
// 	{ nome: "Soter", idade: 70, altura: 1.9}
// ]

// const permissaoPessoas = pessoas.filter( (pessoa) => {
//     if(pessoa.idade > 14 && pessoa.idade < 60 && pessoa.altura > 1.5 ){
//             return true
//     }

// })

// b)

// const permissaoNegadaPessoas = pessoas.filter( (pessoa) => {
//     if(pessoa.idade < 14 || pessoa.idade > 60 || pessoa.altura < 1.5 ){
//             return true
//     }

// })

// console.log(permissaoPessoas)
// console.log(permissaoNegadaPessoas)