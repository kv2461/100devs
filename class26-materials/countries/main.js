document.querySelector('button').addEventListener('click',getCountryInfo);

function parseNum(num){
    let string = `${num}`;
    let array = string.split('');
      for (let i = array.length; i > -1; i--) {
          let counter = array.length - i - 1;
          if (counter % 3 === 0 && counter !== 0) {
              array[i] = `${array[i]},`;
          }
      }
    return array.join('');
}

function valuesOfKeys(obj){
    let objKeys = Object.keys(obj);
    let collection = [];
        objKeys.forEach(key => {
            let value = obj[key];
            collection.push(value);
  })
  return collection;
}

function currenciesValue(obj){
    let firstLevel = valuesOfKeys(obj);
    let collection = [];
    firstLevel.forEach(key=>{
        collection.push(key.name)
    })
    return collection;
}

function getCountryInfo() {
    const name = document.querySelector('input').value;
    fetch(`https://restcountries.com/v3.1/name/${name}`)
        .then(res=>res.json())
        .then(data=> {
            console.log(data[0])
            document.querySelector('.countryName').innerText = data[0].name.common;
            document.querySelector('.countryFlag').src = data[0].flags.png;
            document.querySelector('.countryCoatOfArms').src = data[0].coatOfArms.png;
            document.querySelector('.countryCapital').innerText = `Capital : ${data[0].capital[0]}`;
            document.querySelector('.countryPop').innerText = `Population : ${parseNum(data[0].population)}`;
            document.querySelector('.countryLanguages').innerText = `Languages : ${valuesOfKeys(data[0].languages).join(', ')}`;
            document.querySelector('.countryCurrency').innerText = `Currency : ${currenciesValue(data[0].currencies).join(', ')}`;
        })
        .then(err=>{
            if (err){
            console.log(`Error : ${err}`)
            };
        })
}

