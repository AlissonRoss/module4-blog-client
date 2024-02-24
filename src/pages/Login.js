import { Button, TextField } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { LogIn } from '../api-services/AuthService';
import { useState } from "react";
import { setUser } from '../api-services/UserService';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
  const handleLogin = async (username, password) => {
    try {
      // Call the LogIn function with the username and password
      const { accessToken, refreshToken } = await LogIn({ username, password });
  
      // Handle successful login (store tokens, redirect, etc.)
      console.log('Login successful!');
      console.log('Access Token:', accessToken);
      console.log('Refresh Token:', refreshToken);
      navigate('/blog')
      // Redirect to another page, update state, etc.
    } catch (error) {
      // Handle login error
      console.error('Error logging in:', error.message);
      // Display error message to the user or perform other actions
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
          label="Email" 
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
          onClick={() => handleLogin(username,password)}
        >
          Sign In
        </Button>
      </div>
    </div>
  );
}