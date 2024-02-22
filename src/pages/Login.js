import { Button, TextField } from "@mui/material";
import { useNavigate} from 'react-router-dom';
import AccountCircle from '@mui/icons-material/AccountCircle';
import {LogIn} from '../api-services/AuthService';
import { useState } from "react";
export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleLogin = async () => {
    
    try {
      const {jwt, success} = await LogIn({ username, password });
      if(success){
        setUsername(jwt);
        localStorage.setItem('blog-app-jwt',jwt);
        navigate('/blog')
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };
  return (
    <div className="Login">   
        <div className="Login-container">
            <h1>Login Page for Module 4 Final</h1>
            <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField color="secondary" required id="filled-email-input" label="Email" 
            onChange={(e) => setUsername(e.target.value)}/>
            <TextField color="secondary" required id="filled-password-input" label="Password"
            type="password" autoComplete="current-password" onChange={(e) => setPassword(e.target.value)}/>
            <Button variant="contained" color="secondary" onClick={handleLogin}>Sign In</Button>
      </div>
    </div>
  );
}
