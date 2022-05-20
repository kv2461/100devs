//Example fetch using pokemonapi.co
document.querySelector('#deal').addEventListener('click', drawTwo)
document.querySelector('#shuffle').addEventListener('click',shuffleCards);

if (!localStorage.deckId) {
        fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
          .then(res => res.json()) // parse response as JSON
          .then(data => {
            console.log(data)
            let deckId = data.deck_id;
            localStorage.setItem('deckId',deckId);
          })
          .catch(err => {
              console.log(`error ${err}`)
          });
}
  
const deckId = localStorage.getItem('deckId');

function drawTwo(){
  const url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data);
        document.querySelector('#player1').src = data.cards[0].image
        document.querySelector('#player2').src = data.cards[1].image
        let player1Val = convertToNum(data.cards[0].value);
        let player2Val = convertToNum(data.cards[1].value);
        if (player1Val > player2Val) {
          document.querySelector('h3').innerText = "Player 1 Wins"
        } else if (player1Val<player2Val){ 
          document.querySelector('h3').innerText = "Player 2 Wins"
        } else {
          document.querySelector('h3').innerText = "Time for War!"
        }
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

function convertToNum(val) {
  switch(val) {
    case 'ACE':
      return 14;
    case 'KING':
      return 13;
    case 'QUEEN':
      return 12;
    case 'JACK':
      return 11;
    default:
      return val;
  }
}

function shuffleCards(){

  fetch(`https://deckofcardsapi.com/api/deck/${deckId}/shuffle/`)
      .then(res => res.json()) // parse response as JSON
      .catch(err => {
          console.log(`error ${err}`)
      });

      document.querySelector('#player1').src = ""
      document.querySelector('#player2').src = ""
}

//IF WE LAND ON WAR