import { Typography, Paper, Button } from '@mui/material';
import React from 'react'

export default function IconPage() {
  return (
    <>
      <Paper sx={{ minHeight: "80vh", pt: "100px", display: "flex", flexDirection: "column" }}>
        <Typography variant='h3' color={'black'} sx={{ textAlign: "left", pl: '2rem', pb: "1rem" }}>Icon Sources</Typography>
        <a style={{ paddingLeft: "2rem" }} href="https://www.flaticon.com/free-icons/pickup-truck" title="pickup truck icons">Pickup truck icons created by Culmbio - Flaticon</a>
        <br /><a style={{ paddingLeft: "2rem" }} href="https://www.flaticon.com/free-icons/gallon" title="gallon icons">Gallon icons created by DinosoftLabs - Flaticon</a>
        <br /><a style={{ paddingLeft: "2rem" }} href="https://www.flaticon.com/free-icons/harvest" title="harvest icons">Harvest icons created by Freepik - Flaticon</a>
        <br /><a style={{ paddingLeft: "2rem" }} href="https://www.flaticon.com/free-icons/calendar" title="calendar icons">Calendar icons created by srip - Flaticon</a>
        <br /><a style={{ paddingLeft: "2rem" }} href="https://www.flaticon.com/free-icons/orchard" title="orchard icons">Orchard icons created by Made by Made Premium - Flaticon</a>
        <br /><a style={{ paddingLeft: "2rem" }} href="https://www.flaticon.com/free-icons/homepage" title="homepage icons">Homepage icons created by Aldo Cervantes - Flaticon</a>

        <Typography variant='h3' color={'black'} sx={{ textAlign: "left", pl: '2rem', pb: "1rem", pt: '2rem' }}>
          Site Built By:
          <Button
            variant='text'
            sx={{
              color: "black",
              fontSize: "1.25rem",
              fontWeight: 600,
              textDecoration: 'underline'
            }}
            href='https://www.instagram.com/spencerking.7?igsh=M2t4MjRkdGNhOTJ3&utm_source=qr'
            target='_blank'
          >
            Spencer King
          </Button>
        </Typography>

      </Paper>
    </>
  );
};