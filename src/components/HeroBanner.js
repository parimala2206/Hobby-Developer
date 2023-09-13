import React from 'react'
import { Box,stack, Typography,Button } from '@mui/material';
import HeroSlider from '../components/HeroSlider';

const HeroBanner = () => {
  return (
    <Box  sx={{
      mt: { lg: '212px', xs:'70px' },
      ml: {  sm:'50px' }
    }} position="relative"p="20px" >
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Hobby Club
      </Typography>
      <Typography fontWeight={700} sx={{ fontSize: {lg: '44px', xs: '40px'} }} >
        Find, Choose & Learn
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={3} >
        Check out the most fantastic hobbies</Typography>
        <Button variant="contained" color="error" href="#hobbiesCategories" >Explore Hobbies</Button>
        <HeroSlider /> 
    </Box>
  )
}

export default HeroBanner