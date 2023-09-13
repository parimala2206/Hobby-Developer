import React from 'react'
import {Box,Stack,Typography} from '@mui/material'

const HobbiesVideosData = ({continueData}) => {
  return (
    <Box sx={{ marginTop: { lg: '20px', xs: '20px' } }} p="20px">
    <Typography sx={{ fontSize: { lg: '44px', xs: '25px' } }} fontWeight={700} color="#000" mb="33px">
      Videos related 
    </Typography>
    <Stack sx={{ flexDirection: { lg: 'row' }, gap: { lg: '110px', xs: '0px' } }} justifyContent="flex-start" flexWrap="wrap" alignItems="center">
      {continueData?.slice(0, 9)?.map((item, index) => (
        <a
          key={index}
          className="hobby-video"
          href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
          target="_blank"
          rel="noreferrer"
        >
          <img style={{ borderTopLeftRadius: '20px' }} src={item.video.thumbnails[0].url} alt={item.video.title} />
          <Box>
              <Typography sx={{ fontSize: { lg: '18px', xs: '18px' } }} fontWeight={50} color="#000">
                {item.video.title}
              </Typography>
              <Typography fontSize="25px" color="#000">
                {item.video.channelName}
              </Typography>
            </Box>
        </a>
      ))}
    </Stack>
  </Box>
  )
}

export default HobbiesVideosData