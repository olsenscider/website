import React from "react"
import { Box, Grid, Typography, Link } from "@mui/material"
import { useNavigate } from "react-router"

export default function PrePressChecklist() {
  const navigate = useNavigate();

  const clickLink = () => {
    navigate("/FoodSafety");
  };

  return (
    <>
      <Box sx={{ backgroundColor: "white", p: 2 }}>
        {/* Packages Explained */}
        <Typography variant="h2" color={"black"} sx={{ width: "100%", textAlign: "center", pt: "3rem", pb: "2rem" }}>Pre-Press Checklist:</Typography>

        <Grid container spacing={2} sx={{ pr: 4, ml: 2 }}>
          <Grid item md={1} xs={1}>
            <Typography color={"red"} sx={{ fontSize: "1.5rem", textAlign: "right" }}>&#10004;</Typography>
          </Grid>
          <Grid item md={5} xs={11}>
            <Typography variant="h3">Sorted Apples</Typography>
            <Typography variant="body1" sx={{ pt: "1rem" }}>We will not sort or remove blemished or spoiled apples. Sorting your apples ensures a smooth pressing experience and safe cider product.</Typography>
          </Grid>
          <Grid item md={1} xs={1}>
            <Typography color={"red"} sx={{ fontSize: "1.5rem", textAlign: "right" }}>&#10004;</Typography>
          </Grid>
          <Grid item md={5} xs={11}>
            <Typography variant="h3">Water Access</Typography>
            <Typography variant="body1" sx={{ pt: "1rem" }}>To press apples we need a water source preferably from a 3/4" culinary water spigot (normal garden hose size).</Typography>
          </Grid>
          <Grid item md={1} xs={1}>
            <Typography color={"red"} sx={{ fontSize: "1.5rem", textAlign: "right" }}>&#10004;</Typography>
          </Grid>
          <Grid item md={5} xs={11}>
            <Typography variant="h3">Electrical Access</Typography>
            <Typography variant="body1" sx={{ pt: "1rem" }}>Grounded, standard outlet. Outdoor outlet is best for your convenience, but not required.</Typography>
          </Grid>
          <Grid item md={1} xs={1}>
            <Typography color={"red"} sx={{ fontSize: "1.5rem", textAlign: "right" }}>&#10004;</Typography>
          </Grid>
          <Grid item md={5} xs={11}>
            <Typography variant="h3">Food-safe Containers</Typography>
            <Typography variant="body1" sx={{ pt: "1rem" }}>We recommend 1-gallon drink containers (milk jugs, etc) to store your cider in. You can also purchase these from us, new, for $1.75 each.</Typography>
          </Grid>
        </Grid>
        <Typography color="black" sx={{ textAlign: "center", pb: "2rem", pt: "1rem" }} variant="body1">
          <span style={{ color: "red", paddingRight: "10px", fontSize: "1.5rem" }}>&#9888;</span>
          Please note that all cider from our press us <b><u>unpasteurized.</u></b> For more information, check out our
          <Link onClick={clickLink}><span style={{ color: "red", cursor: "pointer" }}> Food Safety Page.</span></Link>
        </Typography>
      </Box>
    </>
  )
}