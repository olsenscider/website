import React from 'react'
import { Paper, Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router';

export default function Footer() {
  const navigate = useNavigate();

  const clickFoodSafety = () => {
    navigate("/FoodSafety")
  }
  return (
    <Paper sx={{ height: "8rem", backgroundColor: "#242523", position: "relative", m: 0, pt: "3rem", alignContent: "center", display: "flex", flexDirection: "row", justifyContent: "center" }}>
      <Typography variant='body1' color={"gray"}>&copy; Copyright 2024 Olsen's Hometown Cider | </Typography>
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
          fontFamily: "Lato"
        }}
        onClick={clickFoodSafety}
      >
        Food Safety
      </Button>
    </Paper>
  )
}