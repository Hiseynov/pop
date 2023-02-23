const main = document.querySelector(".main")
const overflow = document.querySelector(".overflow")
const openBtn = document.querySelector(".try")
const closeBtn = document.querySelector(".close")
const closenBtn = document.querySelector('.closen')
const closenBtn2 = document.querySelector('.closen2')


const openPopup = () => {
    main.classList.remove("hidden");
    overflow.classList.remove("hidden");
}


const closePopup = () => {
    main.classList.add("hidden")
    overflow.classList.add("hidden")
}

openBtn.addEventListener("click", myFunction)
closeBtn.addEventListener("click", closePopup)
overflow.addEventListener("click", closePopup)
closenBtn.addEventListener('click',closePopup)
closenBtn2.addEventListener('click',closePopup)


var timeout
function myFunction() {
    timeout = setTimeout(openPopup, 1000);
  }
  
  main.style.background = 'red'
  main.style.position = 'absolute'
  main.style.left = '10px'