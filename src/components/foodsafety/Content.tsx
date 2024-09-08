import React from "react"
import { Box, Container, Typography } from "@mui/material"

export default function FoodSafetyContent() {
  return (
    <>
      <Box sx={{ backgroundColor: "white" }}>
        <Container sx={{ backgroundColor: "white", height: "auto", pt: "2rem", pb: "2rem" }}>
          <Typography variant="body1"><b>*FOOD SAFEY WARNING: </b>Please note that all cider from our press is raw and unpasteurized. This preserves the natural flavors of the apples.</Typography>
          <br /><Typography variant="body1"><b> The FDA requires the following warning be provided on bottled products:</b></Typography>
          <br /><Typography variant="body1"><b>WARNING:</b> This product has not been pasteurized and therefore may contain harmful bacteria that can cause serious illness in children, the elderly, and persons with weakened immune systems.</Typography>
          <br /><Typography variant="body1">Apple cider product is provided as-is with no warranty of any kind. Please enjoy your cider responsibly and in a timely manner since there are no preservatives or other ingredients added. Olsen’s Hometown Cider is not responsible for any resulting sickness or illness from consuming the cider product.</Typography>
          <br /><Typography variant="body1">In studies on contaminated cider products in Canada, greatest sources of contamination were found to be grounded apples, especially when exposed to livestock, wildlife, or manure for fertilization. Some contamination was introduced by non-municipal well water use and poor apple washing, milling, and pressing practices.</Typography>
          <br /><Typography variant="body1">If you use hand-picked apples (not on the ground) and sort out rotten apples, the major sources of contamination are mitigated. If you culinary water source is municipal, risk of contamination from water is minimal. Olsen's Hometown Cider sanitizes its equipment before and after each pressing service. The majorly reduces risk of contamination. If there is still concern of cider contamination, you may heat your cider to 160 degrees Fhrenheit for at least 15 seconds to pasteurize the fresh cider before consumption.</Typography>
          <br /><Typography variant="body1"><b>Additional food safety resources:</b></Typography>
          <br /><Typography variant="body1">The following article is the most accurate depiction of the entire cider pasteurization scene that I have found in my study:
            https://www.eagletribune.com/news/local_news/for-the-health-of-it-unpasteurized-apple-cider-in-the-fall/article_6b52fc9b-0ae6-51be-aa3d-5bf621b32070.html
          </Typography>
          <br /><Typography variant="body1">The following research paper located the greatest sources of contamination from several cider mills in Canada by testing products at various stages.
            https://meridian.allenpress.com/jfp/article/69/1/137/171437/Potential-Sources-of-Microbial-Contamination-in
          </Typography>
        </Container>
      </Box>
    </>
  )
}