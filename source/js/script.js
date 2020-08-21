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

countriesFilter.classList.remove('countries-filter--nojs');

countriesFilterToggle.addEventListener('click', function() {
  if (countriesFilter.classList.contains('countries-filter--closed')) {
    countriesFilter.classList.remove('countries-filter--closed');
    countriesFilter.classList.add('countries-filter--opened');
  } else {
    countriesFilter.classList.remove('countries-filter--opened');
    countriesFilter.classList.add('countries-filter--closed');
  }
});


