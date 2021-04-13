
const $ = (selector) => document.querySelector(selector)

const headerBurger = document.querySelector('.header-burger');

const headerList = $('.header-list');

const body = $('body');

let opacity = 0;

let intervalId = 0;


headerBurger.addEventListener('click', (event) => {
	headerList.classList.toggle('active');
	headerBurger.classList.toggle('active');
	body.classList.toggle('lock');
});


window.onload = () => {
	const preloader = $('.container-preloader');
	preloader.style.display = 'none';
	$('.wrapper').style.display = 'block';
	// body.style.backgroundImage = `url(img/newImg/about.jpg)`;
}