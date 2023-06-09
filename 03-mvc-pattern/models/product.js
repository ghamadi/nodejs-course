import fs from 'fs';
import path from 'path';
import { rootPath } from '../paths.js';

const productsFilePath = path.join(rootPath, 'data', 'products.json');

export default class Product {
  constructor({ title, price, imageUrl, description }) {
    this.title = title;
    this.price = price;
    this.imageUrl = imageUrl;
    this.description = description;
  }

  async save() {
    const currentProducts = await Product.fetchAllProducts();
    this.id = `${currentProducts.length + 1}`;
    const newData = {
      products: [...currentProducts, this]
    };
    fs.writeFile(productsFilePath, JSON.stringify(newData), err => err && console.error(err));
  }

  static fetchAllProducts() {
    return new Promise((resolve, reject) => {
      fs.readFile(productsFilePath, (error, data) => {
        if (error) {
          reject(error);
        } else {
          resolve(JSON.parse(data).products ?? []);
        }
      });
    });
  }
}
