//Get a dog photo from the dog.ceo api and place the photo in the DOM
const img = document.querySelector('img');


function imgChange() {
    fetch('https://dog.ceo/api/breeds/image/random') 
    .then(res => res.json())
    .then(data => {
        img.src=data.message;
    })
    .catch(err=> {
        console.log(`error ${err}`)
    })
}


img.addEventListener('click',imgChange);

imgChange();