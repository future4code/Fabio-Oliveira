// 1 -
// a) Crie uma variável minhaString do tipo string e atribua um valor a ela. Tente atribuir um número a esta variável. O que acontece?

// A variável pede que o valor seja correspondente ao tipo declarado.

// b) Crie uma variável meuNumero do tipo number e atribua um valor numérico. Como podemos fazer para que essa variável também aceite strings?

// Para aceitar string, basta colocar a barra |. Ex: string | number.


// c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:

// `nome`, que é uma string;

// `idade`, que é um número;

// `corFavorita`, que é uma string.

// Como você faria para garantir que o objeto só tenha as propriedades descritas acima? Faça a tipagem do objeto para que ele só aceite os valores acima.



// d) Respondida na c.

// e) Modifique o tipo de objeto para que possamos apenas escolher entre as cores do arco-íris. Utilize um enum para isso.

enum Color {
    VERMELHO = "vermelho",
    AMARELO = "amarelo",
    AZUL = "azul",
    VERDE = "azul",
    VIOLETA = "violeta",
    CIANO = "ciano",
    LARANJA = "laranja"
    }

type person = {
    name: string,
    age: number,
    favoriteColor: Color
}

const pessoa: person = {
    name: "People",
    age: 2,
    favoriteColor: Color.VERMELHO
}