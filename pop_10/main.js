const modal = document.querySelector('.main')
const openBtn = document.querySelector('.open-btn')
const closeBtn = document.querySelector('.cancel')
const oferley = document.querySelector('.overflow')
const yesst = document.querySelector('.yes')
const savebt = document.querySelector('.save')
const oks = document.querySelector('.ok')
const oks2 = document.querySelector('.ok2')
const openPup = () =>{
    modal.classList.remove('hidden')
    oferley.classList.remove('hidden')
}

const closePup = () =>{
    modal.classList.add('hidden')
    oferley.classList.add('hidden')
    // nost.classList.add('no1')
    yesst.classList.add('yes1')


}
const yesbt = () =>{
    yesst.classList.remove('yes1')
    modal.classList.add('hidden')
}
const okbtn =()=>{
    yesst.classList.add('yes1')
    oferley.classList.add('hidden')

}


openBtn.addEventListener('click',openPup)
closeBtn.addEventListener('click',closePup)
oferley.addEventListener('click',closePup)
savebt.addEventListener('click',yesbt)
oks.addEventListener('click',okbtn)