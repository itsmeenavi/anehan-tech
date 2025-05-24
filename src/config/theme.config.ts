import { createTheme } from '@mui/material/styles';

// Define your color palette
export const PALETTE = {
  main: '#75CFB8',      // Main accent
  light: '#BBDFC8',     // Lighter shade or secondary accent
  background: '#F0E5D8', // Page background
  accent: '#FFC478',     // Secondary or contrasting accent
  textPrimary: '#213547', // Dark text for light backgrounds
  textSecondary: '#555', // Lighter text
};

// Create a MUI theme instance
const theme = createTheme({
  palette: {
    primary: {
      main: PALETTE.main,
    },
    secondary: {
      main: PALETTE.accent, // Using accent as secondary
    },
    background: {
      default: PALETTE.background,
      paper: '#FFFFFF', // You might want a different paper color
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
      fontWeight: 500,
    },
    h4: {
      fontSize: '1.75rem',
      fontWeight: 500,
    },
    // Define other typography variants as needed
  },
  // You can also customize components globally here
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none', // Example: disable uppercase buttons
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          // Example: if you want all AppBars to have a specific elevation by default
          // boxShadow: 'none', 
        },
      },
    },
  },
});

export default theme; 