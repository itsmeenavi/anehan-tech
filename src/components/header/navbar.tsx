import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, useTheme, useMediaQuery, IconButton, Drawer, List, ListItem, ListItemText, ListItemButton, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { PALETTE } from '../../config/theme.config';

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const menuItems = [
    { text: 'Home', path: '#home' },
    { text: 'About', path: '#about' },
    { text: 'Projects', path: '#projects' },
    { text: 'Contact Us', path: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    const id = path.replace('#', '');
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const drawer = (
    <Box
      sx={{ width: 250, backgroundColor: PALETTE.light }}
      role="presentation"
      onClick={handleDrawerToggle}
      onKeyDown={handleDrawerToggle}
    >
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton component="a" href={item.path} onClick={e => handleNavClick(e, item.path)}>
              <ListItemText primary={item.text} sx={{ color: theme.palette.text.primary }}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="sticky" sx={{ top: 0, zIndex: theme.zIndex.appBar, backgroundColor: PALETTE.background }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }} component={Link} to="/">
          <img src="/anehan.png" alt="Anehan Tech Logo" style={{ height: '40px', marginRight: '12px' }} />
          <Typography variant="h6" component="div" sx={{ color: PALETTE.textPrimary, fontWeight: 'bold' }}>
            Anehan Tech
          </Typography>
        </Box>

        {isMobile ? (
          <>
            <IconButton
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ color: PALETTE.textPrimary }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
              {drawer}
            </Drawer>
          </>
        ) : (
          <Box>
            {menuItems.map((item) => (
              <Button
                key={item.text}
                sx={{
                  color: PALETTE.textPrimary,
                  fontWeight: 500,
                  marginLeft: theme.spacing(2),
                  padding: theme.spacing(1, 2),
                  backgroundColor: 'transparent',
                  boxShadow: 'none',
                  '&:hover': {
                    backgroundColor: 'transparent',
                    textDecoration: 'underline',
                    fontWeight: 700,
                  },
                }}
                component="a"
                href={item.path}
                onClick={e => handleNavClick(e, item.path)}
              >
                {item.text}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 