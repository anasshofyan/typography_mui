import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: (defaultTypography) => ({
    h1: {
      fontSize: "53px",
      fontStyle: "normal",
      fontWeight: defaultTypography.fontWeight || 400,
      lineHeight: "140%",
    },
    h2: {
      fontSize: "43px",
      fontStyle: "normal",
      fontWeight: defaultTypography.fontWeight || 400,
      lineHeight: "140%",
    },
    h3: {
      fontSize: "34px",
      fontStyle: "normal",
      fontWeight: defaultTypography.fontWeight || 400,
      lineHeight: "140%",
    },
    h4: {
      fontSize: "27px",
      fontStyle: "normal",
      fontWeight: defaultTypography.fontWeight || 400,
      lineHeight: "140%",
    },
    h5: {
      fontSize: "22px",
      fontStyle: "normal",
      fontWeight: defaultTypography.fontWeight || 400,
      lineHeight: "140%",
    },
    h6: {
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: defaultTypography.fontWeight || 400,
      lineHeight: "140%",
    },
    body1: {
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: defaultTypography.fontWeight || 400,
      lineHeight: "140%",
    },
    body2: {
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: defaultTypography.fontWeight || 400,
      lineHeight: "140%",
    },
    body3: {
      fontSize: "13px",
      fontStyle: "normal",
      fontWeight: defaultTypography.fontWeight || 400,
      lineHeight: "140%",
    },
    body4: {
      fontSize: "10px",
      fontStyle: "normal",
      fontWeight: defaultTypography.fontWeight || 400,
      lineHeight: "140%",
    },
    p1: {
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: defaultTypography.fontWeight || 400,
      lineHeight: "140%",
      letterSpacing: "0.32px",
    },
    p2: {
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: defaultTypography.fontWeight || 400,
      lineHeight: "140%",
      letterSpacing: "0.28px",
    },
    p3: {
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: defaultTypography.fontWeight || 400,
      lineHeight: "140%",
      letterSpacing: "0.28px",
    },
    overline: {
      fontSize: "10px",
      fontStyle: "normal",
      fontWeight: defaultTypography.fontWeight || 400,
      lineHeight: "140%",
      letterSpacing: "0.28px",
      textTransform: "uppercase",
    },
  }),
  palette: {
    neutral: {
      900: "#131313", // Darkest shade
      800: "#424242",
      700: "#595959",
      600: "#717171",
      500: "#898989",
      400: "#A0A0A0",
      300: "#B8B8B8",
      200: "#E7E7E7",
      100: "#F5F5F5",
    },
    blue: {
      900: "#0D47A1", // Darkest shade
      800: "#1565C0",
      700: "#1976D2",
      600: "#1E88E5",
      500: "#1E88E5",
      400: "#42A5F5",
      300: "#64B5F6",
      200: "#90CAF9",
      100: "#BBDEFB",
    },
  },
});

export default theme;
