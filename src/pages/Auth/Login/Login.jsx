import { Box, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <form
          action="
    "
          className="flex flex-col border-2 p-3 rounded-lg min-w-[25%] gap-5"
        >
          <p className="text-center my-3">Login</p>
          <Box
            className="flex flex-col gap-5"
            component="form"
            noValidate
            autoComplete="off"
          >
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
          </Box>
          <Button variant="contained">Login</Button>
          <Button onClick={() => navigate("/register")} variant="outlined">
            Register
          </Button>
        </form>
      </div>
    </>
  );
};

export default Login;
