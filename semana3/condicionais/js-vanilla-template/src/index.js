// Exercícios de Leitura de Código

// Exercício 1- O código realiza o resto da divisão. Com números pares, o usuário receberá a mensagem de que passou no teste. Com números ímpares, de que não passou.

// Exercício 2-
// a) Para que o usuário saiba o preço de uma fruta ao digitar seu nome.
// b) O preço da fruta maçã é R$2,25.
// c) Seria exibido: "O preço da fruta pêra é R$5. Exibindo o valor de default."

// Exercício 3-
// a) Gerando um prompt de número.
// b) Digitou 10: "Esse número passou no teste." Digitou -10: Nada acontece.
// c) Deu erro na let mensagem pois ela está no bloco errado. Ela deveria estar junto do console.log.



// Exercícios de Escrita de Código

// Exercício 4-

// let idade = Number(prompt("Digite a sua idade."))
// let idadeParaDirigir = "18"

// if (idade >= idadeParaDirigir) {
//     console.log("Parabéns, você pode dirigir.")

// } else{
//     console.log("Desculpe, mas você não pode dirigir.")
// }

// Exercício 5- 

// let Matutino = "M"
// let Vespertino = "V"
// let Noturno = "N"
// let turno = prompt(`"Qual o seu turno? Digite, " ${Matutino}, ${Vespertino} "ou" ${Noturno}".""`)

// if (turno === Matutino){
//     console.log("Bom Dia!")

// } else if (turno === Vespertino){
//     console.log("Boa Tarde!")

// } else if (turno === Noturno){
//     console.log("Boa Noite!")
// }

// Exercício 6-
// let Matutino = "M"
// let Vespertino = "V"
// let Noturno = "N"
// let turno = prompt(`"Qual o seu turno? Digite, " ${Matutino}, ${Vespertino} "ou" ${Noturno}".""`)

// switch(turno){
// case "M":
// console.log("Bom Dia!")
// break

// case "V":
// console.log("Boa Tarde!")
// break

// case "N":
//     console.log("Boa Noite!")
//     break
// }

// Exercício 7-

// let genero = prompt("Qual gênero de filme você quer assistir?")
// let fantasia = "Fantasia"
// let preco = Number(prompt("Digite o valor de ingresso desejado"))

// if (genero === fantasia && preco <= 15) {
//     console.log("Bom Filme!")
// } else{
//     console.log("Escolha outro filme :(")
// }

// Exercícios de Desafio

// Exercício 1-

// let genero = prompt("Qual gênero de filme você quer assistir?")
// let fantasia = "Fantasia"
// let preco = Number(prompt("Digite o valor de ingresso desejado"))
// let snack = prompt("Escolha seu snack.")

// if (genero === fantasia && preco <= 15 && snack)   {
//     console.log("Bom Filme!...com", snack)
// } else{
//     console.log("Escolha outro filme :(")
// }

// Exercícios 2-

// let nome = prompt("Digite seu nome completo")
// let tipoDeJogo = prompt("Qual o time de jogo? IN ou DO?")
// let etapa = prompt("Qual a etapa de jogo? SF, DT ou FI?")
// let categoria = Number(prompt("Escolha uma categoria: 1, 2, 3, 4"))
// let quantidade = Number(prompt("Digite a quantidade de ingressos:"))
// let valorDoIngresso
// let valorTotal

// if (etapa === "SF" ){
//     etapa = "Semi-Final"

//     switch(categoria){
//         case 1:
//             valorDoIngresso = 1320
//             break
//         case 2:
//             valorDoIngresso = 880
//             break
//         case 3:
//             valorDoIngresso = 550
//             break
//         case 4:
//             valorDoIngresso = 220
//             break
//         default: console.log("Categoria Inválida")
//             break
//     }
// } else if (etapa ==="DT"){
//     etapa = "Decisão de Terceiro Lugar"

//     switch(categoria){
//         case 1:
//             valorDoIngresso = 660
//             break
//         case 2:
//             valorDoIngresso = 440
//             break
//         case 3:
//             valorDoIngresso = 330
//             break
//         case 4:
//             valorDoIngresso = 170
//             break

//         default: console.log("Categoria Inválida")
//             break
//     }
// } else if (etapa === "FI"){
//     etapa = "Final"

//     switch(categoria){
//         case 1:
//             valorDoIngresso = 1980
//             break
//         case 2:
//             valorDoIngresso = 1320
//             break
//         case 3:
//             valorDoIngresso = 880
//             break
//         case 4:
//             valorDoIngresso = 330
//             break

//         default: console.log("Categoria Inválida")
//     }
// }

// if (tipoDeJogo === "IN"){
//     valorDoIngresso = valorDoIngresso / 4.1
// }

// valorTotal = valorDoIngresso * quantidade

// console.log("-----Dados da Compra----")
// console.log(`Nome = ${nome}`)
// console.log(`Tipo de jogo = ${tipoDeJogo}`)
// console.log(`Etapa de Jogo = ${etapa}`)
// console. log(`Categoria = ${categoria}`)
// console.log(`Quantidade de Ingressos = ${quantidade}`)
// console.log("-----Valores-----")
// console.log(`Valor do Ingresso = ${valorDoIngresso}`)
// console.log(`Valor total = ${valorTotal} `)













