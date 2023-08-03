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
    //General Colors
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

    //CPM Colors
    cpm: {
      primary: {
        900: "#211339", // Darkest shade
        800: "#372160",
        700: "#4D2E87",
        600: "#4D2E87",
        500: "#6F42C1",
        400: "#6F42C1",
        300: "#9A7AD3",
        200: "#B7A0E0",
        100: "#D3C6EC",
        50: "#F0ECF8",
      },
      secondary: {
        900: "#396201", // Darkest shade
        800: "#497702",
        700: "#609404",
        600: "#78B105",
        500: "#78B105",
        400: "#78B105",
        300: "#78B105",
        200: "#E6FA99",
        100: "#F4FCCC",
        50: "#F4FAE6",
      },
      tertiary: {
        900: "#7A3D0A", // Darkest shade
        800: "#935211",
        700: "#B76F1C",
        600: "#DB8F28",
        500: "#DB8F28",
        400: "#FFCB69",
        300: "#FFDA87",
        200: "#FFE9AF",
        100: "#FFF5D7",
        50: "#FFF7EB",
      },
    },
  },
});

export default theme;
