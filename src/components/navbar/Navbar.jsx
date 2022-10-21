import React from "react";
import { Box } from "@mui/system";
import { AppBar, Toolbar, Typography,InputAdornment, IconButton, Input, Badge} from "@mui/material";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
});

const StyledBox = styled(Box)({
  display: "flex",
  flexDirection: "row",
  // justifyContent: "space-between",
  alignItems:'center'
});

const StyledTypography = styled(Typography)({
  color: "#fff",
  margin: "10px",
});

const Navbar = () => {
  return (
    <>
      <Box>
        <AppBar position="sticky">
          <StyledToolbar>
            <Link to="/" style={{ textDecoration: "none" }}>
              <StyledTypography variant="h4" color="secondary">
                MUI
              </StyledTypography>
            </Link>
            <StyledBox>
            <Input
            id="standard-adornment-password"
            // type={values.showPassword ? 'text' : 'password'}
            // value={values.password}
            // onChange={handleChange('password')}
            placeholder="Search"
            sx={{border:'1px solid #fff', color:'#fff', padding:'0 5px', borderRadius:'3px'}}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  // onClick={handleClickShowPassword}
                  // onMouseDown={handleMouseDownPassword}
                >
                  <SearchOutlinedIcon  
                  color="secondary"
                  /> 
                </IconButton>
              </InputAdornment>
            }
          />
              <Link to="/login" style={{ textDecoration: "none" }}>
                <StyledTypography variant="body1">Login</StyledTypography>
              </Link>
              <Link to="/register" style={{ textDecoration: "none" }}>
                <StyledTypography variant="body1">Register</StyledTypography>
              </Link>
              <Link to="/cart" style={{ textDecoration: "none",marginLeft: "20px", }}>
              <Badge badgeContent={4} color="secondary">
              <ShoppingCartOutlinedIcon sx={{color:'#fff'}}/>
                </Badge>
              </Link>
            </StyledBox>
          </StyledToolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
