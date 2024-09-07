import React from "react"
import { Box, Grid, Typography, Container } from "@mui/material"


export default function InfoAndForm() {

  return (
    <>
      <Box sx={{ backgroundColor: "white", height: "100%", pt: "3rem", pb: "2rem" }}>
        <Container>
          <Grid container spacing={2}>
            <Grid item md={5} xs={12}>
              <Typography variant="h2">Contact Info</Typography>
              <Typography variant="body1" sx={{ pt: "1rem" }}><b>Phone: </b>(435) 258-7252</Typography>
              <Typography variant="body1" sx={{ pt: "1rem" }}><b>Email: </b>olsenshometowncider@gmail.com</Typography>
            </Grid>

            <Grid item md={7} xs={12}>
              <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeiRYwH5fqK9HrrQCI8HhFbD0kO0W951xlwbuyETQSdGOC3WQ/viewform?embedded=true"
                width="100%"
                height="1000"
                title="Form"
                style={{
                  border: "none",
                  borderColor: "none"
                }}
              >
                Loading…
              </iframe>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}