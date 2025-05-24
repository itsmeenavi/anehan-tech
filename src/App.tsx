import { Routes, Route } from 'react-router-dom';
import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import Navbar from './components/header/navbar';
import Home from './components/home/home';
import About from './components/about/about';
import ContactUs from './components/contact-us/contact-us';
import theme from './config/theme.config';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Box sx={{ paddingTop: '84px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;
