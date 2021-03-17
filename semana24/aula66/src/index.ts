// Exercício 1

// a)
// const printNumbers = (number: number) => {
//     if(number >= 0){
//         printNumbers(number - 1)
//         console.log(number)
//     }
// }

// printNumbers(15)

// b)
// const printNumbersDesc = (number: number) => {
//     if(number >= 0){
//         console.log(number)
//         printNumbersDesc(number - 1)        
//     }
// }

// printNumbersDesc(15)

// Exercício 2 -

// const sumNumbers = (number: number, acc: number = 0): number =>{
// if (number === 0 ){
//     return acc
// }
// return sumNumbers(number -1, acc + number)
// }

// console.log(sumNumbers(5))

// Exercício 3 -

// const sumNumbersIt = (number: number): number => {
//     let sum = 0
//     for (let i = 0; i <= number; i++){
//         sum += i
//     }

//     return sum
// }

// console.log(sumNumbersIt(5))

// Exercício 4

const printArray = (array: number[], i: number =array.length -1) =>{
    if(i >= 0){
        printArray(array, i - 1)
        console.log(`Elemento ${i}: `, array[i]);
    }
}

const array = [1,2,3,4]
printArray(array)