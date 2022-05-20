document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value.toLowerCase();

  //Conditionals go here
  if (day =='tuesday' || day == 'thursday'){
    document.querySelector('.kind').innerText = 'Class Day';
  } else if
  (day =='saturday' || day == 'sunday'){
    document.querySelector('.kind').innerText = 'Weekend';
  } else {
    document.querySelector('.kind').innerText = 'Boring Day';
  }

}
