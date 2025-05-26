import { Typography, Container, Box, Paper, useTheme, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import BrushIcon from '@mui/icons-material/Brush';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
// import { PALETTE } from '../../config/theme.config';
// import { ProjectsSection } from '../projects/projects-section';
// import ContactUs from '../contact-us/contact-us';

const HeroSection = styled(Box)(({ theme }) => ({
  minHeight: '90vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  padding: theme.spacing(4),
  background: 'linear-gradient(135deg, #232526 0%, #0f2027 100%)',
  position: 'relative',
  overflow: 'hidden',
  '&:before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0.2) 100%)',
    zIndex: 0,
    pointerEvents: 'none',
  },
  '& > *': {
    position: 'relative',
    zIndex: 1,
  },
}));

const ExpertiseCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: '100%',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-10px)',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
  },
  minHeight: '300px',
}));

const expertise = [
  {
    icon: <CodeIcon sx={{ fontSize: 48, color: '#00C47C', mb: 2 }} />,
    title: 'Full-Stack Development',
    description: 'Expert in modern web technologies, building scalable applications with React, Node.js, and cloud services.'
  },
  {
    icon: <StorageIcon sx={{ fontSize: 48, color: '#00C47C', mb: 2 }} />,
    title: 'Cloud Architecture',
    description: 'Designing and implementing robust cloud solutions using AWS, Azure, and Google Cloud Platform.'
  },
  {
    icon: <BrushIcon sx={{ fontSize: 48, color: '#00C47C', mb: 2 }} />,
    title: 'UI/UX Design',
    description: 'Creating intuitive and beautiful user interfaces that enhance user experience and engagement.'
  },
  {
    icon: <SecurityIcon sx={{ fontSize: 48, color: '#00C47C', mb: 2 }} />,
    title: 'Security & Performance',
    description: 'Implementing best practices for security, optimization, and high-performance applications.'
  },
  {
    icon: <SpeedIcon sx={{ fontSize: 48, color: '#00C47C', mb: 2 }} />,
    title: 'Agile Development',
    description: 'Following agile methodologies to deliver high-quality software with rapid iteration cycles.'
  },
  {
    icon: <PhoneIphoneIcon sx={{ fontSize: 48, color: '#00C47C', mb: 2 }} />,
    title: 'Mobile Development',
    description: 'Building cross-platform mobile applications using Flutter and Dart, delivering native-like experiences.'
  }
];

const Home = () => {
  const theme = useTheme();

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <HeroSection id="home">
        <Container maxWidth="md">
          <Typography 
            variant="h1" 
            component="h1" 
            gutterBottom 
            sx={{ 
              fontWeight: 800, 
              color: '#fff',
              fontSize: { xs: '2.5rem', md: '4rem' },
              mb: 3,
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
            }}
          >
            Anehan Tech
          </Typography>
          <Typography 
            variant="h4" 
            sx={{ 
              color: '#00C47C', 
              marginBottom: 4,
              fontWeight: 500,
              fontSize: { xs: '1.5rem', md: '2rem' }
            }}
          >
            Crafting Digital Excellence
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              color: 'rgba(255,255,255,0.8)', 
              marginBottom: 4,
              maxWidth: '800px',
              mx: 'auto',
              lineHeight: 1.6
            }}
          >
            We are a team of passionate developers and designers dedicated to building innovative software solutions. 
            From concept to deployment, we transform ideas into powerful digital experiences.
          </Typography>
          <Button 
            variant="contained" 
            size="large"
            onClick={scrollToProjects}
            sx={{ 
              backgroundColor: '#00C47C',
              color: '#fff',
              fontWeight: 600,
              px: 4,
              py: 1.5,
              '&:hover': {
                backgroundColor: '#00a366',
              }
            }}
          >
            View Our Work
          </Button>
        </Container>
      </HeroSection>

      <Box sx={{ background: '#232526', py: 10 }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h3" 
            component="h2" 
            gutterBottom 
            textAlign="center" 
            sx={{ 
              fontWeight: 700, 
              mb: 6, 
              color: '#fff',
              fontSize: { xs: '2rem', md: '2.5rem' }
            }}
          >
            Our Expertise
          </Typography>
          <Box
            display="flex"
            flexWrap="wrap"
            gap={theme.spacing(4)}
            justifyContent="center"
            alignItems="stretch"
          >
            {expertise.map((item) => (
              <Box
                key={item.title}
                sx={{
                  flexGrow: 1,
                  flexShrink: 1,
                  flexBasis: {
                    xs: '100%',
                    sm: `calc((100% - ${theme.spacing(4)}) / 2)`,
                    md: `calc((100% - 2 * ${theme.spacing(4)}) / 3)`,
                  },
                  minWidth: '280px',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <ExpertiseCard>
                  <Box flexGrow={1}>
                    {item.icon}
                    <Typography 
                      variant="h5" 
                      component="h3" 
                      gutterBottom 
                      sx={{ 
                        mt: 2, 
                        fontWeight: 600, 
                        color: '#fff',
                        mb: 2
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Box>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: 'rgba(255,255,255,0.7)',
                      lineHeight: 1.6
                    }}
                  >
                    {item.description}
                  </Typography>
                </ExpertiseCard>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* <ProjectsSection />
      <ContactUs /> */}
    </>
  );
};

export default Home; 