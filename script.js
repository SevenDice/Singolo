const menu = document.getElementById('menu');

const arrowLeft = document.querySelector('.arrow__left');
const arrowRight = document.querySelector('.arrow__right');
const slider = document.getElementsByClassName('slider');

const btnSubmit = document.getElementById('submit-btn')
const btnClose = document.getElementById('close-btn')

const activePortfolio = document.getElementById('portfolio-gallery');

const mobileMenu = document.getElementById("head_accord");
const headerMenu = document.getElementById("head_menu_cont");
const headerLogo = document.getElementById("head_logo");

const SLIDER_BACK = document.getElementById("home-nav");
const SLIDES = document.getElementsByClassName("slide");

// Mobile menu
mobileMenu.addEventListener('click',() => {
  if (headerMenu.classList.contains('header__menu__open')){
    headerMenu.classList.remove('header__menu__open');
    mobileMenu.classList.add('menu_open_accordion');
    headerLogo.classList.add('menu_open_logo');
  }
  else{
    headerMenu.classList.add('header__menu__open');
    mobileMenu.classList.remove('menu_open_accordion');
    headerLogo.classList.remove('menu_open_logo');
  }
});

headerMenu.addEventListener('click',() => {
  if (headerMenu.classList.contains('header__menu__open')===false){
    headerMenu.classList.add('header__menu__open');
  }});


// Navbar active navigation
menu.addEventListener('click', (event) => {
  menu.querySelectorAll('a').forEach(el => el.classList.remove('navigation__link__colored'));
  event.target.classList.add('navigation__link__colored');
});

// Scroll active navigation
document.addEventListener('scroll', onScroll);

function onScroll() {
  const curPos = window.scrollY;
  const divs = document.querySelectorAll('body>section');
  const links = document.querySelectorAll('#menu a');

  divs.forEach((el) => {
    if (el.offsetTop <= curPos && (el.offsetTop + el.offsetHeight) > curPos) { 
      links.forEach((a) => {
        a.classList.remove('navigation__link__colored');
        if (el.getAttribute('id') === a.getAttribute('href').substring(1)) {
          a.classList.add('navigation__link__colored');
        }
      })
    }
  });
}

// SLIDER
var slideIndex = 1; //устанавливает текущий слайд 1

function plusSlide() {
	showSlides(slideIndex += 1,'right');
}

function minusSlide() {
  showSlides(slideIndex -= 1,'left');  
}

//Показ слайдов
function showSlides(n, direction) {
  var i;
  if (n > SLIDES.length) {
		slideIndex = 1;
  }
  if (n < 1) {
      slideIndex = SLIDES.length;
  }
	document.getElementById('slide1').classList.remove('slide_right');
	document.getElementById('slide1').classList.remove('slide_left');
	document.getElementById('slide2').classList.remove('slide_right');
	document.getElementById('slide2').classList.remove('slide_left');

	if (direction=='right'){
	  document.getElementById('slide1').classList.add('slide_right');
		document.getElementById('slide2').classList.add('slide_right');

	}
	else if (direction=='left'){
		document.getElementById('slide1').classList.add('slide_left');
		document.getElementById('slide2').classList.add('slide_left');
	}			
	for (i = 0; i < SLIDES.length; i++) {	
		SLIDES[i].style.display = "none";	
	}
		SLIDES[slideIndex - 1].style.display = "flex";
	
	if (slideIndex%2==0){SLIDER_BACK.classList.add('slide_blue');}
	else {SLIDER_BACK.classList.remove('slide_blue');}
}

//Нажатие кнопок телефона в слайдере
  document.getElementById('iphone_button1').addEventListener('click', () => {
	  if (document.getElementById('pdisplay1').classList.contains('invisible')==false){
			document.getElementById('pdisplay1').classList.add('invisible');
		}
		else{
			document.getElementById('pdisplay1').classList.remove('invisible');
		}
	});	
  document.getElementById('iphone_button2').addEventListener('click', () => {
	  if (document.getElementById('pdisplay2').classList.contains('invisible')==false){
			document.getElementById('pdisplay2').classList.add('invisible');
		}
		else{
			document.getElementById('pdisplay2').classList.remove('invisible');
		}
  });
  document.getElementById('iphone_button3').addEventListener('click', () => {
	  if (document.getElementById('pdisplay3').classList.contains('invisible')==false){
			document.getElementById('pdisplay3').classList.add('invisible');
		}
		else{
			document.getElementById('pdisplay3').classList.remove('invisible');
		}
	});  
  document.getElementById('iphone_button4').addEventListener('click', () => {
	  if (document.getElementById('pdisplay4').classList.contains('invisible')==false){
			document.getElementById('pdisplay4').classList.add('invisible');
		}
		else{
			document.getElementById('pdisplay4').classList.remove('invisible');
		}
  });
  document.getElementById('iphone_button5').addEventListener('click', () => {
	  if (document.getElementById('pdisplay5').classList.contains('invisible')==false){
			document.getElementById('pdisplay5').classList.add('invisible');
		}
		else{
			document.getElementById('pdisplay5').classList.remove('invisible');
		}
	});  




// PORTFOLIO FILTER
activePortfolio.addEventListener('click', (event) => {
	if ((event.target.classList.contains('filter-div')) && ( !event.target.classList.contains('portfolio-active'))) {
		activePortfolio.querySelectorAll('img').forEach(el => el.classList.remove('portfolio-active'));
		event.target.classList.add('portfolio-active');
	}
	else {
		activePortfolio.querySelectorAll('img').forEach(el => el.classList.remove('portfolio-active'));
		event.target.classList.remove('portfolio-active');
	}
});

// Filter
filterSelection("all")
function filterSelection(c) {
  let x, i;
  x = document.getElementsByClassName("filter-div");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "filter-show fade");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "filter-show fade");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");

}

// Add active class to the current control button (highlight it)
const btnContainer = document.getElementById("portfolio-filter");
const btns = btnContainer.getElementsByClassName("filter-btn");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("filter__active");
    current[0].className = current[0].className.replace(" filter__active", "");
    this.className += " filter__active";
  });
}

// Submit form
btnSubmit.addEventListener('click', (e) => {
  if (document.getElementById('contact-name').checkValidity() && document.getElementById('contact-email').checkValidity()) {
    e.preventDefault();
    const subject = document.getElementById('contact-subject').value.toString();
    const description = document.getElementById('contact-description').value.toString();
    document.getElementById('status-form').innerText = 'The letter was sent';

    if (subject !== '') {
      document.getElementById('subject-form').innerText = 'Subject: ' + subject;
    }
    else { document.getElementById('subject-form').innerText = 'Without subject'; }

    if (description !== '') {
      document.getElementById('description-form').innerText = 'Description: ' + description;
    }
    else { document.getElementById('description-form').innerText = 'Without description'; }

    document.getElementsByTagName('body')[0].classList.add('hide');
    document.getElementById('modal-hidden').classList.remove('hidden');
    document.getElementById('modal').classList.remove('hidden');
  }
});

btnClose.addEventListener('click', () => {
  document.getElementById('status-form').innerText = '';
  document.getElementById('subject-form').innerText = '';
  document.getElementById('description-form').innerText = '';
  document.getElementsByTagName('body')[0].classList.remove('hide');
  document.getElementById('modal-hidden').classList.add('hidden');
  document.getElementById('modal').classList.add('hidden');
  document.getElementById('submit-form').reset();
});
