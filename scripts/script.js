class Product {
    constructor(title, price, stock, description, imageUrl) {
        this.title = title;
        this.price = price;
        this.stock = stock;
        this.description = description;
        this.imageUrl = imageUrl;
    }

    // The add product method adds a product to the cart
    addProduct() {

    }

    // The remove product method removes a product to the cart
    removeProduct() {

    }

    // The display method shows the product details on the home page
    display() {
        let main = document.querySelector('.main');

        // Create product div
        let productDiv = document.createElement('div')
        productDiv.classList.add('product');
        main.appendChild(productDiv);

        // Create product image div
        let imageDiv = document.createElement('div')
        imageDiv.classList.add('product-image');
        productDiv.appendChild(imageDiv);

        // Create image tag
        let image = document.createElement('img');
        image.src = this.imageUrl;
        imageDiv.appendChild(image);

        // Create product title
        let title = document.createElement('h2');
        title.classList.add('product-title');
        title.textContent = this.title;
        productDiv.appendChild(title);

        // Create product description
        let description = document.createElement('h3');
        productDiv.appendChild(description);

        // Create product description title
        let descriptionTitle = document.createElement('p');
        descriptionTitle.setAttribute('id', 'product-description');
        descriptionTitle.classList.add('subtitle');
        descriptionTitle.textContent = 'Description: ';
        description.appendChild(descriptionTitle);

        // Create product description details
        let descriptionDetail = document.createElement('span');
        descriptionDetail.textContent = this.description;
        description.appendChild(descriptionDetail);

        // Create stock description
        let stock = document.createElement('h3');
        productDiv.appendChild(stock);

        // Create stock description title
        let stockTitle = document.createElement('p');
        stockTitle.setAttribute('id', 'product-stock');
        stockTitle.classList.add('subtitle');
        stockTitle.textContent = 'Stock: ';
        stock.appendChild(stockTitle);

        // Create stock description details
        let stockDetail = document.createElement('span');
        stockDetail.classList.add('stock');
        stockDetail.textContent = this.stock;
        stock.appendChild(stockDetail);

        // Create product price
        let productPrice = document.createElement('h3');
        productPrice.classList.add('product-price');
        productPrice.textContent = this.price;
        productDiv.appendChild(productPrice);

        // Create horizontal line
        let line = document.createElement('hr');
        productDiv.appendChild(line);

        // Create counter div 
        let counterDiv = document.createElement('div');
        counterDiv.classList.add('counter');
        productDiv.appendChild(counterDiv);

        // Create counter down 
        let counterDown = document.createElement('span');
        counterDown.classList.add('down');
        counterDown.textContent = '-';
        counterDiv.appendChild(counterDown);

        // Create counter Input
        let counter = document.createElement('input');
        counter.setAttribute('type', 'text');
        counter.setAttribute('value', '1');
        counter.setAttribute('max', '10');
        counter.classList.add('quantity-field');

        counterDiv.appendChild(counter);

        // Create counter up
        let counterUp = document.createElement('span');
        counterUp.classList.add('up');
        counterUp.textContent = '+';
        counterDiv.appendChild(counterUp);

        // Create Add button
        let addButton = document.createElement('input');
        addButton.setAttribute('type', 'submit');
        addButton.setAttribute('value', 'ADD TO BAG');
        addButton.classList.add('add-btn');
        productDiv.appendChild(addButton);
    }
}

let product1 = new Product("Polo Shirt", 24, 12, "Best dress", "assets/dress1.png");
let product2 = new Product("Sweater", 24, 12, "Best dress", "assets/dress1.png");
let product3 = new Product("Sweater", 24, 12, "Best dress", "assets/dress1.png");

product1.display();
product2.display();
product3.display();