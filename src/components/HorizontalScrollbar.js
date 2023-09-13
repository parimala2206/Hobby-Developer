import React from 'react';
import { Box,Typography,Stack } from '@mui/material';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import Icon from '../assets/icons/chores.png'


const HorizontalScrollbar = () => {

  const list = [
    { name: 'general' },
    { name: 'sports_and_outdoors' },
    { name: 'education' },
    { name: 'collection' },
    { name: 'competition' },
    { name: 'observation' },
    ];
  return (
  
     <ScrollMenu >
      {list.map((item) => (
          <Stack
          type="button"
          alignItems="center"
          justifyContent="center"
          className="bodyPart-card"
          sx={{
            backgroundColor: '#fff',
            borderBottomLeftRadius:'20px',
            width:'270px',
            height:'280px',
            cursor: 'pointer',
            gap:'47px'
          }}
          >
        <img src={Icon} alt="gym" style={{width:'120px', height:'120px'}} />
        <Box m="0 40px"
        id="hobbiesCategories"
        >
        <Typography fontSize="20px"  color="#3A1212" >{item.name}</Typography>
        </Box>
     </Stack>
      )
    )}
     </ScrollMenu>
 
  )
}

export default HorizontalScrollbar;