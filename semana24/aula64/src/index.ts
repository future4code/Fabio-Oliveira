// exercício 1

function oneEdit (firstString: string, secondString: string): boolean {
    
if(Math.abs(secondString.length - firstString.length) > 1)
return false

if(firstString.length > secondString.length)
return firstString.includes(secondString)

let difference = 0

for(let i = 0; i < firstString.length; i++){
    if(firstString[i] !== secondString[i] )
    difference++
}
return difference === 1
}

console.log(oneEdit('banana', 'banan'))

// exercício 2

const compare = (input: any) => {

const substrings = []
let lastChar = input[0]
let charCount = 0

for (const char of input){
    if(char !== lastChar){
        substrings.push(lastChar + charCount);
        lastChar = char;
        charCount = 0
    }
    charCount++
}
substrings.push(lastChar + charCount)
    let result = '';
    for(const key of substrings){
        result += key
    }

    return result.length > input.length ? input : result
}

console.log(compare('vaaaaaaasssssssscoooooooooooo'))
