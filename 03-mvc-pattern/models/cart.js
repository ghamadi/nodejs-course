import Product from './product';

export default class Cart {
  async addProduct(productId) {
    const products = await Product.fetchAllProducts();
    const product = products.find(p => p.id === productId);
  }
}
