import React from "react";
import { Box, Button, CardMedia, Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import styled from "@emotion/styled";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Wrapper = styled(Box)({});

const Title = styled(Typography)({
  textAlign: "center",
});

const Top = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "30px",
});
const TopButton = styled(Button)({});
const TopTexts = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
});
const TopText = styled(Typography)({
  margin: "0 10px",
  textDecoration: "underline",
  cursor: "pointer",
});

const Bottom = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  padding:'30px'
});

const CartInfo = styled(Box)({
  flex: 3,
});

const Product = styled(Box)({
});

const ProductDetail = styled(Box)({
  display:'flex',
  justifyContent:'space-between'
});

const Image = styled(Box)({

  width:'150px',
  height: '150px',
});

const Details = styled(Box)({
  display:'flex',
  flexDirection: ' column' ,
  justifyContent:'space-around',
  padding: '0 30px',
  flex: 2
});

const ProductTitle = styled(Typography)({

})


const PriceDetail = styled(Box)({
  flex: 1,
  display:'flex',
  flexDirection:' column',
  justifyContent:'space-evenly',
  alignItems:'center'
});

const ProductQuantityDetail = styled(Box)({
  display:'flex',
  alignItems: 'center',
});



const ProductQuantity = styled(Typography)({
  padding:'5px 10px',
  fontSize:'1.5rem'
});

const ProductPrice = styled(Typography)({
  fontSize:'2rem'
});

const Hr = styled(`hr`)({
  backgroundColor: '#eee',
  border: 'none',
  height: '2px',
  width:'95%'
});

const CartSummary = styled(Box)({
  flex: 1,
  border:'1px solid grey',
  height:'60vh',
  padding:'10px',
  borderRadius:'8px'
});

const SummaryItem = styled(Box)({
  display:'flex',
  justifyContent:'space-between',
  margin:'30px 0'
})


const Cart = () => {
  return (
    <>
      <Wrapper>
        <Title variant="h4"> Your Cart</Title>
        <Top>
          <TopButton variant="outlined">Continue Shopping</TopButton>
          <TopTexts>
            <TopText>Shopping Bag (2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton variant="contained">Checkout Now</TopButton>
        </Top>
        <Bottom>
          <CartInfo>
            <Product>
              <ProductDetail>
              <Image
                component="img"
                alt="The house from the offer."
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
              />
                <Details>
                <ProductTitle variant="subtitle1"><b>Title:</b></ProductTitle>
                <ProductTitle variant="subtitle1"><b>ID:</b></ProductTitle>
                <ProductTitle variant="subtitle1"><b>Color:</b></ProductTitle>
                <ProductTitle variant="subtitle1"><b>Size:</b></ProductTitle>
                </Details>
                <PriceDetail>
                  <ProductQuantityDetail>
                    <RemoveIcon />
                      <ProductQuantity>2</ProductQuantity>
                    <AddIcon />
                  </ProductQuantityDetail>
                  <ProductPrice>$30</ProductPrice>
                </PriceDetail>
              </ProductDetail>
              <Hr/>

              <ProductDetail>
              <Image
                component="img"
                alt="The house from the offer."
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
              />
                <Details>
                <ProductTitle variant="subtitle1"><b>Title:</b></ProductTitle>
                <ProductTitle variant="subtitle1"><b>ID:</b></ProductTitle>
                <ProductTitle variant="subtitle1"><b>Color:</b></ProductTitle>
                <ProductTitle variant="subtitle1"><b>Size:</b></ProductTitle>
                </Details>
                <PriceDetail>
                  <ProductQuantityDetail>
                    <RemoveIcon />
                      <ProductQuantity>2</ProductQuantity>
                    <AddIcon />
                  </ProductQuantityDetail>
                  <ProductPrice>$30</ProductPrice>
                </PriceDetail>
              </ProductDetail>

              <Hr/>

              <ProductDetail>
              <Image
                component="img"
                alt="The house from the offer."
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
              />
                <Details>
                <ProductTitle variant="subtitle1"><b>Title:</b></ProductTitle>
                <ProductTitle variant="subtitle1"><b>ID:</b></ProductTitle>
                <ProductTitle variant="subtitle1"><b>Color:</b></ProductTitle>
                <ProductTitle variant="subtitle1"><b>Size:</b></ProductTitle>
                </Details>
                <PriceDetail>
                  <ProductQuantityDetail>
                    <RemoveIcon />
                      <ProductQuantity>2</ProductQuantity>
                    <AddIcon />
                  </ProductQuantityDetail>
                  <ProductPrice>$30</ProductPrice>
                </PriceDetail>
              </ProductDetail>
            </Product>
            
          </CartInfo>
          <CartSummary>
            <Typography variant='h5' sx={{textAlign:'center'}}>Order Summary</Typography>
            <SummaryItem>
              <Typography variant='subtitle2'>SubTotal:</Typography>
              <Typography variant='subtitle1'>$45</Typography>
            </SummaryItem>
            <SummaryItem>
              <Typography variant='subtitle2'>Shipping Price:</Typography>
              <Typography variant='subtitle1'>$15</Typography>
            </SummaryItem>
            <SummaryItem>
              <Typography variant='subtitle2'>Discount:</Typography>
              <Typography variant='subtitle1'>$10</Typography>
            </SummaryItem>

            <SummaryItem>
              <Typography variant='h5'>Total:</Typography>
              <Typography variant='h5'>$450</Typography>
            </SummaryItem>
          <Button variant="contained">Checkout Now</Button>
          </CartSummary>
        </Bottom>
      </Wrapper>
    </>
  );
};

export default Cart;
