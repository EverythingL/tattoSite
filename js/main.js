let btn = document.querySelector('button');

let menu = document.querySelector('.header-menu');

let logo = document.querySelector('.header-logo')

let body = document.querySelector('body');

let span = document.querySelectorAll('span');

btn.onclick = () => {
	menu.classList.toggle('active');
	logo.classList.toggle('active');
	body.classList.toggle('lock');

	for (let i = 0; i < span.length; i++) {
		span[i].classList.toggle('active');
	}

}