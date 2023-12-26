import { Box, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <form className="flex flex-col border-2 p-3 rounded-lg min-w-[25%] gap-5">
          <p className="text-center my-3">Register</p>
          <Box
            className="flex flex-col gap-5"
            component="form"
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="Username"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              type="email"
            />
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
            />
            <TextField
              id="outlined-password-input"
              label="Re-type password"
              type="password"
              autoComplete="current-password"
            />
          </Box>
          <Button variant="contained">Register</Button>
          <Button onClick={() => navigate("/login")} variant="outlined">
            Login
          </Button>
        </form>
      </div>
    </>
  );
};

export default Register;
