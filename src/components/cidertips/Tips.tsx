import React from "react"
import { Container, List, ListItem, ListItemText, Typography, ListItemIcon, Box } from "@mui/material";
import CircleIcon from '@mui/icons-material/Circle';

export default function Tips() {
  return (
    <>
      <Box sx={{ backgroundColor: "white" }}>
        <Container sx={{
          backgroundColor: "white",
          height: "auto",
          p: "3rem"
        }}
        >
          <Typography variant="h2">Storing fresh apple cider:</Typography>
          <Typography variant="body1" sx={{ pt: "1rem" }}>Fresh cider can be stored for 3-4 days in the refrigerator before the fermentation process starts. Cider can also be frozen (leave a little bit of airspace in the top for expansion) for several months without a change in flavor.</Typography>

          <Typography variant="h2" sx={{ pt: "1rem" }}>Improving your apple cider blend:</Typography>
          <List sx={{ pt: "1rem" }}>
            <ListItem>
              <ListItemIcon>
                <CircleIcon sx={{ color: 'black', fontSize: '10px' }} />
              </ListItemIcon>
              <ListItemText primary="Don’t use contaminated apples (rotten, grounded, etc.)" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CircleIcon sx={{ color: 'black', fontSize: '10px' }} />
              </ListItemIcon>
              <ListItemText primary="Use a mix of apple varieties (a combination of sweet and tart is usually preferred by customers—and neighborhood service is a great way to do this)" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CircleIcon sx={{ color: 'black', fontSize: '10px' }} />
              </ListItemIcon>
              <ListItemText primary="Try different mixes and see what flavor you like best" />
            </ListItem>
          </List>

          <Typography variant="h2" sx={{ pt: "1rem" }}>Enjoying fresh apple cider:</Typography>

          <List sx={{ pt: "1rem" }}>
            <ListItem>
              <ListItemIcon>
                <CircleIcon sx={{ color: 'black', fontSize: '10px' }} />
              </ListItemIcon>
              <ListItemText primary="Share your cider with family and friends—it’s always better together" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CircleIcon sx={{ color: 'black', fontSize: '10px' }} />
              </ListItemIcon>
              <ListItemText primary="Freeze your cider and slowly thaw in the fridge for a slushy treat" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CircleIcon sx={{ color: 'black', fontSize: '10px' }} />
              </ListItemIcon>
              <ListItemText primary="Mull (add spices and heat) your apple cider for a warm treat on cool nights" />
            </ListItem>
          </List>
        </Container>
      </Box>
    </>
  );
};