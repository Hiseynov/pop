const modal = document.querySelector('.modal')
const openBtn = document.querySelector('.btn-open')
const closeBtn = document.querySelector('.btn-close')
const oferley = document.querySelector('.overflow')


const openPup = () =>{
    modal.classList.remove('hidden')
    oferley.classList.remove('hidden')
    setTimeout(()=> {
        modal.classList.toggle('hidden')
        oferley.classList.toggle('hidden')

    } , 3000)
}

const closePup = () =>{
    modal.classList.add('hidden')
    oferley.classList.add('hidden')
}

openBtn.addEventListener('click',openPup)
closeBtn.addEventListener('click',closePup)
oferley.addEventListener('click',closePup)




function display(bgPop,bgBody,bgOpen , bgClose, posR,posB,posL,posT){
    modal.style.background = bgPop
    oferley.style.background =bgBody
    modal.style.left = posL
    modal.style.top = posT
    modal.style.right = posR
    modal.style.bottom = posB
    openBtn.style.background = bgOpen
    closeBtn.style.background = bgClose

}
display('green','red','yellow','black', '30px', '15px' , '', '')

