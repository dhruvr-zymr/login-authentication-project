Here is the Mongoose schema based on the provided text:
```
const mongoose = require('mongoose');

const employeeRegistrationSchema = new mongoose.Schema({
  fullName: String,
  emailAddress: String,
  employeeID: String,
  department: String,
  password: String,
  confirmPassword: String
});

module.exports = mongoose.model('EmployeeRegistration', employeeRegistrationSchema);
```
This schema defines a collection called `EmployeeRegistration` with the following fields:

* `fullName`: a string field for storing the full name of the employee
* `emailAddress`: a string field for storing the email address of the employee
* `employeeID`: a string field for storing the employee ID
* `department`: a string field for storing the department of the employee
* `password`: a string field for storing the password (note: this is not recommended as it is not secure to store passwords in plain text)
* `confirmPassword`: a string field for storing the confirmed password (again, not recommended)

Please note that storing passwords in plain text is not recommended and you should consider using a more secure method such as hashing and salting.