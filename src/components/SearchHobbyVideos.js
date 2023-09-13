import React ,{useState }from 'react'
import { Box,Button, TextField,Stack,Typography } from '@mui/material';
import { youtubeOptions,fetchData } from '../utils/fetchData'

const HobbyVideos = ({setContinueData}) => {
  const[search,setSearch]=useState()
  const[word,setWord]=useState('');
  const handleSearch = async() =>{

      const videosData = await fetchData(`https://youtube-search-and-download.p.rapidapi.com/search?query=${word}` ,youtubeOptions)

     setContinueData(videosData.contents);
  };
  
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" >
    <Typography fontWeight={700} sx={{ fontSize: { lg:'44px', xs:'30px' }}} mb="50px" textAlign="center" >
        Welcome to the visual learning<br/>
        of the hobbies
    </Typography> 
    <Box position="relative">
    <TextField 
       sx={{
      input: {
          fontWeight: '700',
          border:'none', 
          borderRadius:'4px'
      },
  width: { lg:'800px', xs:'350px' },
  backgroundColor: '#fff',
  borderRadius:'40px'}}
    height="76px"
    value={search}
    onChange={(e) => {setSearch(e.target.value.toLowerCase())}}
    onChangeCapture={(e) => {setWord(e.target.value)}}
    placeholder="Search the hobby"
    type="text" 
    />
  <Button className="search-btn" 
    sx={{
      bgcolor:'#FF2625',
      color:'#fff',
      textTransform:'none',
      width:{lg: '175px',xs:'80px'},
      fontSize:{lg:'20px',xs:'14px'},
      height:'56px',
      position:'absolute',
      right:'0'
    }} 
    onClick={handleSearch}
   >Search 
  </Button>
  </Box>
  </Stack>
  )
}

export default HobbyVideos