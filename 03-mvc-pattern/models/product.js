import fs from 'fs';
import path from 'path';
import { rootPath } from '../paths.js';

const productsFilePath = path.join(rootPath, 'data', 'products.json');

export default class Product {
  constructor({ title, price }) {
    this.title = title;
    this.price = price;
  }

  async save() {
    const currentProducts = await Product.fetchAllProducts();
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
