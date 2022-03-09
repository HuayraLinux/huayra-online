'use strict';

const code = 'huayra austral';
const sequence = code.toUpperCase().split('');

let current = 0;
let lock = true;
let ignoreKey = false;
let watched = false;

const easterEggSlide = document.getElementById('pascuas');
const slidesList =  document.getElementById('slides-list');
const main = document.getElementById('main');
const footer = document.getElementById('footer');

const lockEasterEgg = function() {
  footer.style.display = 'flex';
  main.style.height = '90vh';
  Reveal.configure(generateConfig());

  easterEggSlide.style.top = 0;
  easterEggSlide.classList.remove('animate');
  slidesList.removeChild(easterEggSlide);
  Reveal.slide(0);

  lock = true;
  watched = true;
};

const unlockEasterEgg = function() {
  const timeout = 20;
  ignoreKey = true;

  footer.style.display = 'none';
  main.style.height = '100vh';

  Reveal.configure({
    progress: false,
    autoSlide: false,
    autoSlideStoppable: false,
    keyboard: false
  });

  setTimeout(function() {
    easterEggSlide.style.position = 'absolute';
    easterEggSlide.style.top = '105%';
    
    setTimeout(function() {
      easterEggSlide.style.transition = `${timeout}s linear`;
      easterEggSlide.classList.add('animate');

      setTimeout(function() {
        ignoreKey = false;
        lockEasterEgg();
      }, (timeout - 1) * 1000);

    }, 1000);
  }, 50);


  slidesList.appendChild(easterEggSlide);

  Reveal.slide(-1, -1);
  lock = false;
};

let nextChar = sequence[0];
const handleEasterEgg = function(e) {
  if (ignoreKey || watched) return;

  const keyCode = e.keyCode;
  const value = String.fromCharCode(keyCode);

  if (!lock) {
    lockEasterEgg();
    return;
  }

  if (sequence.indexOf(value) < 0 || value !== sequence[current]) {
		current = 0;
		return;
	}

	current++;

	if (sequence.length === current) {
    unlockEasterEgg();
		current = 0;
	}
};

const setEasterEgg = function() {
  document.addEventListener('keydown', handleEasterEgg);
}

document.addEventListener('ready', setEasterEgg);
