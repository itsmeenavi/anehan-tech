// import { Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Navbar from './components/header/navbar';
import Home from './components/home/home';
// import About from './components/about/about';
import TechStack from './components/tech-stack/tech-stack';
import { ProjectsSection } from './components/projects/projects-section';
import Members from './components/members/members';
import ContactUs from './components/contact-us/contact-us';
import theme from './config/theme.config';
import './index.css';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Home />
      <TechStack />
      <ProjectsSection />
      <Members />
      <ContactUs />
    </ThemeProvider>
  );
}

export default App;
