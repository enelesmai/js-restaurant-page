import _ from 'lodash';
import navBar from './components/navbar';
import portrait from './components/portrait';
import resume from './components/resume';

const main = document.querySelector('#content');

main.appendChild(navBar);
main.appendChild(portrait);
main.appendChild(resume);