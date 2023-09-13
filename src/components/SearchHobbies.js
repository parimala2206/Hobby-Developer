import React,{ useState } from 'react';
import { Box,Button, Stack, TextField, Typography } from '@mui/material';
import HorizontalScrollbar from '../components/HorizontalScrollbar';
import { hobbyOptions,fetchData } from '../utils/fetchData';


const SearchHobbies = ({setOutput}) => {
  const[search,setSearch]=useState()
  const[category,setCategory]=useState('');
  

      const handleSearch = async() =>{ 
        if(search){
          const hobbiesData = await fetchData('https://api.api-ninjas.com/v1/hobbies?category=' + category ,hobbyOptions)

        setOutput(hobbiesData);
        }
      };
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px" >
      <Typography fontWeight={700} sx={{ fontSize: { lg:'44px', xs:'30px' }}} mb="50px" textAlign="center" >
        Awesome Hobbies You <br/>
        Should Know
      </Typography>
      <Box id="hobbySearch" position="relative" mb="72px">
        <TextField 
        sx={{
              input: {
                  fontWeight: '700',
                  border:'none', 
                  borderRadius:'4px'
              },
          width: { lg:'800px', xs:'350px' },
          backgroundColor: '#fff',
          borderRadius:'40px'
          }}
        height="76px"
        value={search}
        onChange={(e) => {setSearch(e.target.value.toLowerCase())}}
        onChangeCapture={(e) => {setCategory(e.target.value)}}
        placeholder="Search the below mentioned categories"
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
      <Box sx={{ position: 'relative', width:'100%'}} >
        <HorizontalScrollbar />
      </Box>
    </Stack>

  )
}

export default SearchHobbies