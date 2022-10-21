import { Box } from '@mui/material'
import { Container, Stack } from '@mui/system'
import React from 'react'
import HeroSection from '../../components/hero/HeroSection'
import Categories from '../../components/categories/Categories'
import Products from '../../components/products/Products'
import Newsletter from '../../components/newsletter/Newsletter'

const Home = () => {
  return (
    <Box>
        <HeroSection />
        {/* <Container> */}
            <Stack>
                <Box>
                    <Categories />
                </Box>
                <Box>
                    <Products />
        <Newsletter />
                </Box>

            </Stack>
        {/* </Container> */}
    </Box>
  )
}

export default Home