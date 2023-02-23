const openP = document.querySelector('.open')
const overlayP = document.querySelector('.overlay')
const mainP = document.querySelector('.main')
const closeP = document.querySelector('.close')

const openPoput = () => {
overlayP.classList.remove('hidden')
mainP.classList.remove('hidden')
}

const closePoput = () =>{
    overlayP.classList.add('hidden')
mainP.classList.add('hidden')
}

openP.addEventListener("click", myFunction)
closeP.addEventListener('click',closePoput)
overlayP.addEventListener('click',closePoput)

var timeout
function myFunction() {
    timeout = setTimeout(openPoput, 1000);
  }