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

var dropdown = document.querySelector('.country__select');

if (dropdown) {
  dropdown.addEventListener('click', function() {
    if (dropdown.classList.contains('dropdown--collapsed')) {
      dropdown.classList.remove('dropdown--collapsed');
      dropdown.classList.add('dropdown--expanded');
    } else {
      dropdown.classList.remove('dropdown--expanded');
      dropdown.classList.add('dropdown--collapsed');
    }
  });
};

var nav = document.querySelector('.nav');
var navOffset = 5;

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

var callBtn = document.querySelectorAll('.card__link');

if (callBtn) {
  for (i = 0; i < callBtn.length; i++) {
    callBtn[i].addEventListener('click', function(evt) {
      evt.preventDefault();
      console.log('Модальное окно показано');
    });
  }
}

var catalogBtn = document.querySelector('.catalog__link');

if (catalogBtn) {
  catalogBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    console.log('Загружаем больше попутчиков');
  });
}

var entertaimentDescription = document.querySelectorAll('.entertainment__description');
var planForm = document.querySelector('.new-plan__form');

if (planForm) {
  console.log(planForm);
  planForm.addEventListener('submit', function(evt) {
    for (let i = 0; i < entertaimentDescription.length; i++) {
      if (!entertaimentDescription[i].querySelector('.entertainment__textarea').value) {
        evt.preventDefault();
        entertaimentDescription[i].classList.add('entertainment__description--invalid');
      } else {
        entertaimentDescription[i].classList.remove('entertainment__description--invalid');
      }
    }
  });
}
