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


console.log("Bem vindo ao jogo de BlackJack!")


if(confirm("Quer iniciar uma rodada?")){
   const cartaUsuario = comprarCarta();   
   console.log(cartaUsuario.texto)
   console.log(cartaUsuario.valor)

   const cartaUsuario2 = comprarCarta();
   console.log(cartaUsuario2.texto)
   console.log(cartaUsuario2.valor)

   let somaUsuario = cartaUsuario.valor + cartaUsuario2.valor;

   const cartaPc = comprarCarta();
   console.log(cartaPc.texto)
   console.log(cartaPc.valor)

   const cartaPc2 = comprarCarta();
   console.log(cartaPc2.texto)
   console.log(cartaPc2.valor)

   let somaPc = cartaPc.valor + cartaPc2.valor


   if((cartaUsuario === "A") && (cartaPc === "A")){
      cartaUsuario = comprarCarta() 
      cartaPc = comprarCarta()
       
   } 

   if(confirm(`Usuário - cartas: ${cartaUsuario.texto +  cartaUsuario2.texto} - pontuação ${somaUsuario}
Computador - cartas: ${cartaPc.texto} - pontuação ${cartaPc.valor} Deseja comprar mais uma carta?`)){
      let arrayExtraCards = []
      while(somaUsuario <= 21){
         let takeOneMore = comprarCarta()
         arrayExtraCards.push(takeOneMore.texto)
         confirm(`Usuário - cartas: ${cartaUsuario.texto +  cartaUsuario2.texto + arrayExtraCards} - pontuação ${somaUsuario}
Computador - cartas: ${cartaPc.texto + arrayExtraCards} - pontuação ${somaPc} Deseja comprar mais uma carta?`)
         somaUsuario += takeOneMore.valor
         console.log(somaUsuario)
      }


      if(somaPc > 21){
      alert(`O usuário ganhou`)

      }else

      if(somaUsuario > somaPc){
         alert(`O computador ganhou`)
     
      }else{
         alert(`Empate`)}



} else
{
   console.log("O jogo acabou.")

}}