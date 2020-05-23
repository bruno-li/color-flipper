import component from './component';
import './style.scss';

const colors = [ 'green', 'red', 'rgba(133,122,200)', '#f15025' ];
const btn = document.querySelector('#btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
	const randomNumber = generateColor();
	document.body.style.backgroundColor = colors[randomNumber];
	color.textContent = color[randomNumber];
});

const generateColor = () => {
	return Math.floor(Math.random() * colors.length);
};
