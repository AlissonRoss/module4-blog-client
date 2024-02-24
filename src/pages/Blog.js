import { Button, TextField } from "@mui/material";
import { Link } from 'react-router-dom';
import { getUser } from "../api-services/UserService";

export default function Blog() {
  // Call the getUser function to retrieve user information
  const user = getUser();

  // Access the username property of the user object
  const username = user ? user.username : 'Guest';

  return (
    <div className="Blog">
      <Button variant="contained" color="secondary" component={Link} to='/'>Logout</Button>
      <h4>{username}</h4> {/* Display username or 'Guest' if no user */}
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
