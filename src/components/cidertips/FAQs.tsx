import React from "react"
import { Box, Grid, Typography } from "@mui/material";
import FAQCard from "./FAQCard";
import whiteApples from "../../img/apple-leaf-tile-olsenscider.com.jpeg"


export default function FAQ() {
  const faqContent = [
    { id: 1, question: "How much electricity/water will you use?", answer: "Electricity consumption is less than .2 kW-hr per bushel of apples. Water use is about 5-10 gallons per bushel of apples." },
    { id: 2, question: "How long does the process usually take?", answer: "One bushel of apples can be pressed in approximately 30 minutes. Allow 30 minutes for both setup and cleanup as well." },
    { id: 3, question: "How should I store my apple cider?", answer: "Fresh cider can be stored for 3-4 days in the refrigerator before the fermentation process starts. Cider can also be frozen (leave a little bit of airspace in the top for expansion) for several months without a change in flavor." },
    { id: 4, question: "Can you press other kinds of fruit, too?", answer: "Currently we are only pressing apples." },
    { id: 5, question: "I want my apples pressed but don’t want my cider… what are my options?", answer: "There are a few options. You can gift cider to neighbors, friends, and family or Olsen’s Hometown Cider will buy your apples for $10/bushel." },
    { id: 6, question: "Do you handle cleanup and apple solids disposal?", answer: "Yes, we sanitize our equipment after each use." },
  ]

  return (
    <>
      <Box
        sx={{
          backgroundImage: `linear-gradient(rgba(36, 37, 35, 0.3), rgba(36, 37, 35, 0.3)), url(${whiteApples})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "auto",
          minHeight: "350px",
          width: '100%',
          position: 'relative'
        }}>
        <Typography variant="h2" sx={{ textAlign: "center", p: 2 }}>FAQs</Typography>
        <Grid container spacing={2}>
          <Grid item md={6} xs={12}>
            {faqContent
              .filter(faq => faq.id % 2 !== 0)
              .map((faq) => (
                <Grid item md={12} xs={12}>
                  <FAQCard title={faq.question} content={faq.answer} />
                </Grid>
              ))}
          </Grid>
          <Grid item md={6} xs={12}>
            {faqContent
              .filter(faq => faq.id % 2 === 0)
              .map((faq) => (
                <Grid item md={12} xs={12}>
                  <FAQCard title={faq.question} content={faq.answer} />
                </Grid>
              ))}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};