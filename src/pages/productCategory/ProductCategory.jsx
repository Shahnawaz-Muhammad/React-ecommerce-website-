import React from 'react'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  styled,
  Typography,
} from "@mui/material";
import products from '../../data/api'
import { Link, useParams } from "react-router-dom";

const StyledCard = styled(Card)({
  backgroundColor:'#f0f0f0',
  transition: "transform 0.15s ease-in-out",
    '&:hover': {
      transform: "scale3d(1.05, 1.05, 1)"
    }
  });

  const StyledTypography = styled(Typography)({
    fontSize:'18px',overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: "2",
    WebkitBoxOrient: "vertical",
    });

const ProductCategory = () => {
  const {category} = useParams();
  return (
    <div>
      <Typography variant="h3">Product Category</Typography>
      <Grid container>
          {products.map((product) => (
        <Grid item md={3} sm={4} xs={12} key={product.id} >
            <Link to={`/products/${category}}`} style={{textDecoration:'none'}}>
            <StyledCard sx={{ maxWidth: 345, m:{xs:2,sm:1}  }}>
            <CardMedia
              component="img"
              height="260"
              image={product.image}
              alt="green iguana"
              sx={{p:1, backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover"}}
              
            />
            <CardContent sx={{height:'80px'}}>
              <StyledTypography gutterBottom variant="h5" component="div">
                {product.title}
              </StyledTypography>
            </CardContent>
            <CardActions sx={{display:'flex', justifyContent:'space-between'}}>
              <Button size="small" >Price {product.price}</Button>
              <Button size="small">Rating {product.rating.rate}</Button>
            </CardActions>
          </StyledCard>
            </Link>
        </Grid>
          ))}
      </Grid>
    </div>
  )
}

export default ProductCategory