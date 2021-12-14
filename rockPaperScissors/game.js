let aiDisplay = document.querySelector('.aiDisplay');
let youDisplay = document.querySelector('.youDisplay');
let buttons = document.querySelectorAll('.player button');

for(let button of buttons){
  button.addEventListener('click', (e) => {
    const et = e.target;
    if(et.innerHTML == 'Rock'){
      youDisplay.innerHTML = '<i class="fas fa-hand-rock"></i>'
      aiDisplay.innerHTML = '<i class="fas fa-hand-paper"></i>';
    }
    else if(et.innerHTML == 'Paper'){
      youDisplay.innerHTML = '<i class="fas fa-hand-paper"></i>'
      aiDisplay.innerHTML = '<i class="fas fa-hand-scissors"></i>';
    }
    else{
      youDisplay.innerHTML = '<i class="fas fa-hand-scissors"></i>'
      aiDisplay.innerHTML = '<i class="fas fa-hand-rock"></i>';
    }
  });
}
