const container = document.getElementById('container')
const thanks= document.getElementById('thanks')
const btnEl = document.getElementById('btn-submit')
const rating = document.querySelectorAll('.btn')
const rates = document.getElementById('rates')

btnEl.addEventListener('click', ()=> {
    container.style.display = 'none'
    thanks.style.display = 'block'
})

rating.forEach(rate => {
    rate.addEventListener('click', ()=>{
        rates.innerHTML = rate.innerHTML
    })
})




