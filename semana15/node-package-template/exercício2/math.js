const math = process.argv[2]
const first = Number(process.argv[3])
const second = Number(process.argv[4])
const add = first + second
const sub = first - second
const mult = first * second
const div = first / second

switch (math) {
    case "add":
        console.log("Resposta: " + add)    
        break;
    case "sub":
        console.log("Resposta: " + sub)    
        break;
    case "mult":
        console.log("Resposta: " + mult)    
        break;
    case "div":
        console.log("Resposta: " + div)    
        break;
    default:
        break;
}


