```javascript
const Product = require('../models/Product');

// Define product controller
class ProductsController {
  async getProducts(req, res) {
    const products = await Product.find();
    res.json(products);
  }

  async getProduct(req, res) {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).send({ message: 'Product not found' });
    }
    res.json(product);
  }
}

module.exports = ProductsController;
```