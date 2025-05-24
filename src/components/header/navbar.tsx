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
    { text: 'Home', path: '/' },
    { text: 'About', path: '/about' },
    { text: 'Contact Us', path: '/contact' },
  ];

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
            <ListItemButton component={Link} to={item.path}>
              <ListItemText primary={item.text} sx={{ color: theme.palette.text.primary }}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="sticky" sx={{ top: 0, zIndex: theme.zIndex.appBar, backgroundColor: PALETTE.main }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }} component={Link} to="/">
          <img src="/anehan-logo.png" alt="Anehan Tech Logo" style={{ height: '40px', marginRight: '12px' }} />
          <Typography variant="h6" component="div" sx={{ color: theme.palette.common.white, fontWeight: 'bold' }}>
            Anehan Tech
          </Typography>
        </Box>

        {isMobile ? (
          <>
            <IconButton
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ color: theme.palette.common.white }}
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
                  color: theme.palette.common.white,
                  fontWeight: 500,
                  marginLeft: theme.spacing(2),
                  padding: theme.spacing(1, 2),
                  '&:hover': {
                    backgroundColor: PALETTE.light,
                    color: theme.palette.text.primary,
                  },
                }}
                component={Link}
                to={item.path}
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