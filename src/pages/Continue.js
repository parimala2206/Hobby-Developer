import React,{useState} from 'react';
import { Box } from '@mui/material';
import SearchHobbyVideos from '../components/SearchHobbyVideos';
import HobbiesVideosData from '../components/HobbiesVideosData';

const Continue = () => {
  const[continueData,setContinueData]=useState([]);
  return (
   <Box>
    <SearchHobbyVideos setContinueData={setContinueData}/>
    <HobbiesVideosData 
    continueData={continueData}
    setContinueData={setContinueData}
    />
   </Box>
  )
}

export default Continue