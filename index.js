// Code your solutions in this file
function writeCards( names, event ) {
  let giftCards = []
  for ( let i = 0; i < names.length; i++ ) {
    giftCards.push( `Thank you, ${names[i]}, for the wonderful ${event} gift!` )
  }
  return giftCards
}

function countDown(){
    let numCountdown=11;
    while(numCountdown--){
      console.log(numCountdown)
    }
  } 
  