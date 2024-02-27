import { register } from "../api-services/AuthService";
import { useState } from "react";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const { accessToken, refreshToken } = await register({ username, password });
      localStorage.setItem('blog-app-jwt', JSON.stringify(accessToken));
      // Redirect to the blog page or provide feedback to the user
      navigate('/blog');
    } catch (error) {
      setError(error.message); // Display a user-friendly error message
    }
  };

  return (
    <div className="Login">   
      <div className="Login-container">
        <h1>Register Page for Module 4 Final</h1>
        <TextField
          color="secondary"
          required
          id="filled-email-input"
          label="Username" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          color="secondary"
          required
          id="filled-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="contained"
          color="secondary"
          onClick={handleRegister}
        >
          Register
        </Button>
        
        {error && <h4>{error}</h4>}
        <a href="/">Already have an account? Click here.</a>
      </div>
    </div>
  );
}
