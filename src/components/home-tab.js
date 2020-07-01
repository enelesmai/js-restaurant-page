import navBar from './navbar';
import portrait from './portrait';
import resume from './resume';

const homeTab = document.createElement('div');

homeTab.appendChild(navBar);
homeTab.appendChild(portrait);
homeTab.appendChild(resume);

export default homeTab;