const modal = document.querySelector('.popop')
const openBtn = document.querySelector('.open')
const closeBtn = document.querySelector('.close')
const oferley = document.querySelector('.ofervlow')

const openPup = () =>{
    modal.classList.remove('hidden')
    modal.classList.remove('hid')
    oferley.classList.remove('hidden')
    setTimeout(()=> {
        oferley.classList.toggle('hidden')
        modal.classList.toggle('hid')

    } , 3000)
}
setTimeout(openPup,3000)

const closePup2 = ()=>{
    modal.classList.add('hid')
    oferley.classList.add('hidden')
    
}

openBtn.addEventListener('click',openPup)
closeBtn.addEventListener('click',closePup2)
oferley.addEventListener('click',closePup2)

function display(bgPop,bgBody,bgOpen , bgClose){
    modal.style.background = bgPop
    oferley.style.background =bgBody
    openBtn.style.background = bgOpen
    closeBtn.style.background = bgClose

}
display('yellow','linegreen','red','green')