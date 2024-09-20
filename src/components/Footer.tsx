import React from 'react'
import { Paper, Button, Typography, Grid } from '@mui/material'
import { useNavigate } from 'react-router';
import { useMediaQuery, useTheme } from '@mui/material';

export default function Footer() {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const clickFoodSafety = () => {
    navigate("/FoodSafety")
  };

  const clickIconSources = () => {
    navigate("/IconSources")
  };

  return (
    <Paper sx={{ height: "auto", backgroundColor: "#242523", position: "relative", m: 0, mt: 'auto', pt: "3rem", alignContent: "center", display: "flex", flexDirection: "row", justifyContent: "center" }}>
      <Grid container spacing={2} sx={{ pb: 2, mb: 1 }}>
        <Grid item md={6} xs={12}>
          <Typography variant='body1' color={"gray"} sx={{ textAlign: !isMobile ? "right" : "center" }}>&copy; Copyright 2024 Olsen's Hometown Cider</Typography>
        </Grid>
        <Grid item md={6} xs={12} sx={{ alignContent: "center", display: "flex", justifyContent: !isMobile ? "left" : "center" }}>
          <Button
            variant='text'
            size='small'
            sx={{
              backgroundColor: "#242523",
              color: "gray",
              height: "1rem",
              mt: "5px",
              '&:hover': {
                backgroundColor: "#242523",
                color: "#gray"
              },
              fontFamily: "Lato",
              textDecoration: "underline"
            }}
            onClick={clickFoodSafety}
          >
            Food Safety Page
          </Button>
        </Grid>
        <Grid item md={12} xs={12} sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <Button
            variant='text'
            size='small'
            sx={{
              backgroundColor: "#242523",
              color: "gray",
              height: "1rem",
              pt: "40px",
              '&:hover': {
                backgroundColor: "#242523",
                color: "#gray"
              },
              fontFamily: "Lato",
              fontSize: "11px"
            }}
            onClick={clickIconSources}
          >
            Icon Sources
          </Button>
        </Grid>
      </Grid>

    </Paper>
  )
}