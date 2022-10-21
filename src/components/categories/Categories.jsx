// import styled from '@emotion/styled'
import React from "react";
import { Box, styled, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
// import products from "../../data/api";

const StyledBox = styled(Box)({
  height: "200px",
  width: "100%",
  cursor: "pointer",
  transition: "transform 0.15s ease-in-out",
    '&:hover': {
      transform: "scale3d(1.05, 1.05, 1)"
    }
});
const StyledTypography = styled(Typography)({
  textShadow:'initial',
  background: "white",
  opacity: "0.8",
  textAlign: "center",
  textTransform: "uppercase",
  '&:hover': {
    backgroundColor:'#37474f',
    color:'#fff'
  }
});

const Categories = () => {
  const categoryData = [{
    id: 1,
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGJzDmtpiw1CJHtakI9wT822nh3jU8EiR3Ug&usqp=CAU',
    text: 'Men'
  },
  {
    id: 2,
    image:'https://www.fashionmike.com/files/2012/07/wardrobe-essentials.jpg',
    text: 'Women'
  },
  {
    id: 3,
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe1y2KGqmsPrWuc4HL0zpcjAkJgEL1vZue0g&usqp=CAU',
    text: 'Kids'
  }]

  return (
    <Box sx={{ marginTop: "30px", marginBottom: "20px" }}>
      <Typography
        variant="h4"
        sx={{ textAlign: "center", marginBottom: "20px" }}
      >
        Categories
      </Typography>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        {categoryData.map(({id, image, text}) => (
          <StyledBox
          id={id}
          sx={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Link to={`/products/${text}`} style={{textDecoration: 'none'}}>
            <StyledTypography
              color='primary'
              sx={{
                fontSize: { xs: "2rem", sm: "1.5rem", md: "2rem" },
                margin: { xs: "25% 30px", sm: "50% 20px", md: "30% 50px" },
              }}
            >
              {text}
            </StyledTypography>
          </Link>
        </StyledBox>
        ))}

       
      </Stack>
    </Box>
  );
};

export default Categories;
