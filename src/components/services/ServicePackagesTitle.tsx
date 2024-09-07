import React from 'react'
import { Box, Typography } from '@mui/material'
import orchard from "../../img/apple-orchard-illustration-olsenscider.com.jpeg"


export default function ServicesTitle() {
  return (
    <>
      {/* Background */}
      <Box sx={{
        backgroundImage: `linear-gradient(rgba(36, 37, 35, 0.3), rgba(36, 37, 35, 0.3)), url(${orchard})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "250px",
        width: '100%',
        position: 'relative',
        mt: "61px"
      }}>
        {/* Text/Buttons */}
        <Box sx={{ pt: "3rem" }}>
          <Typography variant="h1" sx={{ color: "white", textAlign: "center", p: 2 }}>Services</Typography>
        </Box>
      </Box>
    </>
  )
}