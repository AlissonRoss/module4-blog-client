import { Button, TextField } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { LogIn } from '../api-services/AuthService';
import { useState } from "react";
import { setUser } from '../api-services/UserService';
import AccountCircle from "@mui/icons-material/AccountCircle";

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  
  const handleLogin = async () => {
    try {
      // Call the LogIn function with the username and password
      const { accessToken } = await LogIn({ username, password });
  
      // Handle successful login (store tokens, redirect, etc.)
      if (accessToken) {
        setUser(accessToken);
        localStorage.setItem('blog-app-jwt', JSON.stringify(accessToken));
        navigate('/blog');
        console.log('Login successful!');
      } else {
        // Handle case where accessToken is not received
        setError("Login failed. Please check your credentials.");
      }
    } catch (error) {
      // Handle login error
      console.error('Error logging in:', error.message);
      // Display error message to the user or perform other actions
      setError("Login failed."+error.message);
    }
  };

  return (
    <div className="Login">   
      <div className="Login-container">
        <h1>Login Page for Module 4 Final</h1>
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField
          color="secondary"
          required
          id="filled-email-input"
          label="Username" 
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          color="secondary"
          required
          id="filled-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="contained"
          color="secondary"
          onClick={handleLogin}
        >
          Sign In
        </Button>
        
        {error && <h4>{error}</h4>}{/*Displays error if error is set*/}
        <a href="/register">Need to register? Click here.</a>
      </div>
    </div>
  );
}
