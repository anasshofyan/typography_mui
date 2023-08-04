import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: (defaultTypography) => ({
    h1: {
      fontSize: "53px",
      fontStyle: "normal",
      fontWeight: defaultTypography.fontWeight || 400,
      lineHeight: defaultTypography.lineHeight || "140%",
    },
    h2: {
      fontSize: "43px",
      fontStyle: "normal",
      fontWeight: defaultTypography.fontWeight || 400,
      lineHeight: defaultTypography.lineHeight || "140%",
    },
    h3: {
      fontSize: "34px",
      fontStyle: "normal",
      fontWeight: defaultTypography.fontWeight || 400,
      lineHeight: defaultTypography.lineHeight || "140%",
    },
    h4: {
      fontSize: "27px",
      fontStyle: "normal",
      fontWeight: defaultTypography.fontWeight || 400,
      lineHeight: defaultTypography.lineHeight || "140%",
    },
    h5: {
      fontSize: "22px",
      fontStyle: "normal",
      fontWeight: defaultTypography.fontWeight || 400,
      lineHeight: defaultTypography.lineHeight || "140%",
    },
    h6: {
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: defaultTypography.fontWeight || 400,
      lineHeight: defaultTypography.lineHeight || "140%",
    },
    body1: {
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: defaultTypography.fontWeight || 400,
      lineHeight: defaultTypography.lineHeight || "140%",
    },
    body2: {
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: defaultTypography.fontWeight || 400,
      lineHeight: defaultTypography.lineHeight || "140%",
    },
    body3: {
      fontSize: "13px",
      fontStyle: "normal",
      fontWeight: defaultTypography.fontWeight || 400,
      lineHeight: defaultTypography.lineHeight || "140%",
    },
    body4: {
      fontSize: "10px",
      fontStyle: "normal",
      fontWeight: defaultTypography.fontWeight || 400,
      lineHeight: defaultTypography.lineHeight || "140%",
    },
    p1: {
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: defaultTypography.fontWeight || 400,
      lineHeight: defaultTypography.lineHeight || "140%",
      letterSpacing: "0.32px",
    },
    p2: {
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: defaultTypography.fontWeight || 400,
      lineHeight: defaultTypography.lineHeight || "140%",
      letterSpacing: "0.28px",
    },
    p3: {
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: defaultTypography.fontWeight || 400,
      lineHeight: defaultTypography.lineHeight || "140%",
      letterSpacing: "0.28px",
    },
    overline: {
      fontSize: "10px",
      fontStyle: "normal",
      fontWeight: defaultTypography.fontWeight || 400,
      lineHeight: defaultTypography.lineHeight || "140%",
      letterSpacing: "0.28px",
      textTransform: "uppercase",
    },
  }),
  palette: {
    //General Colors
    g: {
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
      green: {
        900: "#1B5E20", // Darkest shade
        800: "#2E7D32",
        700: "#3F9A45",
        600: "#51B759",
        500: "#51B759",
        400: "#51B759",
        300: "#51B759",
        200: "#51B759",
        100: "#51B759",
      },
      yellow: {
        900: "#F57F17", // Darkest shade
        800: "#F9A825",
        700: "#FBC02D",
        600: "#FDD835",
        500: "#FFEB3B",
        400: "#FFEE58",
        300: "#FFEE58",
        200: "#FFF59D",
        100: "#FFF9C4",
        50: "#FFFDE7",
      },
      red: {
        900: "#B71C1C", // Darkest shade
        800: "#C62828",
        700: "#D32F2F",
        600: "#E53935 ",
        500: "#F44336",
        400: "#EF5350",
        300: "#E57373",
        200: "#EF9A9A",
        100: "#FFCDD2",
        50: "#FFEBEE",
      },
      orange: {
        900: "#E65100", // Darkest shade
        800: "#EF6C00",
        700: "#F57C00",
        600: "#FB8C00",
        500: "#FF9800",
        400: "#FFA726",
        300: "#FFB74D",
        200: "#FFCC80",
        100: "#FFE0B2",
        50: "#FFF3E0",
      },
      purple: {
        900: "#4A148C", // Darkest shade
        800: "#6A1B9A",
        700: "#7B1FA2",
        600: "#8E24AA",
        500: "#9C27B0",
        400: "#AB47BC",
        300: "#BA68C8",
        200: "#CE93D8",
        100: "#E1BEE7",
        50: "#F3E5F5",
      },
      cyan: {
        900: "#006064", // Darkest shade
        800: "#00838F",
        700: "#0097A7",
        600: "#00ACC1",
        500: "#00BCD4",
        400: "#26C6DA",
        300: "#4DD0E1",
        200: "#80DEEA",
        100: "#B2EBF2",
        50: "#E0F7FA",
      },
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
    // PHB Colors
    phb: {
      primary: {
        900: "#22290B", // Darkest shade
        800: "#56681C",
        700: "#789127",
        600: "#9ABB32",
        500: "#ACD038",
        400: "#BCD95F",
        300: "#CDE287",
        200: "#DDECAF",
        100: "#EEF5D7",
        50: "#F6FAEB",
      },
      secondary: {
        900: "#396201", // Darkest shade
        800: "#497702",
        700: "#609404",
        600: "#78B105",
        500: "#93CE08",
        400: "#B6E13E",
        300: "#CFF065",
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
