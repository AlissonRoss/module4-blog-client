import { Button, TextField } from "@mui/material";
export default function Login() {
  return (
    <div className="Blog">
        <h1> Blog Post </h1>  
        <TextField
          id="filled-multiline-static"
          label="Body"
          multiline
          rows={10}
          defaultValue="Enter text"
          variant="filled"
        />
    </div>
  );
}