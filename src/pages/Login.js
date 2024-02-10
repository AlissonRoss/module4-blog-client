import { Button, TextField } from "@mui/material";
import AccountCircle from '@mui/icons-material/AccountCircle';
export default function Login() {
  return (
    <div className="Login">   
        <div className="Login-container">
            <h1>Login Page for Module 4 Final</h1>
            <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField color="secondary" required id="filled-email-input" label="Email" />
            <TextField color="secondary" required id="filled-password-input" label="Password"
            type="password" autoComplete="current-password" />
            <Button variant="contained">Sign In</Button>
      </div>
    </div>
  );
}
