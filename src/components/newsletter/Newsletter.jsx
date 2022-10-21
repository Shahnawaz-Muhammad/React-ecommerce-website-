import React from "react";
import { Button, Input, Typography } from "@mui/material";
import { Box } from "@mui/system";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import styled from "@emotion/styled";

const StyledBox = styled(Box)({
  backgroundColor: "#f4f1fc",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems:'center',
});

const StyledBoxInner = styled(Box)({
    padding:'60px 0',
});

const StyledInput = styled(Input)({
  width: "70%",
  border: "1px solid #444",
  padding:'3px 5px',
//   borderRadius:'4px'
});

const StyledButton = styled(Button)({
    padding:'8px 0',
    borderRadius:'0',
  });

const Newsletter = () => {
  return (
    <StyledBox component='span' align="center">
      <StyledBoxInner component='span'>
        <Typography variant="h3" >Newsletter</Typography>
        <Typography variant="subtitle1" margin='10px 0 20px 0'>
          Subscribe our Newsletter to get Timely updates about new products
        </Typography>
        <Box sx={{display:'flex', justifyContent:'center'}}>
          <StyledInput type="text" />
          <StyledButton variant="contained">
            <SendOutlinedIcon />
          </StyledButton>
        </Box>
      </StyledBoxInner>
    </StyledBox>
  );
};

export default Newsletter;
