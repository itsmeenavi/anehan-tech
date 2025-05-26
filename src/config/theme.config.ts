import { createTheme } from '@mui/material/styles';

// Define your color palette
export const PALETTE = {
  main: '#00C47C',      // Vibrant green (primary)
  light: '#1DE9B6',     // Lighter green accent
  background: '#000000', // Black background
  accent: '#00C47C',     // Use same green for accent/secondary
  textPrimary: '#FFFFFF', // White text
  textSecondary: '#FFFFFF', // White text for secondary as well
};

// Create a MUI theme instance
const theme = createTheme({
  palette: {
    primary: {
      main: PALETTE.main,
    },
    secondary: {
      main: PALETTE.light, // Lighter green as secondary
    },
    background: {
      default: PALETTE.background,
      paper: '#111111', // Slightly lighter than black for paper
    },
    text: {
      primary: PALETTE.textPrimary,
      secondary: PALETTE.textSecondary,
    },
  },
  typography: {
    fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      color: PALETTE.textPrimary,
    },
    h4: {
      fontSize: '1.75rem',
      fontWeight: 500,
      color: PALETTE.textPrimary,
    },
    body1: {
      color: PALETTE.textPrimary,
    },
    body2: {
      color: PALETTE.textPrimary,
    },
  },
  // You can also customize components globally here
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
          color: PALETTE.textPrimary,
          backgroundColor: PALETTE.main,
          '&:hover': {
            backgroundColor: PALETTE.light,
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: PALETTE.background,
          color: PALETTE.textPrimary,
        },
      },
    },
  },
});

export default theme; 