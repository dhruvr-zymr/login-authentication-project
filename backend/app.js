Here is a Node.js backend implementation based on the provided high-level design:

**Step 1: Set up the project structure**

Create a new directory for the project and initialize it with npm:
```bash
mkdir mern-employee-registration
cd mern-employee-registration
npm init -y
```
**Step 2: Install required dependencies**

Install Express.js, MongoDB, and other necessary dependencies:
```bash
npm install express mongoose body-parser
```
**Step 3: Create the backend API endpoint**

Create a new file called `app.js` in the project root directory:
```javascript
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Connect to MongoDB database
mongoose.connect('mongodb://localhost/employee-registration', { useNewUrlParser: true, useUnifiedTopology: true });

// Use body-parser middleware to parse incoming request bodies
app.use(bodyParser.json());

// Define API endpoint for employee registration
app.post('/register', (req, res) => {
  // Validate incoming request data using Express.js middleware
  const validateRequest = (req, res, next) => {
    if (!req.body.fullName || !req.body.emailAddress || !req.body.employeeID || !req.body.department || !req.body.password || !req.body.confirmPassword) {
      return res.status(400).send({ message: 'Invalid request data' });
    }
    next();
  };

  // Validate password and confirm password fields
  const validatePasswords = (req, res, next) => {
    if (req.body.password !== req.body.confirmPassword) {
      return res.status(400).send({ message: 'Passwords do not match' });
    }
    next();
  };

  // Create new employee document in MongoDB database
  const createEmployee = async (req, res) => {
    try {
      const employeeData = {
        fullName: req.body.fullName,
        emailAddress: req.body.emailAddress,
        employeeID: req.body.employeeID,
        department: req.body.department,
        password: req.body.password,
      };
      const employee = new mongoose.Document(employeeData);
      await employee.save();
      res.send({ message: 'Employee registered successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: 'Error registering employee' });
    }
  };

  // Chain validation and creation middleware functions
  validateRequest(req, res, () => {
    validatePasswords(req, res, createEmployee);
  });
});

// Start the Express.js server
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
```
**Step 4: Implement form validation and responsive layout**

In the `app.post('/register')` endpoint, implement client-side validation using React's built-in features or a library like Yup to validate form data before submission. For example:
```javascript
const validateForm = (req) => {
  const errors = [];
  if (!req.body.fullName) {
    errors.push({ message: 'Full name is required' });
  }
  // ... add more validation rules here ...
  return errors;
};

// In the API endpoint, check for form validation errors before creating a new employee document
const createEmployee = async (req, res) => {
  const errors = validateForm(req);
  if (errors.length > 0) {
    res.status(400).send({ message: 'Invalid request data' });
  } else {
    // ... create employee document ...
  }
};
```
For responsive layout, use CSS media queries and React's responsive design features (e.g., React Grid System) to create a layout that adapts to different screen sizes and devices.

This is just a basic implementation of the backend API endpoint. You may need to add more functionality, error handling, and validation rules depending on your specific requirements and constraints.