var nav = document.querySelector('.nav');
var navToggle = document.querySelector('.nav__toggle');

nav.classList.remove('nav--nojs');

navToggle.addEventListener('click', function() {
  if (nav.classList.contains('nav--closed')) {
    nav.classList.remove('nav--closed');
    nav.classList.add('nav--opened');
  } else {
    nav.classList.remove('nav--opened');
    nav.classList.add('nav--closed');
  }
});

var countriesFilter = document.querySelector('.countries-filter');
var countriesFilterToggle = document.querySelector('.countries-filter__toggle');
var closeFilterBtn = document.querySelector('.countries-filter__button');


if (countriesFilter) {
  countriesFilter.classList.remove('countries-filter--nojs');
}

if (countriesFilterToggle)  {
  countriesFilterToggle.addEventListener('click', function() {
    if (countriesFilter.classList.contains('countries-filter--closed')) {
      countriesFilter.classList.remove('countries-filter--closed');
      countriesFilter.classList.add('countries-filter--opened');
    } else {
      countriesFilter.classList.remove('countries-filter--opened');
      countriesFilter.classList.add('countries-filter--closed');
    }
  });

  closeFilterBtn.addEventListener('click', function() {
    countriesFilter.classList.remove('countries-filter--opened');
    countriesFilter.classList.add('countries-filter--closed');
  });
}

var tariffsButton = document.querySelector('.tariffs__button');
var tariffsBusinessButton = document.querySelector('.business-tariffs__button');
var tariffsBusinessModal = document.querySelector('.business-tariffs');

if (tariffsButton) {
  tariffsButton.addEventListener('click',  function(evt) {
    evt.preventDefault();
    if (!tariffsBusinessModal.classList.contains('modal--display')) {
      tariffsBusinessModal.classList.add('modal--display');
    }
  });
}

if (tariffsBusinessButton) {
  tariffsBusinessButton.addEventListener('click',  function() {
    if (tariffsBusinessModal.classList.contains('modal--display')) {
      tariffsBusinessModal.classList.remove('modal--display');
    }
  });
}
