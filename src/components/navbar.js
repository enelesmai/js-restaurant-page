function createMenuItem(item) {
    let list = document.createElement('li');
    list.className = "nav-item";
    list.setAttribute('id', item);
    let anchor = document.createElement('a');
    anchor.setAttribute('href', '#');
    anchor.appendChild(document.createTextNode(item));
    list.appendChild(anchor);
    return list;
}

const navBar = document.createElement('div');
navBar.className = 'nav-header';

const navList = document.createElement('ul');
navList.className = 'nav';

const brandName = document.createElement('div');
brandName.className = 'brand-name';
brandName.appendChild(document.createTextNode('My Restaurant'));

['Home', 'Menu', 'Contact'].forEach(element => {
    navList.appendChild(createMenuItem(element));
});

navBar.appendChild(navList);
navBar.appendChild(brandName);

export default navBar;