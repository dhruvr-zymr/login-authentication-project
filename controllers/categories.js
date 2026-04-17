```javascript
const Category = require('../models/Category');

// Define category controller
class CategoriesController {
  async getCategories(req, res) {
    const categories = await Category.find();
    res.json(categories);
  }
}

module.exports = CategoriesController;
```