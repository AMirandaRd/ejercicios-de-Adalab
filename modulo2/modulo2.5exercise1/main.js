const button = document.querySelector('.olebutton');
function showOhMamma() {
    button.innerHTML='Mi primer click, ¡ole yo y la madre que me parió!';
    console.log('Ole la madre que me parió');
  }
button.addEventListener('click', showOhMamma);