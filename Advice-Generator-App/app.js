const button = document.getElementById('btn')

const generate = async() => {
    const res = await fetch('https://api.adviceslip.com/advice')
    const data = await res.json()
    const advices = data.slip
    document.querySelector('p').textContent = `Advice #${advices.id}`
    document.querySelector('h1').textContent = `"${advices.advice}"`
}




button.addEventListener('click', generate)