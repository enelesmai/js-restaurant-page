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

const items_menu = [new Food('https://www.philadelphia.com.mx/modx/assets/img/revision2016/images/recetas/recetas_2015/spaguetti_rojo.jpg', 'Food name', '$45', 'mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo laoreet'),
    new Food('https://tolucalabellacd.com/wp-content/uploads/2019/06/tacos-al-pastor-toluca-y-metepec.jpg', 'Food name', '$45', 'mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo laoreet'),
    new Food('https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/c100.0.880.880a/s640x640/91429204_520137552266884_2755576161748837512_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=104&_nc_ohc=PR_vFTej5fIAX9hWW9K&oh=5e5391bfaffd8b1a8bdbf6e9d740b54d&oe=5F2790AD', 'Food name', '$45', 'mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo laoreet'),
    new Food('https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/c100.0.880.880a/s640x640/89918641_642322759898342_4836936316716004901_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=102&_nc_ohc=JaxYq_fmqMYAX_uHznd&oh=1d61a2cbe06b6934587c54b4d3dc85d3&oe=5F261FAB', 'Food name', '$45', 'mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo laoreet'),
    new Food('https://scontent-iad3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/72324367_2417437455173434_5971467787992725372_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=110&_nc_ohc=hqQIbcruldoAX8y6OUf&oh=7d75526d3d80b27d45ce0bf8f65b6e0a&oe=5F2815B2', 'Food name', '$45', 'mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo laoreet'),
    new Food('https://scontent-yyz1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/62082263_126540401892341_7239379249837151992_n.jpg?_nc_ht=scontent-yyz1-1.cdninstagram.com&_nc_cat=105&_nc_ohc=AEEwsCN94zcAX9Yrp3e&oh=b6c4ca5a8c7ae4e72e36553cf0ef4dcd&oe=5F25DE1E', 'Food name', '$45', 'mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo laoreet')
];

items_menu.forEach(item => {
    menuTab.appendChild(createItemMenu(item));
});

export default menuTab;