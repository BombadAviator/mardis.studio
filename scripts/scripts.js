const buttons = document.querySelectorAll('.button')

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        console.log('test')
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: .5 }
        })
    })
}