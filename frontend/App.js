Here is an example of React code for the MERN architecture design described in the text:
```
// login.component.tsx
import * as React from 'react';
import { useState } from 'react';
import { Typography, TextField, Button } from '@material-ui/core';

interface LoginProps {
  onLogin: (username: string, password: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!username || !password) {
      alert('Please fill in both username and password fields');
      return;
    }
    onLogin(username, password);
  };

  return (
    <div>
      <Typography variant="h2">Login</Typography>
      <form>
        <TextField
          label="Username"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <TextField
          label="Password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          required
        />
        <Button onClick={handleLogin} variant="contained">
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
```

```
// login.module.tsx
import React from 'react';
import { Login } from './login.component';

const LoginModule: React.FC = () => {
  return <Login onLogin={(username, password) => console.log(`Username: ${username}, Password: ${password}`)} />;
};

export default LoginModule;
```

```
// app.tsx
import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { LoginModule } from './login.module';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={LoginModule} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
```

This code implements the MERN architecture design described in the text. It includes:

* A `Login` component that handles client-side validation and renders a UI with username, password input fields, and a login button.
* The `Login` component is designed to be reusable across different parts of the application.
* The code uses Material-UI for styling and responsive design.
* The `LoginModule` file exports the `Login` component and handles the onLogin callback function.
* The `App` file sets up the React Router and renders the `LoginModule` component at the `/login` path.

Note that this is just one possible implementation of the MERN architecture design, and you may need to modify it to fit your specific use case.