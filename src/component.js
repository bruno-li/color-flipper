const hex = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F' ];
const btn = document.querySelector('#btn');
const color = document.querySelector('.color');

const generateColor = () => {
	let hexString = '#';
	while (hexString.length < 7) {
		hexString = hexString + hex[Math.floor(Math.random() * hex.length)];
	}
	return hexString;
};
export { generateColor, btn, color };
