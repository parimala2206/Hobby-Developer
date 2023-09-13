import React from 'react';
import { Box,Typography} from '@mui/material';
import { Link } from 'react-router-dom';


const Hobbies = ({output}) => {
  return (
   <Box  sx={{
    ml: {  sm:'50px' } }}
   >
    <Typography variant="h3" mb="20px" >Showing Results</Typography>
    <Box>
    <Typography className="output-data"><span style={{color: '#FF2625'}}>Hobby : </span> {output.hobby}</Typography>
    <Typography className="output-data" ><span style={{color: '#FF2625'}}>Category : </span> {output.category}</Typography>
    <Typography className="output-data" ><span style={{color: '#FF2625'}}>Link : </span> {output.link}</Typography>
    <Link to="/continue" className="aboutHobby">More About Hobby</Link>
    </Box>
    </Box>
    )
}

export default Hobbies