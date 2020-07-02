import menu_1 from '../img/menu_1.jpg';
import menu_2 from '../img/menu_2.jpg';
import menu_3 from '../img/menu_3.jpg';
import menu_4 from '../img/menu_4.jpg';
import menu_5 from '../img/menu_5.jpg';
import menu_6 from '../img/menu_6.jpg';

function createItemMenu(item) {
    const article = document.createElement('article');
    article.classList = 'menu-item card bg-light flex-list flex-center m-2 sizing';
    const img = document.createElement('img');
    img.setAttribute('src', item.srcImage);
    const div = document.createElement('div');
    div.classList = 'name-price';
    const name = document.createElement('h4');
    name.appendChild(document.createTextNode(item.name));
    const price = document.createElement('span');
    price.classList = 'price';
    price.appendChild(document.createTextNode(item.price));
    const description = document.createElement('description');
    description.appendChild(document.createTextNode(item.description));
    description.classList = 'text-center text-muted';
    div.appendChild(name);
    div.appendChild(price);
    article.appendChild(img);
    article.appendChild(div);
    article.appendChild(description);
    return article;
}

class Food {
    constructor(srcImage, name, price, description) { // constructor
        this.srcImage = srcImage;
        this.name = name;
        this.price = price;
        this.description = description;
    }
}

const menuTab = document.createElement('div');
menuTab.className = "menu-container sizing justify-content-start";

const items_menu = [new Food(menu_1, 'Food name', '$45', 'mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo laoreet'),
    new Food(menu_2, 'Food name', '$45', 'mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo laoreet'),
    new Food(menu_3, 'Food name', '$45', 'mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo laoreet'),
    new Food(menu_4, 'Food name', '$45', 'mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo laoreet'),
    new Food(menu_5, 'Food name', '$45', 'mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo laoreet'),
    new Food(menu_6, 'Food name', '$45', 'mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo laoreet')
];

items_menu.forEach(item => {
    menuTab.appendChild(createItemMenu(item));
});

export default menuTab;