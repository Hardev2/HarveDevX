let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
const imageWidth = 300; // Each image is 300px wide

next.onclick = function () {
  active = active + 1 <= lengthItems ? active + 1 : 0; // Loop back to first image after the last one
  reloadSlider();
};

prev.onclick = function () {
  active = active - 1 >= 0 ? active - 1 : lengthItems; // Loop back to last image when going backward from the first
  reloadSlider();
};

let refreshInterval = setInterval(() => {
  next.click();
}, 3000);

function reloadSlider() {
  // Move the slider by 300px per active image
  slider.style.transform = `translateX(-${active * imageWidth}px)`;

  // Update active dot
  let lastActiveDot = document.querySelector('.slider .dots li.active');
  if (lastActiveDot) lastActiveDot.classList.remove('active');
  dots[active].classList.add('active');

  // Reset the interval for automatic sliding
  clearInterval(refreshInterval);
  refreshInterval = setInterval(() => {
    next.click();
  }, 3000);
}

dots.forEach((li, key) => {
  li.addEventListener('click', () => {
    active = key;
    reloadSlider();
  });
});

window.onresize = function (event) {
  reloadSlider(); // Recalculate positions on window resize
};
