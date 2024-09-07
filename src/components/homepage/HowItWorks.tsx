import React from 'react'
import { Box, Typography, Divider, Grid } from '@mui/material'
import whiteApples from "../../img/apple-leaf-tile-olsenscider.com.jpeg"
import calendar from "../../img/homepageIcons/calendar.png"
import pickupTruck from "../../img/homepageIcons/pickup-truck.png"
import appleCrate from "../../img/homepageIcons/harvest.png"
import gallon from "../../img/homepageIcons/gallon.png"
import { useMediaQuery, useTheme } from '@mui/material';


export default function HowItWorks() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <>
      {/* Background */}
      <Box sx={{
        backgroundImage: `linear-gradient(rgba(160, 35, 34, 0.8), rgba(160, 35, 34, 0.8)), url(${whiteApples})`,
        backgroundRepeat: "repeat",
        backgroundSize: "cover",
        height: "auto",
        width: '100%',
        position: 'relative'
      }}>
        {/* Main */}
        <Grid container spacing={2} sx={{ pt: "3rem", alignItems: "center", justifyContent: "center" }}>
          <Grid item xs={2} md={5}>
            <Divider sx={{ borderColor: "white", borderBottomWidth: 2, ml: "40px", borderStyle: "dashed" }} />
          </Grid>
          <Grid item xs={8} md={2}>
            <Typography variant="h2" sx={{ color: "primary.main", textAlign: "center" }}>
              How It Works
            </Typography>
          </Grid>
          <Grid item xs={2} md={5}>
            <Divider sx={{ borderColor: "white", borderBottomWidth: 2, mr: "40px", borderStyle: "dashed" }} />
          </Grid>


        </Grid>

        <Grid container spacing={2} sx={{ pb: "2rem", pt: "2rem" }}>
          <Grid item xs={6} md={3} sx={{ display: "flex", flexDirection: "column" }}>
            <Box sx={{ width: "100%", justifyContent: "center", display: "flex" }}>
              <Box component={"img"}
                src={calendar}
                sx={{
                  width: isMobile ? "75%" : "50%",
                  height: "auto",
                  pl: "3rem",
                  pr: "3rem"
                }}
              />
            </Box>
            <Typography color={"primary"} variant='h3' sx={{ mt: "1rem", textAlign: "center" }}>You Book A Time</Typography>
            <Typography color={"primary"} variant='body1' sx={{ textAlign: "center", p: "15px", m: "10px" }}>Use our online booking tool to pick your service day(s) and time. It's easy!</Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <Box sx={{ width: "100%", justifyContent: "center", display: "flex" }}>
              <Box component={"img"}
                src={pickupTruck}
                sx={{
                  width: isMobile ? "75%" : "50%",
                  height: "auto",
                  pl: "3rem",
                  pr: "3rem"
                }}
              />
            </Box>
            <Typography color={"primary"} variant='h3' sx={{ mt: "1rem", textAlign: "center" }}>We Show Up</Typography>
            <Typography color={"primary"} variant='body1' sx={{ textAlign: "center", p: "15px", m: "10px" }}>We show up to your home with our proprietary mobile apple pressing system</Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <Box sx={{ width: "100%", justifyContent: "center", display: "flex" }}>
              <Box component={"img"}
                src={appleCrate}
                sx={{
                  width: isMobile ? "75%" : "50%",
                  height: "auto",
                  pl: "3rem",
                  pr: "3rem"
                }}
              />
            </Box>
            <Typography color={"primary"} variant='h3' sx={{ mt: "1rem", textAlign: "center" }}>We Process Your Apples</Typography>
            <Typography color={"primary"} variant='body1' sx={{ textAlign: "center", p: "15px", m: "10px" }}>We run your pre-sorted apples through our apple press and filter and settle the cider to reduce sediment.</Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <Box sx={{ width: "100%", justifyContent: "center", display: "flex" }}>
              <Box component={"img"}
                src={gallon}
                sx={{
                  width: isMobile ? "75%" : "50%",
                  height: "auto",
                  pl: "3rem",
                  pr: "3rem"
                }}
              />
            </Box>
            <Typography color={"primary"} variant='h3' sx={{ mt: "1rem", textAlign: "center" }}>We Bottle The Cider</Typography>
            <Typography color={"primary"} variant='body1' sx={{ textAlign: "center", p: "15px", m: "10px" }}>We bottle the fresh cider in your desired food-safe containers (or our own bottles for an extra fee).</Typography>
          </Grid>
        </Grid>
      </Box>
    </>

  )
}