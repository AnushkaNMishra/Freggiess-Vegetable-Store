import {
  TextField,
  Button,
  Box,
  Alert,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import './LoginReg.css';


const Registration = () => {
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: "",
  });
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = { 
      firstname: data.get("firstname"),
      lastname: data.get("lastname"),
      email: data.get("email"),
      address: data.get("address"),
      phone: data.get("phone"),
      password: data.get("password"),
      password_confirmation: data.get("password_confirmation"),
      usertype: data.get("usertype"),
      tc: data.get("tc")
    };
    //console.log(actualData);
    if (
      actualData.firstname &&
      actualData.email &&
      actualData.password &&
      actualData.password_confirmation &&
      actualData.tc !== null
    ) {
      if (actualData.password === actualData.password_confirmation) {
        console.log(actualData);
        // document.getElementById('registration-form').reset()
        
        // SHISH
        const modifiedData = {
          ...actualData,
          usertype: "user",
          boughtProducts: [],
          address: "Main Street" + Math.random() * 6100,
          phone: Math.random() * 6100,
        };
        console.log(modifiedData);
        const response = await axios.post(
          "http://localhost:3001/api/users/register",
          modifiedData
        );

        console.log(response);
        setError({
          status: true,
          msg: "Registration Successful",
          type: "success",
        });

        navigate("/login");
        // SHISH
        
      } else {
        setError({
          status: true,
          msg: "Password and Confirm Password Doesn't Match",
          type: "error",
        });
      }
    } else {
      setError({ status: true, msg: "All Fields are Required", type: "error" });
    }
  };
  return (
    <>
      <Box
        component="form"
        noValidate
        sx={{ mt: 1}}
        id="registration-form"
        onSubmit={handleSubmit}
        
      >
       <div>
        <TextField className="regis-tabs"       
          required
          id="firstname"
          name="firstname"
          label="First Name"
        />
        <TextField className="regis-tabs-side"
          id="lastname"
          name="lastname"
          label="Last Name"
        />
        </div>
        
        
        <TextField
            
          required
          fullWidth
          id="email"
          name="email"
          label="Email Address"
          margin="normal"
        />
        
        <TextField
          multiline
          rows={2}
          fullWidth
          id="address"
          name="address"
          label="Address"
          margin="normal"
        />
        <TextField
          
          required
          margin="normal"
          id="phone"
          fullWidth
          name="phone"
          label="Phone No"
        />

        <TextField
         
          required
          
          id="password"
          name="password"
          margin="normal"
          label="Password"
          type="password"
        />
        <TextField
          required
          margin="normal"
          id="password_confirmation "
          name="password_confirmation"
          label="Confirm Password"
          type="password"
        />
        <br/>
   <FormControlLabel name="usertype" id="usertype" control={<Checkbox defaultChecked />} label="User" />
  <FormControlLabel name="admintype" id="admintype" disabled control={<Checkbox />} label="Admin" />

 
<br/>
        <FormControlLabel
          control={<Checkbox value="agree" color="primary" name="tc" id="tc" />}
          label="I agree to terms and conditions."
        />

        <Box textAlign="center">
          <Button
            type="submit"
            color="success"
            variant="contained"
            sx={{ mt: 3, mb: 1, px: 6 }}
          >
            {" "}
            Sign Up
          </Button>
        </Box>
        {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ""}
      </Box>
    </>
  );
};

export default Registration;
