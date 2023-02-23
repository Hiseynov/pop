const modal = document.querySelector(".modal")
const overflow = document.querySelector(".overflow")
const openBtn = document.querySelector(".btn-open")
const closeBtn = document.querySelector(".btn-close")


const openPopup = () => {
    modal.classList.remove("hidden");
    overflow.classList.remove("hidden");
}


const closePopup = () => {
    modal.classList.add("hidden")
    overflow.classList.add("hidden")
}

openBtn.addEventListener("click", myFunction)
closeBtn.addEventListener("click", closePopup)
overflow.addEventListener("click", closePopup)


var timeout
function myFunction() {
    timeout = setTimeout(openPopup, 1000);
  }