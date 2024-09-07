import React from 'react'
import { Box, Typography, Grid, Button } from '@mui/material'
import whiteApples from "../../img/apple-leaf-tile-olsenscider.com.jpeg"
import bucket from "../../img/apple-bucket-olsenscider.com.png"
import { useMediaQuery, useTheme } from '@mui/material';
import { useNavigate } from 'react-router';
import { useGlobalState } from '../../GlobalState';


export default function GotApples() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const { setUrl } = useGlobalState();
  const clickLearnMore = () => {
    setUrl('/Services');
    navigate('/Services');
  };

  return (
    <>
      {/* Background */}
      <Box sx={{
        backgroundImage: `linear-gradient(rgba(160, 35, 34, 0.8), rgba(160, 35, 34, 0.8)), url(${whiteApples})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "auto",
        width: '100%',
        position: 'relative'
      }}>
        {/* Text/Buttons */}
        <Grid container spacing={2} sx={{ pb: "1rem", pt: "2rem" }}>
          {!isMobile ?
            <Grid item md={3} xs={12} sx={{ display: "flex", justifyContent: "center", mt: "1rem" }}>
              <Box
                component={"img"}
                src={bucket}
                alt='Bucket of apples'
                sx={{ width: "auto", height: "90%" }}
              />
            </Grid>
            :
            <></>
          }
          <Grid item md={9} xs={12} sx={{ mt: "2rem" }}>
            <Typography variant="h2" sx={{ color: "white", textAlign: "left", width: "100%", ml: 1.5 }}>Got Apples?</Typography>
            <Typography variant="body1" sx={{ color: "white", textAlign: "left", width: "100%", mt: "2rem", ml: 1.5 }}>Your apples shouldn't go to waste. Let us help you turn your apple supply into a delicious autumn treat your whole family can enjoy.</Typography>
            <Button
              onClick={clickLearnMore}
              variant='contained'
              sx={{
                backgroundColor: "#69903C",
                fontFamily: "Lato",
                mb: "1.5rem",
                ml: 1.5,
                mt: "1.5rem",
                '&:hover': {
                  backgroundColor: "#5A7A33",
                  color: "#ffffff"
                }
              }}>
              Learn More
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>

  )
}