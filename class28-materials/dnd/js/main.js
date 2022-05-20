//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  let choice = document.querySelector('input').value
  let choiceArray = choice.split(' ');
  choice = choiceArray.join('-')
  const url = `https://www.dnd5eapi.co/api/spells/${choice}`
  document.querySelector('ul').innerHTML = '';

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data);
        document.querySelector('h2').innerText = data.name;
        document.querySelector('h3').innerText = data.classes[0].name;
        data.subclasses.forEach(subclass => {
            const li = document.createElement('li');
            li.textContent = subclass.name;
            document.querySelector('ul').appendChild(li);
        })
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

