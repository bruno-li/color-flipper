import { generateColor, btn, color } from './component';
import './style.scss';

btn.addEventListener('click', () => {
	let hexColor = generateColor();
	document.body.style.backgroundColor = hexColor;
	color.textContent = hexColor;
});
