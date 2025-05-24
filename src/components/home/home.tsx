import { Typography, Container, Box, Paper, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import StorefrontIcon from '@mui/icons-material/Storefront'; // Marketplace
import HandshakeIcon from '@mui/icons-material/Handshake'; // Resource-Sharing
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'; // Fintech
import BarChartIcon from '@mui/icons-material/BarChart'; // AI Analytics
import DevicesIcon from '@mui/icons-material/Devices'; // Custom Dev
import { PALETTE } from '../../config/theme.config'; // Import PALETTE

const HeroSection = styled(Box)(({ theme }) => ({
  minHeight: '60vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  padding: theme.spacing(4),
  backgroundColor: PALETTE.light, // Use PALETTE.light directly
}));

const ServiceCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: '100%',
  width: '100%', // Ensure card takes full width of its parent flex item
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between', // Distribute space for consistent content alignment
  backgroundColor: theme.palette.background.paper, // Explicitly white for cards
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: theme.shadows[10],
  },
  minHeight: '280px', // Ensure a minimum height for consistency
}));

const services = [
  {
    icon: <StorefrontIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />,
    title: 'Agricultural Marketplaces',
    description: 'Custom platforms connecting farmers directly to buyers and retailers, inspired by Benta.'
  },
  {
    icon: <HandshakeIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />,
    title: 'Resource-Sharing SaaS',
    description: 'Tools for equipment rental and resource management, evolving the Renta concept.'
  },
  {
    icon: <AccountBalanceIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />,
    title: 'Agri-Fintech Solutions',
    description: 'Secure platforms for farmer-investor connectivity and funding, like Kontrata.'
  },
  {
    icon: <BarChartIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />,
    title: 'AI-Driven Analytics',
    description: 'Insights for crop yield predictions and supply chain optimization using advanced AI.'
  },
  {
    icon: <DevicesIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />,
    title: 'Custom Agri-Tech Development',
    description: 'Tailored software solutions to meet unique agricultural challenges and opportunities.'
  }
];

const Home = () => {
  const theme = useTheme();

  return (
    <>
      <HeroSection>
        <Container maxWidth="md">
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: theme.palette.text.primary }}>
            Anehan Tech: Engineering the Future of Agriculture
          </Typography>
          <Typography variant="h5" sx={{ color: theme.palette.text.secondary, marginBottom: 3 }}>
            From Field Insights to Digital Solutions, we build software tools for farmers, institutional buyers, and investors, empowering the agricultural value chain.
          </Typography>
          {/* You can add a Call to Action Button here */}
          {/* e.g., <Button variant="contained" color="secondary" size="large">Learn More</Button> */}
        </Container>
      </HeroSection>

      <Container sx={{ py: 5 }} maxWidth={false}>
        <Typography variant="h4" component="h2" gutterBottom textAlign="center" sx={{ fontWeight: 'bold', mb: 5, color: theme.palette.text.primary }}>
          Our Core Services
        </Typography>
        <Box
          display="flex"
          flexWrap="wrap"
          gap={theme.spacing(3)} // Defines the gap between items
          justifyContent="center" // Centers items horizontally, especially the last row
          alignItems="stretch" // Ensures items in a row have the same height
        >
          {services.map((service) => (
            <Box
              key={service.title}
              sx={{
                flexGrow: 1, // Allow items to grow
                flexShrink: 1, // Allow items to shrink
                // Calculate flex-basis to achieve N columns, accounting for gap
                // For N columns and gap G, basis is roughly calc((100% - (N-1)*G) / N)
                flexBasis: {
                  xs: '100%', // 1 column
                  sm: `calc((100% - ${theme.spacing(3)}) / 2)`, // 2 columns
                  md: `calc((100% - 2 * ${theme.spacing(3)}) / 3)`, // 3 columns
                },
                minWidth: '270px',
                display: 'flex',        // To allow ServiceCard to use height: 100%
                flexDirection: 'column', // Stack content vertically in the card wrapper
              }}
            >
              <ServiceCard sx={{ height: '100%' }}> {/* ServiceCard will stretch to fill this Box */}
                <Box flexGrow={1}> {/* This inner Box helps push description to bottom if content varies */}
                  {service.icon}
                  <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 1, fontWeight: 'bold', color: theme.palette.text.primary }}>
                    {service.title}
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                  {service.description}
                </Typography>
              </ServiceCard>
            </Box>
          ))}
        </Box>
      </Container>
    </>
  );
};

export default Home; 