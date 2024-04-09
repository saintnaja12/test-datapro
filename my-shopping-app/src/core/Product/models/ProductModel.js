class Product {
    constructor({ id, title, price, description, image, category, rating, quantity }) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.description = description;
        this.image = image;
        this.category = category;
        this.rating = rating;
        this.quantity = quantity ? quantity : 0
    }

    getFormattedPrice() {
        return `$${this.price.toFixed(2)}`;
    }
}

export default Product;
