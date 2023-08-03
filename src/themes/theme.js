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
});

export default theme;
