import styled from "@emotion/styled";
import { Input, TextField, Typography, Button } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { Form } from "react-router-dom";
import bg from "../../data/images/sweater.jpg";

const StyledBox = styled(Box)({
  width: "100%",
  height: "100%",
  background:
    "url(data:image/jpeg;base64,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)",
  backgroundPosition: "center",
  backgroundSize: "cover",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const StyledBoxForm = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
  width: "60%",
  padding:'30px',
  border:'1px solid #444'
});

const StyledTextField = styled(TextField)({
  minWidth:'47%',
  // width:'50px',
  flex: 2
})

const Register = () => {
  return (
    <Box sx={{ width: "100vw", height: "100vh" }}>
      <StyledBox>
        <StyledBoxForm>
          <Typography variant="subtitle1" sx={{fontSize:'2rem', marginBottom:'15px'}}>Create an account</Typography>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <StyledTextField required id="outlined-required" label="First Name" />
            <StyledTextField required id="outlined-required" label="Last Name" />
            <StyledTextField
              required
              id="outlined-required"
              label="Email"
              type="email"
            />
            <StyledTextField
              required
              id="outlined-required"
              label="Password"
              type="password"
            />
            <StyledTextField
              required
              id="outlined-required"
              label="Confirm Password"
              type="password"
            />
            <Typography variant="subtitle1">
              By creating an account, I consent to the processing of my personal
              data in accordance with the <b>Privacy Policy</b>
            </Typography>
            <Button variant='contained'>Register</Button>
          </Box>
        </StyledBoxForm>
      </StyledBox>
    </Box>
  );
};

export default Register;




