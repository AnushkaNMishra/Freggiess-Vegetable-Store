import { TextField, Button, Box, Alert } from "@mui/material";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSignIn } from "react-auth-kit";
import axios from "axios";
import Cookies from "js-cookie";

const UserLogin = () => {
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: "",
  });
  // SHISH
  const signIn = useSignIn();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      email: data.get("email"),
      password: data.get("password"),
    };
    console.log(actualData);
    if (actualData.email && actualData.password) {
      document.getElementById("login-form").reset();
      try {
        const response = await axios.post(
          "http://localhost:3001/api/users/login",
          actualData
        );
        console.log(response);
        signIn({
          token: response.data.token,
          expiresIn: 3600,
          tokenType: "Bearer",
          authState: { email: actualData.email },
        });
        const userId = (
          await axios.get(
            "http://localhost:3001/api/users/getUserId/" + actualData.email
          )
        ).data;
        const userData = (
          await axios.get("http://localhost:3001/api/users/" + userId)
        ).data;
        const userFirstName = userData.firstname;
        Cookies.set("freggie-firstname", userFirstName);
        setError({ status: true, msg: "Login Success", type: "success" });
        setTimeout(() => {
          navigate("/myaccount");
        }, 3000);
      } catch (err) {
        console.log(err);
      }
    } else {
      setError({ status: true, msg: "All fields are required", type: "error" });
    }
  };
  // SHISH
  return (
    <>
      <Box
        component="form"
        noValidate
        sx={{ mt: 3 }}
        id="login-form"
        onSubmit={handleSubmit}
        textAlign="center"
      >
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          name="email"
          label="Email Address"
          sx={{ textAlign: "center" }}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
        />
        <Box textAlign="center">
          <Button
            type="submit"
            variant="contained"
            color="success"
            sx={{ mt: 3, mb: 2, px: 5 }}
          >
            {" "}
            Login
          </Button>
        </Box>
        <NavLink
          to="/sendpasswordresetemail"
          variant="contained"
          justifyContent="center"
        >
          Forgot Password?
        </NavLink>
        {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ""}
      </Box>
    </>
  );
};

export default UserLogin;
