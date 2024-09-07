import React from "react"
import { Box, Grid, Typography, Card, CardContent, Button } from "@mui/material"
import home from "../../img/servicePageIcons/home.png"
import orchard from "../../img/servicePageIcons/orchard.png"

export default function ServicePackages() {
  return (
    <>
      <Box sx={{ backgroundColor: "white", width: "100%", pb: "2rem" }}>
        {/* Header Text */}
        <Typography variant="h2" color={"black"} sx={{ width: "100%", textAlign: "center", pt: "3rem" }}>Service Packages</Typography>
        <Typography variant="body1" color={"black"} sx={{ width: "100%", textAlign: "center", fontFamily: "Lato", pt: "1rem" }}>For locations within Cache Valley</Typography>
        <Typography variant="body1" color={"black"} sx={{ width: "100%", textAlign: "center", fontStyle: "italic", pt: "2rem" }}>Apple pressing costs include a service fee and a cost per gallon of juice pressed. If you do not have your own containers for juice storage, they can be purchased at an additional cost.</Typography>
        <Typography variant="body1" color={"black"} sx={{ width: "100%", textAlign: "center", fontStyle: "italic", pt: ".5rem" }}>See below for details:</Typography>

        {/* Cards */}
        <Grid container spacing={2} sx={{ pt: "2rem" }}>
          <Grid item md={6} xs={12} sx={{ display: "flex", justifyContent: "center" }}>
            <Card sx={{ width: "80%", display: "flex", justifyContent: "center" }} variant="outlined">
              <CardContent sx={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Box component={"img"} src={home} sx={{ width: "80px", height: "auto" }} />
                <Typography variant="h3" sx={{ textAlign: "center", width: "100%", color: "green", pt: ".5rem" }}>
                  Home Service
                </Typography>
                <Typography variant="body1" sx={{ fontStyle: "italic", pt: ".5rem" }}>Best for single-homes or apple-tree owners</Typography>
                <Typography variant="body1" sx={{ pt: ".5rem" }}><b>Processing Limit:</b> 10 bushels</Typography>
                <Typography variant="body1" sx={{ pt: ".5rem" }}><b>Service Fee:</b> $40</Typography>
                <Typography variant="body1" sx={{ pt: ".5rem" }}><b>Pressing Rate:</b> <span style={{ color: "green" }}>$4.50/gal</span></Typography>
                <Typography variant="body1" sx={{ pt: ".5rem" }}>Provide your own bottles or buy some for $1.75 per gallon jug.</Typography>
                <Button
                  href='https://calendly.com/olsenscider/apple-pressing-service'
                  target='_blank'
                  variant='contained'
                  sx={{
                    backgroundColor: "#A02322",
                    fontFamily: "Lato",
                    color: "#ffffff",
                    '&:hover': { backgroundColor: "#881F1D", color: "#ffffff" },
                    mt: ".5rem"
                  }}>
                  Book Now
                </Button>
              </CardContent>
            </Card>
          </Grid>

          <Grid item md={6} xs={12} sx={{ display: "flex", justifyContent: "center" }}>
            <Card sx={{ width: "80%", display: "flex", justifyContent: "center" }} variant="outlined">
              <CardContent sx={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Box component={"img"} src={orchard} sx={{ width: "90px", height: "auto" }} />
                <Typography variant="h3" sx={{ textAlign: "center", width: "100%", color: "green", pt: ".5rem" }}>Orchard Service</Typography>
                <Typography sx={{ pt: ".5rem", fontStyle: "italic" }}>Large scale projects, 10+ bushels</Typography>
                <Typography sx={{ pt: ".5rem" }}><b>Processing Limit:</b> NONE</Typography>
                <Typography sx={{ pt: ".5rem" }}><b>Service Fee:</b> $60</Typography>
                <Typography sx={{ pt: ".5rem" }}><b>Pressing Rate:</b> <span style={{ color: "green" }}>$4.00/gal</span></Typography>
                <Typography sx={{ pt: ".5rem" }}>Provide your own bottles or buy some for $1.75 per gallon jug.</Typography>
                <Button
                  href='https://calendly.com/olsenscider/apple-pressing-service'
                  target='_blank'
                  variant='contained'
                  sx={{
                    backgroundColor: "#A02322",
                    fontFamily: "Lato",
                    color: "#ffffff",
                    '&:hover': { backgroundColor: "#881F1D", color: "#ffffff" },
                    mt: ".5rem"
                  }}>
                  Book Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}