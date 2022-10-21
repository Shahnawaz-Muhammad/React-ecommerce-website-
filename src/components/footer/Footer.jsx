import React from "react";
import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import styled from "@emotion/styled";
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import { Facebook, Instagram, LinkedIn, Twitter, LocationOn} from "@mui/icons-material";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const StyledBox= styled(Box)({
  backgroundColor:'#f0f0f0',
  padding: '30px 0'
});

const StyledBoxSocial = styled(Box)({
  width:'100%',
  display:'flex',
  justifyContent:'space-around',
   marginTop:'30px'
})

const Footer = () => {
  return (
    <StyledBox>
      <Container>
      <Grid
        container
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <Grid item flex="1"  md={3} sm={6} xs={12}>
          <Typography variant='h4'>
            LAMA
          </Typography>
          <Typography variant='subtitle2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime esse ratione nihil. Aperiam quo laborum eius. Aliquam perferendis quae iste!
          </Typography>

          <StyledBoxSocial>
            <Facebook />
            <Instagram />
            <Twitter />
            <LinkedIn />
          </StyledBoxSocial>
        </Grid>

        <Grid item flex="1"  md={3} sm={6} xs={12}>
          <List>
            <ListItem disablePadding>
            <Typography variant='h6'>Categories</Typography>
            </ListItem>
          <ListItem disablePadding>
                {/* <InboxIcon /> */}
              <ListItemText primary="Man Fashion" />
          </ListItem>
          <ListItem disablePadding>
                {/* <DraftsIcon /> */}
              <ListItemText primary="Women Fashion" />
          </ListItem>
          <ListItem disablePadding>
                {/* <InboxIcon /> */}
              <ListItemText primary="Kids Fashion" />
          </ListItem>
          <ListItem disablePadding>
                {/* <DraftsIcon /> */}
              <ListItemText primary="Products" />
          </ListItem>
          </List>
        </Grid>
        <Grid item flex="1"  md={3} sm={6} xs={12}>
        <List>
            <ListItem disablePadding>
            <Typography variant='h6'>Info</Typography>
            </ListItem>
          <ListItem disablePadding>
                {/* <InboxIcon /> */}
              <ListItemText primary="Accessories" />
          </ListItem>
          <ListItem disablePadding>
                {/* <DraftsIcon /> */}
              <ListItemText primary="My Account" />
          </ListItem>
          <ListItem disablePadding>
                {/* <InboxIcon /> */}
              <ListItemText primary="Privacy" />
          </ListItem>
          <ListItem disablePadding>
                {/* <DraftsIcon /> */}
              <ListItemText primary="Terms & Conditions" />
          </ListItem>
          </List>
        </Grid>
        <Grid item flex="1"  md={3} sm={6} xs={12}>
          <List>
          <ListItem disablePadding>
          <Typography variant='h6'>
            Contact
          </Typography>
          </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <LocationOn />
              </ListItemIcon>
              <ListItemText>622 Dixie Path, South Tobinchester 98336</ListItemText>
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
              <CallOutlinedIcon />
              </ListItemIcon>
              <ListItemText>+92-344-540-7344</ListItemText>
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <EmailOutlinedIcon />
              </ListItemIcon>
              <ListItemText>contact@webologix.com</ListItemText>
            </ListItem>
          </List>
        </Grid>
      </Grid>
      </Container>
    </StyledBox>
  );
};

export default Footer;
