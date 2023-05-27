const products = [];

export default class Product {
  constructor({ title, price }) {
    this.title = title;
    this.price = price;
  }

  save() {
    products.push(this);
  }

  static getAllProducts() {
    return products;
  }
}
