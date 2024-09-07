import React, { useState } from "react"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Collapse,
  Button
} from "@mui/material";

interface FAQCardProps {
  title: string,
  content: string
}

const FAQCard: React.FC<FAQCardProps> = ({ title, content }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Card sx={{ width: "80%", m: "3rem" }}>
        <CardContent>
          <Typography variant="h5" sx={{ fontFamily: "Lato" }}>{title}</Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Button onClick={handleExpandClick}>
            {expanded ? "Collapse" : "Expand"}
          </Button>
          <IconButton
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            sx={{ marginLeft: "auto" }}
          >
            {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>{content}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </>
  )
};

export default FAQCard;
