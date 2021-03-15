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