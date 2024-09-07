// theme.js
import "./index.css";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff", // Customize the primary color
      contrastText: "#ffffff", // Customize the text color for primary buttons
    },
    secondary: {
      main: "#ff4081", // Customize the secondary color
      contrastText: "#ffffff", // Customize the text color for secondary buttons
    },
    background: {
      default: "#f4f4f9", // Customize the default background color
      paper: "#ffffff", // Customize the paper background color
    },
    text: {
      primary: "#333333", // Customize the primary text color
      secondary: "#666666", // Customize the secondary text color
    },
  },
  typography: {
    fontFamily:
      '"Architects Daughter", "Itim", "Lato", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "3rem",
      fontWeight: 700,
      fontFamily: "Architects Daughter",
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
      fontFamily: "Architects Daughter",
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 600,
      fontFamily: "Architects Daughter",
    },
    body1: {
      fontSize: "1rem",
      fontFamily: "Lato",
    },
    body2: {
      fontSize: ".5rem",
      fontFamily: "Lato",
    },
  },
});

export default theme;
