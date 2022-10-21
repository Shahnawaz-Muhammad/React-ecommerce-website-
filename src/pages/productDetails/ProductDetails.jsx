import React, { useState } from "react";
import {
  Grid,
  Typography,
  styled,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  Select,
  MenuItem,
  InputLabel,
  Button
} from "@mui/material";
import { Box } from "@mui/system";
import heroimg from "../../data/images/heroimg.jpg";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const StyledBox = styled(Box)({
  padding: "30px  ",
});

const StyledBoxDetails = styled(Box)({
  padding: "0 50px",
});

const StyledBoxImg = styled(Box)({
  width: "100%",
  display: "flex",
  justifyContent: "center",
});

const StyledRemoveIcon = styled(RemoveIcon)({
  width: "40px",
  height: "40px",
  border: "1px solid gray",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "&:hover": {
    backgroundColor: "#37474f",
    color: "#fff",
  },
});

const StyledAddIcon = styled(AddIcon)({
  width: "40px",
  height: "40px",
  border: "1px solid gray",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "&:hover": {
    backgroundColor: "#37474f",
    color: "#fff",
  },
});

const StyledButton = styled(Button) ({
  '&:hover':{
    backgroundColor: "#37474f",
    color:'#fff'
  }
})



const ProductDetails = () => {
  const [selectedValue, setSelectedValue] = useState("black");
  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    // name: 'color-radio-button-demo',
    // inputProps: { 'aria-label': item },
  });


  return (
    <StyledBox>
      <Typography variant="h3">Category</Typography>
      <Grid container >
        <Grid item sm={6} xs={12}>
          <StyledBoxImg>
            <img
              src={heroimg}
              alt="img"
              width="100%"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            />
          </StyledBoxImg>
        </Grid>
        <Grid item sm={6} xs={12}>
          <StyledBoxDetails>
            <Typography variant="h5">Denim Jumpsuit</Typography>
            <Typography variant="subtitle1" marginTop="10px">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              voluptas impedit hic aliquam possimus, laborum sunt et adipisci
              debitis veritatis? Voluptas expedita sint molestias optio ipsam
              iure quo aspernatur facilis!
            </Typography>
            <Typography variant="h2" marginTop="20px"
            sx={{
              // mb: 1.5,
              textTransform: "uppercase",
              letterSpacing: "0.15rem",
            }}>
              $20
            </Typography>

            <Box
              sx={{
                display: " flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                marginTop: "30px",
              }}
            >
              <Grid container
              columnSpacing={1}
               rowSpacing={3}>
                <Grid item md={6} xs={12} sx={{display:'flex', alignItems:'center'}} >
                <FormLabel
                  id="product-color-attribute"
                  sx={{
                    // mb: 1.5,
                    fontWeight: "xl",
                    textTransform: "uppercase",
                    fontSize: "xs",
                    letterSpacing: "0.15rem",
                 marginRight:'15px'

                  }}
                >
                  Color
                </FormLabel>
                <FormControl>
                
                <RadioGroup
                  aria-labelledby="product-color-attribute"
                  defaultValue="black"
                  sx={{ gap: 1, flexWrap: "wrap", flexDirection: "row" }}
                >
                  <Radio
                    {...controlProps("black")}
                    sx={{
                      color: "black",
                      width: "20px",
                      height: "20px",
                      "&.Mui-checked": {
                        color: "black",
                        backgroundColor: "black",
                      },
                      "&:hover": {
                        backgroundColor: "black",
                      },
                    }}
                  />
                  <Radio
                    {...controlProps("blue")}
                    sx={{
                      color: "blue",
                      width: "20px",
                      height: "20px",
                      "&.Mui-checked": {
                        color: "blue",
                        backgroundColor: "blue",
                      },
                      "&:hover": {
                        backgroundColor: "blue",
                      },
                    }}
                  />
                  <Radio
                    {...controlProps("grey")}
                    sx={{
                      color: "gray",
                      width: "20px",
                      height: "20px",
                      "&.Mui-checked": {
                        color: "gray",
                        backgroundColor: "gray",
                      },
                      "&:hover": {
                        backgroundColor: "gray",
                      },
                    }}
                  />
                </RadioGroup>
              </FormControl>
                </Grid>

                <Grid item lg={6} xs={12} sx={{display:'flex', alignItems:'center',}}>
                <FormLabel
                  id="product-size-attribute"
                  sx={{
                    // mb: 1.5,
                    fontWeight: "xl",
                    textTransform: "uppercase",
                    fontSize: "xs",
                    letterSpacing: "0.15rem",
                 marginRight:'15px'
                  }}
                >
                  Size
                </FormLabel>
                <FormControl sx={{ m: 1, minWidth: 120}} size="small">
                <InputLabel id="demo-select-small" 
                >Size</InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  value={age}
                  label="Age"
                  onChange={(e) => setAge(e.target.value)}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>XS</MenuItem>
                  <MenuItem value={20}>XS</MenuItem>
                  <MenuItem value={30}>S</MenuItem>
                  <MenuItem value={30}>M</MenuItem>
                  <MenuItem value={30}>L</MenuItem>
                  <MenuItem value={30}>XL</MenuItem>
                </Select>
              </FormControl>
                </Grid>           
                </Grid>           
            </Box>

            {/* Add to Cart Container */}

            <Box sx={{marginTop:'20px'}}>
              <Grid container columnSpacing={1}
               rowSpacing={3}>
                <Grid item lg={6} xs={12} sx={{display:'flex', alignItems:'center'}}>
                    <StyledRemoveIcon />
                    <Typography variant='h5' sx={{width:'60px', height:'40px', border:'1px solid gray', display:'flex', justifyContent:'center', alignItems:'center'}}>1</Typography>
                  <StyledAddIcon />
                  </Grid>
                <Grid item lg={6} xs={12} sx={{display:'flex', alignItems:'center'}}>
                  <StyledButton variant='outlined' size="large">Add to Cart</StyledButton>
                </Grid>
              </Grid>
            </Box>
          </StyledBoxDetails>
        </Grid>
      </Grid>
    </StyledBox>
  );
};

export default ProductDetails;
