// Exercícios de Interpretação de Código

// 1 - a) 10 e 50

// b) Nada.

//  2) - a) "Darvas", "Caio"

// b) "Amanda", "Caio"


// 3 - O código diz que se o resto da divisão de x for igual a 0, o array receberá um valor de x vezes x, que será retornado dentro do arrayFinal devido ao return após o for.
// O nome pode ser "CalculaArray"




// Exercícios de Escrita de Código

// 4- a)

// function informacoesPessoais(){
//     console.log("Eu sou Fábio, tenho 23 anos, moro no Rio de Janeiro e sou estudante.");
// }

// informacoesPessoais()

// b)

// let informacoesPessoais = (nome, idade, cidade, estudante) => {

//     nome = (prompt("Qual o seu nome?"))
//    idade = Number(prompt("Qual a sua idade?"))
//    cidade = prompt("Qual a sua cidade?")
//    estudante = prompt("Você é estudante? Digite sim ou não")
    
//     if(estudante === "sim"){
//         estudante = "sou estudante"
    
//     }else{
//         estudante = "não sou estudante"
//     }   

//    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro no ${cidade} e ${estudante}`)  
    

// }

// informacoesPessoais()

// 5- a)

    // let somaNumeros = (a, b) => {       

    //     a = Number(prompt("Digite um número"))
    //     b = Number(prompt("Digite outro número"))

    //     const soma = a + b
    //      console.log(soma)  

    // }

    // somaNumeros()




    // b)

//     let funcaoBoolean = (a, b) => {

//         a = Number(prompt("Digite um número"))
//         b = Number(prompt("Digite outro número"))

//         if(a > b){
//             console.log("O número é maior")
        
//     } else{
//         console.log("O número é menor")
//     }
// }

// funcaoBoolean()


// c)

// let funcaomensagem = (a) => {

//     for (a = 0; a < 10; a++){
//         console.log("Oi, eu sou o Goku")}

//     }


// funcaomensagem()



// 6- a)

// const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
// let tamanhoArray = (array)=>{
// return array.length
// }
// console.log(tamanhoArray(array))



// b)
// let seEPar = (numero) =>{

//     if (numero % 2 === 0){
//         return true
//     }
//     else{
//         return false
//     }

// }

// let resultado = seEPar(10)
// let resultado2 = seEPar(5)
// console.log(resultado)
// console.log(resultado2)


   

// c)

// const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]


// let tamanhoArray = (array) => {
//     let arrayPar = []
//     for (let i = 0; i < array.length ;i++) {
//         if (array[i] %  2 === 0){
//             arrayPar.push(array[i])
//         }

        
//     }

//     return arrayPar.length
// }
// let resultado = tamanhoArray(array)
// console.log(resultado)

// d)

const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
function ePar (numero){
    let resultado
    if(Number(numero) % 2 == 0){
        resultado = true
    } else {
        resultado = false
    }
    return resultado
}
function nPares (arr){
    let cont = 0;
    for (let i=0; i < arr.length; i++){
        if(ePar(arr[i])){
            cont++
        }
    }
    return cont
}

let result = nPares(array)

console.log(result)

