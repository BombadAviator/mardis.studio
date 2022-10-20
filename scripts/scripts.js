
/*

Lottie by: Jeffrey Christopher

https://lottiefiles.com/zeffchris

*/

const scrollbar = Scrollbar.init(document.querySelector(".lottiecontainer"), {
  renderByPixels: false
});

let lottieProgress = lottie.loadAnimation({
  container: document.querySelector(".lottie-progress"),
  renderer: "svg",
  loop: false,
  autoplay: false,
  path: "https://mardis.studio/scripts/mardisstudio10.json"
});

scrollbar.addListener(() => {
  let totalHeight = scrollbar.limit.y;
  let scrollFromTop = scrollbar.scrollTop;
  let totalFrames = lottieProgress.totalFrames;
  let scrollPercentage = (scrollFromTop * 100) / totalHeight;
  let scrollPercentRounded = Math.round(scrollPercentage); // Just in case

  // Check if the current frame is the last frame. If it's the last frame, do nothing. This prevents showing the empty frame at the end. Thanks Pauline for pointing out.
  if ((scrollPercentage * totalFrames) / 100 < totalFrames) {
    lottieProgress.goToAndStop((scrollPercentage * totalFrames) / 100, true);
  } else {
    return;
  }
});





var animation = lottie.loadAnimation({
  container: document.getElementById('lottie'), // the dom element that will contain the animation
  renderer: 'svg',
  loop: false,
  autoplay: true,
  path: 'https://mardis.studio/scripts/mardisstudio.json' // the path to the animation json
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

const fadeIn = basicScroll.create({
  elem: document.querySelector('.fadeIn'),
  from: 'top-bottom',
  to: 'top-middle',
  props: {
    '--o': {
      from: .01,
      to: .99
    }
  }
});




fadeIn.start();

easeBoxes.forEach(easeBox => easeBox.start());
