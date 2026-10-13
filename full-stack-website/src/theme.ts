import { createTheme } from "@mui/material/styles";

const brandRed = "#E53935";
const brandRedDark = "#B71C1C";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: brandRed,
      dark: brandRedDark,
      contrastText: "#fff",
    },
    secondary: {
      main: "#111111",
      contrastText: "#fff",
    },
    error: {
      main: brandRed,
    },
    background: {
      default: "#0b0b0b",
      paper: "#ffffff",
    },
    text: {
      primary: "#1a1a1a",
      secondary: "#5f5f5f",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontFamily: '"Bubblegum Sans", cursive', fontWeight: 400 },
    h2: { fontFamily: '"Bubblegum Sans", cursive', fontWeight: 400 },
    h3: { fontFamily: '"Bubblegum Sans", cursive', fontWeight: 400 },
    h4: { fontFamily: '"Bubblegum Sans", cursive', fontWeight: 400 },
    h5: { fontFamily: '"Bubblegum Sans", cursive', fontWeight: 400 },
    button: { textTransform: "none", fontWeight: 700 },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#0b0b0b",
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 10,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        rounded: {
          borderRadius: 12,
        },
      },
    },
    MuiCard: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: "rgba(255,255,255,0.72)",
          fontWeight: 700,
          "&.Mui-selected": {
            color: "#fff",
          },
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
        fullWidth: true,
      },
    },
  },
});

export const glassPanelSx = {
  bgcolor: "rgba(8, 8, 8, 0.58)",
  backdropFilter: "blur(12px)",
  color: "common.white",
  overflow: "auto",
};

export const darkTextFieldSx = {
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "rgba(255,255,255,0.55)",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "common.white",
  },
  "& .MuiFormLabel-root": {
    color: "rgba(255,255,255,0.8)",
  },
  "& .MuiInputBase-input": {
    color: "common.white",
  },
  "& label.Mui-focused": {
    color: "common.white",
  },
  "& .MuiOutlinedInput-root.Mui-focused fieldset": {
    borderColor: "common.white",
  },
  "& .MuiSelect-icon": {
    color: "common.white",
  },
};

export default theme;
