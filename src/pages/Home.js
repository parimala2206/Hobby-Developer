import React,{useState} from 'react';
import { Box } from '@mui/material';

import HeroBanner from '../components/HeroBanner';
import SearchHobbies from '../components/SearchHobbies';
import Hobbies from '../components/Hobbies';



const Home = () => {
  const[output,setOutput]=useState([]);
  return (
   <Box>
    <HeroBanner />
    <SearchHobbies setOutput={setOutput} />
    <Hobbies 
      output={output}
      setOutput={setOutput}
    />
   </Box>
  )
}

export default Home