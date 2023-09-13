import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png'

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
      <Stack sx={{ alignItems: 'center' }} mt="20px" flexWrap="wrap">
      <img src={Logo} alt="logo" style={{ width: '50px', height: '50px', marginTop:'10px' }} />
      <span style={{ fontSize: '15px'}} >Have Fun</span> 
    </Stack>
    <Typography sx={{ fontSize: '10px'}} textAlign="center" pb="10px">Made with ❤️</Typography>
  </Box>
);

export default Footer;