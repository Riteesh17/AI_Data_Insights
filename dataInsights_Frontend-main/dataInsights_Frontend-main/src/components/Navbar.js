import {
    Menu as MenuIcon,
} from '@mui/icons-material';
import {
    AppBar,
    Box,
    Button,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
    Typography,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [mobileMenuAnchorEl, setMobileMenuAnchorEl] = React.useState(null);
  const [isAuthenticated, setIsAuthenticated] = React.useState(!!localStorage.getItem('token'));
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();
  const location = useLocation();

  const handleMobileMenuOpen = (event) => {
    setMobileMenuAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchorEl(null);
  };

  const menuItems = [];

  const handleNavigation = (path) => {
    navigate(path);
    handleMobileMenuClose();
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    handleMobileMenuClose();
    navigate('/login');
  };

  React.useEffect(() => {
    const onStorage = () => setIsAuthenticated(!!localStorage.getItem('token'));
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  React.useEffect(() => {
    setIsAuthenticated(!!localStorage.getItem('token'));
  }, [location.pathname]);

  return (
    <AppBar position="sticky" elevation={2} sx={{ backgroundColor: '#ffffff', color: '#000000' }}>
      <Toolbar sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, cursor: 'pointer', fontWeight: 700, letterSpacing: '.2px' }}
          onClick={() => navigate('/')}
        >
          Data Insights
        </Typography>

        {isMobile ? (
          <>
            <IconButton
              color="inherit"
              aria-label="menu"
              onClick={handleMobileMenuOpen}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={mobileMenuAnchorEl}
              open={Boolean(mobileMenuAnchorEl)}
              onClose={handleMobileMenuClose}
            >
              {isAuthenticated ? (
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              ) : (
                <>
                  <MenuItem onClick={() => handleNavigation('/login')}>Login</MenuItem>
                  <MenuItem onClick={() => handleNavigation('/register')}>Sign Up</MenuItem>
                </>
              )}
            </Menu>
          </>
        ) : (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {isAuthenticated ? (
              <Button variant="outlined" color="inherit" onClick={handleLogout}>
                Logout
              </Button>
            ) : (
              <>
                <Button color="inherit" onClick={() => handleNavigation('/login')}>
                  Login
                </Button>
                <Button variant="outlined" color="inherit" onClick={() => handleNavigation('/register')}>
                  Sign Up
                </Button>
              </>
            )}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 