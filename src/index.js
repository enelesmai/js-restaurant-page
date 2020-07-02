import _ from 'lodash';
import navBar from './components/navbar';
import homeTab from './components/home-tab';
import menuTab from './components/menu-tab';
import contactTab from './components/contact-tab';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

function showTab(id) {
    switch (id) {
        case 'Home':
            main.innerHTML = homeTab.outerHTML;
            break;
        case 'Menu':
            main.innerHTML = menuTab.outerHTML;
            break;
        case 'Contact':
            main.innerHTML = contactTab.outerHTML;
            break;
        default:
            main.innerHTML = homeTab.outerHTML;
    }
}

const main = document.querySelector('#content');
document.body.insertBefore(navBar, main);
main.innerHTML = homeTab.outerHTML;

const elements = document.getElementsByClassName('nav-item');

const show = function show() {
    showTab(this.id);
};

for (let i = 0; i < elements.length; i += 1) {
    elements[i].addEventListener('click', show, false);
}