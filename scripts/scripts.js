// Confetti Controlers

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

// mardis.studio Lottie Controlers

var animation = lottie.loadAnimation({
  container: document.getElementById('lottie'), // the dom element that will contain the animation
  renderer: 'svg',
  loop: false,
  autoplay: true,
  path: 'https://mardis.studio/scripts/title.json' // the path to the animation json
});


// basicScroll Controlers

const easeBoxes = [];

// Create an animation for each ease box. Each with a different timing.
document.querySelectorAll('.easeBox').forEach((elem, i) => {

  // Get the timing from the data attribute.
  // You can also hard-code the timing, but for the demo it's easier this way.
  const timing = elem.getAttribute('data-timing');

  // Crate an instance for the current element and store the instance in an array.
  // We start the animation later using the instances from the array.
  easeBoxes.push(basicScroll.create({
    elem: elem,
    from: 'top-bottom',
    to: 'top-top',
    direct: true,
    props: {
      '--ty': {
        from: '100px',
        to: '0px',
        timing: timing } } }));
});

const fadeBox = basicScroll.create({
  elem: document.querySelector('.fadeBox'),
  from: 'top-bottom',
  to: 'top-middle',
  props: {
    '--o': {
      from: .01,
      to: .99
    }
  }
});


const cardPhoto = basicScroll.create({
  elem: document.querySelector('.cardPhoto'),
  from: 'top-bottom',
  to: 'bottom-top',
  props: {
    '--cp': {
      from: '0px',
      to: '-11900px'
    }
  }
});

cardPhoto.start();
fadeBox.start();
easeBoxes.forEach(easeBox => easeBox.start());
