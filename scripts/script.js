class Product {
    constructor(title, price, stock, description, imageUrl) {
        this.title = title;
        this.price = price;
        this.stock = stock;
        this.description = description;
        this.imageUrl = imageUrl;
    }

    // The display method shows the product details on the home page
    display() {
        let main = document.querySelector('.main');

        // Create product div
        let productDiv = document.createElement('div')
        productDiv.classList.add('product');
        main.appendChild(productDiv);

        // Create product delete div
        let deleteDiv = document.createElement('div')
        deleteDiv.classList.add('delete-image');
        productDiv.appendChild(deleteDiv);

        // Create image tag
        let deletes = document.createElement('img');
        deletes.src = "assets/trash-bin.svg";
        deleteDiv.appendChild(deletes);

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
        stock.classList.add('stock-body');
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

        // // Create Add button
        let addButton = document.createElement('input');
        addButton.setAttribute('type', 'submit');
        addButton.setAttribute('value', 'ADD TO BAG');
        // addButton.setAttribute('onclick', 'addProduct()');
        // addButton.addEventListener('click', this.addProduct);
        addButton.classList.add('add-btn');
        productDiv.appendChild(addButton);
    }
}


class Sweater extends Product {

    // The add product method adds a product to the cart
    // The add product method adds a product to the cart
    addProduct() {
        let titles = document.querySelectorAll('.product-title');

        for (let title of titles) {
            let cart = document.querySelector('#shop-cart');
            let parent = title.parentNode;

            if (title.innerText === "Sweater") {
                let quantity = parent.querySelector('.quantity-field');
                let stock = parent.querySelector('.stock');
                if (Number(stock.textContent) > 0) {
                    if (Number(quantity.value) <= Number(stock.textContent)) {
                        stock.textContent = Number(stock.textContent) - Number(quantity.value);
                        cart.textContent = Number(cart.textContent) + Number(quantity.value);
                    } else {
                        alert(`Please the quantity selected is more than what is available.`)
                    }
                } else {
                    alert(`Please the stock for Sweater is empty`)
                }
            };
        }
    }

    // The remove product method removes a product to the cart
    removeProduct() {
        let titles = document.querySelectorAll('.product-title');

        for (let title of titles) {
            let parent = title.parentNode;

            if (title.innerText === "Sweater") {
                if (confirm("Are you sure you want to delete this item?")) {
                    parent.style.display = "none";
                }
            }

        }
    }

    increase() {
        let titles = document.querySelectorAll('.product-title');
        for (let title of titles) {
            let parent = title.parentNode;

            if (title.innerText === "Sweater") {
                let quantity = parent.querySelector('.quantity-field');
                let stock = parent.querySelector('.stock');

                if (quantity.value < Number(stock.textContent)) {
                    quantity.value = Number(quantity.value) + 1;
                }
            }

        }

    }


    decrease() {
        let titles = document.querySelectorAll('.product-title');
        for (let title of titles) {
            let parent = title.parentNode;

            if (title.innerText === "Sweater") {
                let quantity = parent.querySelector('.quantity-field');
                if (quantity.value > 0) {
                    quantity.value = Number(quantity.value) - 1;
                }
            }

        }

    }

    display() {
        super.display();

        let titles = document.querySelectorAll('.product-title');

        for (let title of titles) {
            let parent = title.parentNode;
            if (title.innerText === "Sweater") {
                let addButton = parent.querySelector('.add-btn');
                let deletes = parent.querySelector('.delete-image');
                let up = parent.querySelector('.up');
                let down = parent.querySelector('.down');
                up.addEventListener('click', this.increase);
                down.addEventListener('click', this.decrease);
                deletes.addEventListener('click', this.removeProduct);
                addButton.addEventListener('click', this.addProduct);
            }
        }

    }

}


class Trouser extends Product {

    // The add product method adds a product to the cart
    // The add product method adds a product to the cart
    addProduct() {
        let titles = document.querySelectorAll('.product-title');

        for (let title of titles) {
            let cart = document.querySelector('#shop-cart');
            let parent = title.parentNode;

            if (title.innerText === "Trouser") {
                let quantity = parent.querySelector('.quantity-field');
                let stock = parent.querySelector('.stock');
                if (Number(stock.textContent) > 0) {
                    if (Number(quantity.value) <= Number(stock.textContent)) {
                        stock.textContent = Number(stock.textContent) - Number(quantity.value);
                        cart.textContent = Number(cart.textContent) + Number(quantity.value);
                    } else {
                        alert(`Please the quantity selected is more than what is available.`)
                    }
                } else {
                    alert(`Please the stock for Trouser is empty`)
                }
            };
        }
    }

    // The remove product method removes a product to the cart
    removeProduct() {
        let titles = document.querySelectorAll('.product-title');

        for (let title of titles) {
            let parent = title.parentNode;

            if (title.innerText === "Trouser") {
                if (confirm("Are you sure you want to delete this item?")) {
                    parent.style.display = "none";
                }
            }

        }
    }

    increase() {
        let titles = document.querySelectorAll('.product-title');
        for (let title of titles) {
            let parent = title.parentNode;

            if (title.innerText === "Trouser") {
                let quantity = parent.querySelector('.quantity-field');
                let stock = parent.querySelector('.stock');

                if (quantity.value < Number(stock.textContent)) {
                    quantity.value = Number(quantity.value) + 1;
                }
            }

        }

    }


    decrease() {
        let titles = document.querySelectorAll('.product-title');
        for (let title of titles) {
            let parent = title.parentNode;

            if (title.innerText === "Trouser") {
                let quantity = parent.querySelector('.quantity-field');
                if (quantity.value > 0) {
                    quantity.value = Number(quantity.value) - 1;
                }
            }

        }

    }

    display() {
        super.display();

        let titles = document.querySelectorAll('.product-title');

        for (let title of titles) {
            let parent = title.parentNode;
            if (title.innerText === "Trouser") {
                let addButton = parent.querySelector('.add-btn');
                let deletes = parent.querySelector('.delete-image');
                let up = parent.querySelector('.up');
                let down = parent.querySelector('.down');
                up.addEventListener('click', this.increase);
                down.addEventListener('click', this.decrease);
                deletes.addEventListener('click', this.removeProduct);
                addButton.addEventListener('click', this.addProduct);
            }
        }

    }

}

class Shorts extends Product {

    // The add product method adds a product to the cart
    // The add product method adds a product to the cart
    addProduct() {
        let titles = document.querySelectorAll('.product-title');

        for (let title of titles) {
            let cart = document.querySelector('#shop-cart');
            let parent = title.parentNode;

            if (title.innerText === "Shorts") {
                let quantity = parent.querySelector('.quantity-field');
                let stock = parent.querySelector('.stock');
                if (Number(stock.textContent) > 0) {
                    if (Number(quantity.value) <= Number(stock.textContent)) {
                        stock.textContent = Number(stock.textContent) - Number(quantity.value);
                        cart.textContent = Number(cart.textContent) + Number(quantity.value);
                    } else {
                        alert(`Please the quantity selected is more than what is available.`)
                    }
                } else {
                    alert(`Please the stock for Shorts is empty`)
                }
            };
        }
    }

    // The remove product method removes a product to the cart
    removeProduct() {
        let titles = document.querySelectorAll('.product-title');

        for (let title of titles) {
            let parent = title.parentNode;

            if (title.innerText === "Shorts") {
                if (confirm("Are you sure you want to delete this item?")) {
                    parent.style.display = "none";
                }
            }

        }
    }

    increase() {
        let titles = document.querySelectorAll('.product-title');
        for (let title of titles) {
            let parent = title.parentNode;

            if (title.innerText === "Shorts") {
                let quantity = parent.querySelector('.quantity-field');
                let stock = parent.querySelector('.stock');

                if (quantity.value < Number(stock.textContent)) {
                    quantity.value = Number(quantity.value) + 1;
                }
            }

        }

    }


    decrease() {
        let titles = document.querySelectorAll('.product-title');
        for (let title of titles) {
            let parent = title.parentNode;

            if (title.innerText === "Shorts") {
                let quantity = parent.querySelector('.quantity-field');
                if (quantity.value > 0) {
                    quantity.value = Number(quantity.value) - 1;
                }
            }

        }

    }

    display() {
        super.display();

        let titles = document.querySelectorAll('.product-title');

        for (let title of titles) {
            let parent = title.parentNode;
            if (title.innerText === "Shorts") {
                let addButton = parent.querySelector('.add-btn');
                let deletes = parent.querySelector('.delete-image');
                let up = parent.querySelector('.up');
                let down = parent.querySelector('.down');
                up.addEventListener('click', this.increase);
                down.addEventListener('click', this.decrease);
                deletes.addEventListener('click', this.removeProduct);
                addButton.addEventListener('click', this.addProduct);
            }
        }

    }

}

class Shirt extends Product {

    // The add product method adds a product to the cart
    // The add product method adds a product to the cart
    addProduct() {
        let titles = document.querySelectorAll('.product-title');

        for (let title of titles) {
            let cart = document.querySelector('#shop-cart');
            let parent = title.parentNode;

            if (title.innerText === "Shirt") {
                let quantity = parent.querySelector('.quantity-field');
                let stock = parent.querySelector('.stock');
                if (Number(stock.textContent) > 0) {
                    if (Number(quantity.value) <= Number(stock.textContent)) {
                        stock.textContent = Number(stock.textContent) - Number(quantity.value);
                        cart.textContent = Number(cart.textContent) + Number(quantity.value);
                    } else {
                        alert(`Please the quantity selected is more than what is available.`)
                    }
                } else {
                    alert(`Please the stock for Shirt is empty`)
                }
            };
        }
    }

    // The remove product method removes a product to the cart
    removeProduct() {
        let titles = document.querySelectorAll('.product-title');

        for (let title of titles) {
            let parent = title.parentNode;

            if (title.innerText === "Shirt") {
                if (confirm("Are you sure you want to delete this item?")) {
                    parent.style.display = "none";
                }
            }

        }
    }


    increase() {
        let titles = document.querySelectorAll('.product-title');
        for (let title of titles) {
            let parent = title.parentNode;

            if (title.innerText === "Shirt") {
                let quantity = parent.querySelector('.quantity-field');
                let stock = parent.querySelector('.stock');

                if (quantity.value < Number(stock.textContent)) {
                    quantity.value = Number(quantity.value) + 1;
                }
            }

        }

    }


    decrease() {
        let titles = document.querySelectorAll('.product-title');
        for (let title of titles) {
            let parent = title.parentNode;

            if (title.innerText === "Shirt") {
                let quantity = parent.querySelector('.quantity-field');
                if (quantity.value > 0) {
                    quantity.value = Number(quantity.value) - 1;
                }
            }

        }

    }

    display() {
        super.display();

        let titles = document.querySelectorAll('.product-title');

        for (let title of titles) {
            let parent = title.parentNode;
            if (title.innerText === "Shirt") {
                let addButton = parent.querySelector('.add-btn');
                let deletes = parent.querySelector('.delete-image');
                let up = parent.querySelector('.up');
                let down = parent.querySelector('.down');
                up.addEventListener('click', this.increase);
                down.addEventListener('click', this.decrease);
                deletes.addEventListener('click', this.removeProduct);
                addButton.addEventListener('click', this.addProduct);
            }
        }

    }

}



let product1 = new Sweater("Sweater", 23.23, 10, "Best product to buy for summer", "assets/dress1.png")
product1.display();

let product2 = new Trouser("Trouser", 53.23, 20, "Best product to buy for summer", "assets/trouser.jpg")
product2.display();

let product3 = new Shorts("Shorts", 3.23, 8, "Best product to buy for summer", "assets/shorts.jpg")
product3.display();

let product4 = new Shirt("Shirt", 29.23, 4, "Best product to buy for summer", "assets/shirt.jpg")
product4.display();