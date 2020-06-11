import './style.css';
import bg from './assets/grayscale.jpeg';

export default function component() {
    var ele = document.createElement('div');
    ele.innerHTML = 'Hello World';
    ele.classList.add('hello');

    var img = new Image();
    img.src = bg;

    ele.appendChild(img);
    return ele;
}