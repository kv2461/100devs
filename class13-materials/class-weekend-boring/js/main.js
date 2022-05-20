//Handle Capital Letters, Place result in DOM, add a check for humpday (Wed)

document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value.toLowerCase();

  if(day === "tuesday" || day === "thursday"){
    document.querySelector('#placeToSee').innerText = 'You Have Class'
  }else if( day === "saturday" || day === "sunday"){
    document.querySelector('#placeToSee').innerText = 'Its the weekend!'
  }else if( day === 'wednesday'){
    document.querySelector('#placeToSee').innerText = 'HUMP DAY!!!'
  }else{
    document.querySelector('#placeToSee').innerText = 'boring!'
  }

}
