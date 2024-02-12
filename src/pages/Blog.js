import { Button, TextField } from "@mui/material";
import {Link} from 'react-router-dom';
export default function Login() {
  return (
    <div className="Blog">
        <Button variant="contained" color="secondary" component={Link} to='/'>Logout</Button>
        <h1> Blog Post </h1>
        <div className="Blog-container">
          <TextField
            id="filled-multiline-static"
            label="Body"
            multiline
            rows={10}
            defaultValue="Enter text"
            variant="filled"
          />
          <Button variant="contained" color="secondary">Submit</Button>
        </div>  
    </div>
  );
}