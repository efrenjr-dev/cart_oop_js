console.log("cart");

class Customer {
    constructor(email) {
        // email, cart, orders
        this.email = email;
        this.cart = new Cart();
        this.orders = [];
    }

    checkOut() {
        //if cart not empty push to orders array
        if (cart.length < 0) {
            return "error - cart is empty";
        }
        this.orders.push(this.cart);
    }
}

class Cart {
    constructor() {
        //contents, totalAmount
        this.contents = [];
        this.totalAmount = 0;
    }

    addToCart(product, quantity) {
        // accepts a Product instance
        if (product.isActive === false) {
            return `error - product ${product.name} is not active`;
        }
        this.contents.push({ product: product, quantity: quantity });
        return this;
    }

    showCartContents() {
        this.contents.forEach((content) => console.log(content));
        return this;
    }

    updateProductQuantity(productName, quantity) {
        // (string,number)
        let foundProductIndex = this.contents.findIndex(
            (content) => content.product.name === productName
        );
        // console.log(foundProductIndex);
        if (foundProductIndex === -1) {
            return "error - product not found - unable to update product quantity";
        }
        this.contents[foundProductIndex] = {
            ...this.contents[foundProductIndex],
            quantity: quantity,
        };
        return this;
    }

    clearCartContents() {
        this.contents = [];
        return this;
    }

    computeTotal() {
        let totalAmount = 0;
        this.contents.forEach((content) => {
            totalAmount =
                totalAmount + content.product.price * content.quantity;
        });
        this.totalAmount = totalAmount;
        return this;
    }
}

class Product {
    constructor(name, price) {
        //name, price, isActive
        this.name = name;
        this.price = price;
        this.isActive = true;
    }

    archive() {
        this.isActive = false;
        return this;
    }

    updatePrice(price) {
        if (typeof price !== "number") {
            return "error - price should be a number";
        }
        this.price = price;
        return this;
    }
}

// ------ unit testing

const john = new Customer("john@gmail.com");

const prodA = new Product("soap", 9.99);
const prodB = new Product("shampoo", 4.99);

john.cart.addToCart(prodA, 3);
john.cart.addToCart(prodB, 5);
