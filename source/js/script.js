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

var filterBtnToggles = document.querySelectorAll('.filters__category-toggle');
var filtersOptions = document.querySelectorAll('.filters__options');

if (filterBtnToggles) {
  for  (let i = 0; i < filterBtnToggles.length; i++) {
    filterBtnToggles[i].addEventListener('click', function() {
      if (filterBtnToggles[i].classList.contains('filters__category-toggle--closed')) {
        filterBtnToggles[i].classList.remove('filters__category-toggle--closed');
        filterBtnToggles[i].classList.add('filters__category-toggle--opened');
      } else {
        filterBtnToggles[i].classList.add('filters__category-toggle--closed');
        filterBtnToggles[i].classList.remove('filters__category-toggle--opened');
      };
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
}

var transportToggles = document.querySelectorAll('.transport__toggle');

if (transportToggles) {
  for (let i = 0; i < transportToggles.length; i++) {
    transportToggles[i].addEventListener('click', function() {
      if (transportToggles[i].classList.contains('transport__toggle--active')) {
        transportToggles[i].classList.remove('transport__toggle--active');
      } else {
        transportToggles[i].classList.add('transport__toggle--active');
      }
    });
  }
}

var nav = document.querySelector('.nav');
var navOffset = 0;

window.onscroll = function() {
  if (window.pageYOffset >= navOffset) {
    nav.classList.add('nav--sticky');
  } else {
    nav.classList.remove('nav--sticky');
  }
};

window.addEventListener("resize", function() {
  navOffset = document.documentElement.clientWidth < 1440 ? 5 : 750;
  return navOffset;
});
