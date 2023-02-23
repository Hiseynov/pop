const modal = document.querySelector('.modal')
const openBtn = document.querySelector('.btn-open')
const closeBtn = document.querySelector('.btn-close')
const oferley = document.querySelector('.overflow')

const openPup = () =>{
    modal.classList.remove('hidden')
    oferley.classList.remove('hidden')
}

const closePup = () =>{
    modal.classList.add('hidden')
    oferley.classList.add('hidden')
}

openBtn.addEventListener('click',openPup)
closeBtn.addEventListener('click',closePup)
oferley.addEventListener('click',closePup)

modal.style.background = 'green'
modal.style.position = 'absolute'
modal.style.left = '20px'
modal.style.top = '10px'
oferley.style.background = 'yellow'

