```javascript
const express = require('express');
const router = express.Router();

// Define API routes
router.get('/products', require('./controllers/products').getProducts);
router.get('/categories', require('./controllers/categories').getCategories);
router.get('/product/:id', require('./controllers/products'). getProduct);

module.exports = router;
```