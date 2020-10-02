/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

// console.log("Bem vindo ao jogo de BlackJack!")


// if(confirm("Quer iniciar uma rodada?")){
//    const cartaUsuario = comprarCarta();
//    const cartaUsuario2 = comprarCarta();
//    const somaUsuario = cartaUsuario.valor + cartaUsuario2.valor;
//    console.log(`Usuário - cartas: ${cartaUsuario.texto} ${cartaUsuario2.texto} - pontuação ${somaUsuario}`)

//    const cartaPc = comprarCarta();
//    const cartaPc2 = comprarCarta();
//    const somaPc = (cartaPc.valor + cartaPc2.valor);
//    console.log(`Computador - cartas: ${cartaPc.texto} ${cartaPc2.texto} - pontuação ${somaPc}`)

//    if(somaUsuario === somaPc){
//       console.log("Empate.")
//    }

//    if(somaUsuario > somaPc){
//       console.log("O jogador venceu!")
//    }

//    if(somaUsuario < somaPc){
//       console.log("O computador venceu!")
//    }

// }else {
//    console.log("O jogo acabou.")
// }