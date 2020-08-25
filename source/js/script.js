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


var filter = document.querySelector('.filters__form');
var filterBtnHobbies = document.querySelector('.filters__hobbies-btn');
var hobbiesOptions = document.querySelector('.filters__hobbies');

if (filterBtnHobbies) {
  filterBtnHobbies.addEventListener('click',  function() {
    if (hobbiesOptions.classList.contains('filters__list--collapsed')) {
      hobbiesOptions.classList.remove('filters__list--collapsed');
      hobbiesOptions.classList.add('filters__list--expanded');
    }
  });
}


var filterBtnToggles = document.querySelectorAll('.filters__category-toggle');
var filtersOptions = document.querySelectorAll('.filters__options');

for  (let i = 0; i < filterBtnToggles.length; i++) {
  filterBtnToggles[i].addEventListener('click', function() {
    for (let j = 0; j < filtersOptions.length; j++) {
      if (i == j) {
        if (filtersOptions[j].classList.contains('filters__options--collapsed')) {
          filtersOptions[j].classList.remove('filters__options--collapsed');
          filtersOptions[j].classList.add('filters__options--expanded');
        } else {
          filtersOptions[j].classList.remove('filters__options--expanded');
          filtersOptions[j].classList.add('filters__options--collapsed');
        }
      }
    }
  });
}

var transportToggles = document.querySelectorAll('.transport__toggle');

for (let i = 0; i , transportToggles.length; i++) {
  transportToggles[i].addEventListener('click', function() {
    if (transportToggles[i].classList.contains('transport__toggle--active')) {
      transportToggles[i].classList.remove('transport__toggle--active');
    } else {
      transportToggles[i].classList.add('transport__toggle--active');
    }
  });
}
