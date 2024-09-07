import React from "react"
import { Box, Grid, Typography } from "@mui/material"
import press from "../../img/apple-press-olsenscider.com.jpg"

export default function PackagesExplained() {
  return (
    <>
      <Box sx={{ backgroundColor: "white" }}>
        {/* Packages Explained */}
        <Typography variant="body1" color={"black"} sx={{ width: "100%", textAlign: "center", fontStyle: "italic", pt: ".5rem" }}>For Cache Value locations in Idaho or Utah locations outside of Cache Valley, please call us (435) 258-7252 for availability</Typography>
        <Typography variant="h2" color={"black"} sx={{ width: "100%", textAlign: "center", pt: "3rem", pb: "2rem" }}>Packages Explained:</Typography>

        <Grid container spacing={2} sx={{ pr: 4 }}>
          <Grid item md={4}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Box component={"img"} src={press} sx={{ width: "40%", height: "auto" }} />
            </Box>
          </Grid>
          <Grid item md={8} sx={{ mt: "2rem", ml: 2 }}>
            <Typography><b>Home Service</b> is best suited for the single-home apple cider enthusiast or apple tree owner unsure how to best use an over-abundant apple harvest. Up to 10 bushels.</Typography>
            <br /><Typography sx={{ pt: "1.5rem" }}><b>Orchard Service</b> is best suited for large scale apple pressing projects. You have more than 10 bushels of apples and pressing them all may take more than one day. Please contact us to discuss availability.</Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}