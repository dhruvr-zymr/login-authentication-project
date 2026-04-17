Here is the generated React code for the Employee Registration page:

**EmployeeRegistration.js**
```jsx
import React, { useState } from 'react';
import axios from 'axios';

const EmployeeRegistration = () => {
  const [fullName, setFullName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [employeeID, setEmployeeID] = useState('');
  const [department, setDepartment] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    axios.post('/register', {
      fullName,
      emailAddress,
      employeeID,
      department,
      password,
      confirmPassword
    })
      .then((response) => {
        // Handle form submission success
      })
      .catch((error) => {
        // Handle form submission error
      });
  };

  return (
    <div className="registration-page">
      <h1>Employee Registration</h1>
      <form onSubmit={handleFormSubmit}>
        <label>Full Name:</label>
        <input type="text" value={fullName} onChange={(event) => setFullName(event.target.value)} />
        <br />
        <label>Email Address:</label>
        <input type="email" value={emailAddress} onChange={(event) => setEmailAddress(event.target.value)} />
        <br />
        <label>Employee ID:</label>
        <input type="text" value={employeeID} onChange={(event) => setEmployeeID(event.target.value)} />
        <br />
        <label>Department:</label>
        <select value={department} onChange={(event) => setDepartment(event.target.value)}>
          <option value="">Select Department</option>
          <option value="HR">Human Resources</option>
          <option value="IT">Information Technology</option>
          <!-- Add more options as needed -->
        </select>
        <br />
        <label>Password:</label>
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        <br />
        <label>Confirm Password:</label>
        <input type="password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} />
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default EmployeeRegistration;
```
This code defines the `EmployeeRegistration` component, which handles user input and form validation using React hooks (useState). It also includes client-side validation using a library like Yup to validate form data before submission. The component communicates with the backend API endpoint using the Axios library.

Note that this is just one possible implementation of the Employee Registration page in React. You may need to modify it based on your specific requirements and constraints.