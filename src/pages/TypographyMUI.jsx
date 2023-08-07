import { ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import theme from "../../src/themes/theme";

function TypographyMUI() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <div style={style}>
          <div>
            <Typography variant="h1">h1. Heading</Typography>
            <hr />
            <Typography variant="h2">h2. Heading</Typography>
            <Typography variant="h3">h3. Heading</Typography>
            <Typography variant="h4">h4. Heading</Typography>
            <Typography variant="h5">h5. Heading</Typography>
            <Typography variant="h6">h6. Heading</Typography>
            <Typography variant="body1">body1. Body</Typography>
            <br />
            <Typography variant="body2">body2. Body</Typography>
            <br />
            <Typography variant="body3">body3. Body</Typography>
            <br />
            <Typography variant="body4">body4. Body</Typography>
            <br />
            <Typography variant="p1">p1. Paragraph</Typography>
            <br />
            <Typography variant="p2">p2. Paragraph</Typography>
            <br />
            <Typography variant="p3">p3. Paragraph</Typography>
            <br />
            <Typography variant="overline">Overline</Typography>
          </div>
          <hr />
          <Card
            variant="outlined"
            sx={{
              backgroundColor: theme.palette.g.neutral[100],
              padding: "18px",
            }}
          >
            <Typography variant="h1">h1. Heading</Typography>
          </Card>
          <hr />
          <Card
            variant="outlined"
            sx={{
              backgroundColor: theme.palette.cpm.primary[700],
              padding: "18px",
            }}
          >
            <Typography variant="h1">h1. Heading</Typography>
          </Card>
          <hr />
          <Tooltip title="Delete">
            <Button variant="contained" style={{ borderRadius: "100px" }}>
              Hello World
            </Button>
          </Tooltip>
        </div>
      </ThemeProvider>
    </>
  );
}

export default TypographyMUI;
