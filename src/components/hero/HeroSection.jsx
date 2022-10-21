import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import heroimg from "../../data/images/heroimg.jpg";
import { Box } from "@mui/system";

const HeroSection = () => {
  return (
    <Grid
      container
      spacing={2}
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{backgroundColor:'#F8F9F8', height:'900'}}

    >
      <Grid item xs={12} md={6}>
        <Box
          component="img"
          sx={{
            height: "auto",
            width: "100%",
            //   maxHeight: { xs: 233, md: 167 },
            //   maxWidth: { xs: 350, md: 250 },
          }}
          alt="The house from the offer."
          src={heroimg}
        />
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        display="flex"
        direction="column"
        justifyContent="center"
        alignItems="center"
        textAlign='center'
      >
        <Typography variant="h2" 
        sx={{fontWeight:'bold', fontSize:{xs:'3rem', md:'3rem', lg:'3rem'}}}
        >You've Got Invites</Typography>
        <Typography variant="h4" 
        sx={{fontWeight:'normal', fontSize:'1.5rem'}}
        >
          We’ve got a corduroy suit.
        </Typography>
        <Typography variant="h4" 
        sx={{fontWeight:'normal', fontSize:'1.5rem'}}
        >
          RSVP yes in this party of two.
        </Typography>
        <Box p={3}>
        <Button variant="contained" sx={{padding:'10px 50px'}}>Shop Now</Button>
        </Box>
      </Grid>
      
    </Grid>
  );
};

export default HeroSection;
