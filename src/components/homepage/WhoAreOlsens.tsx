import React from 'react'
import { Box, Typography, Grid, Button, Avatar } from '@mui/material'
import orchardWaterColor from "../../img/apple-orchard-watercolor-olsenscider.com.jpeg"
import kylerJess from "../../img/kyler-jess-press-sq-olsenscider.com.jpg"
import { useNavigate } from 'react-router'
import { useGlobalState } from '../../GlobalState'


export default function WhoAreOlsens() {
  const navigate = useNavigate();
  const { setUrl } = useGlobalState();
  const clickLearnMore = () => {
    setUrl('/AboutUs');
    navigate('/AboutUs');
  };

  return (
    <>
      {/* Background */}
      <Box sx={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url(${orchardWaterColor})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "auto",
        width: '100%',
        position: 'relative'
      }}>
        {/* Text/Buttons */}
        <Grid container spacing={2}>
          <Grid item md={12} xs={12} sx={{ width: "100%", justifyContent: "center", display: "flex", mt: "1rem" }}>
            <Avatar src={kylerJess} sx={{ width: 125, height: 125 }} />
          </Grid>
          <Grid item md={12} xs={12}>
            <Typography variant="h2" sx={{ color: "primary", textAlign: "center", width: "100%" }}>Who are the "Olsens" in Olsen's Hometown Cider?</Typography>
            <Typography variant="body1" sx={{ color: "primary", textAlign: "center", width: "100%", mt: 1, p: 2 }}>
              Olsen's Hometown Cider was founded by a husband and wife duo right here in Cache Valley. Their mission is to bring a beloved family tradition to your home.
            </Typography>
          </Grid>
          <Grid item md={12} xs={12} sx={{ width: "100%", justifyContent: "center", display: "flex", mt: "1rem", pb: "2rem" }}>
            <Button
              onClick={clickLearnMore}
              variant='contained'
              sx={{
                backgroundColor: "#69903C",
                fontFamily: "Lato",
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