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

jlottie.loadAnimation({
        container: document.getElementById('lottie'), // the dom element that will contain the animation
        loop: false,
        autoplay: true,
        path: 'mardisstudio.json', // the path to the animation json
      });
