const modal = document.querySelector('.main')
const openBtn = document.querySelector('.open-btn')
const closeBtn = document.querySelector('.cancel')
const oferley = document.querySelector('.overflow')
const yesst = document.querySelector('.yes')
const nost = document.querySelector('.no')
const savebt = document.querySelector('.save')
const notst = document.querySelector('.not')
const oks = document.querySelector('.ok')
const oks2 = document.querySelector('.ok2')
const openPup = () =>{
    modal.classList.remove('hidden')
    oferley.classList.remove('hidden')
}

const closePup = () =>{
    modal.classList.add('hidden')
    oferley.classList.add('hidden')
}
const yesbt = () =>{
    yesst.classList.remove('yes1')
    modal.classList.add('hidden')
}
const nobt = () =>{
    nost.classList.remove('no1')
    modal.classList.add('hidden')

}
const okbtn =()=>{
    yesst.classList.add('yes1')
    oferley.classList.add('yes1')

}
const name1 =()=>{
    nost.classList.add('no1')
    oferley.classList.add('no1')

}

openBtn.addEventListener('click',openPup)
closeBtn.addEventListener('click',closePup)
oferley.addEventListener('click',closePup)
savebt.addEventListener('click',yesbt)
notst.addEventListener('click',nobt)
oks.addEventListener('click',okbtn)
oks2.addEventListener('click',name1)