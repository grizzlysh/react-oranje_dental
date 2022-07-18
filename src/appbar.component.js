import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

const AppBarComponent = ({ menus }) => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
    <Container sx={{ position: "sticky", top: 0, zIndex: 10 }}>
      <Box 
      py     = {1}
      zIndex = {2}
      my     = {2}
      mx     = {5}
      sx     = {{position: 'relative'}}>
      <AppBar
        position="sticky"
        color="transparent"
        sx={{border: "2pt", backdropFilter:"blur(20px)"}}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ 
              display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              noWrap
              variant   = "h6"
              component = "a"
              href      = "/"
              sx        = {{
                mr            : 2,
                display       : { xs: 'none', md: 'flex' },
                fontFamily    : 'monospace',
                fontWeight    : 700,
                letterSpacing : '.3rem',
                color         : 'inherit',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size          = "large"
                aria-label    = "account of current user"
                aria-controls = "menu-appbar"
                aria-haspopup = "true"
                onClick       = {handleOpenNavMenu}
                color         = "inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical  : 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical  : 'top',
                  horizontal: 'left',
                }}
                open    = {Boolean(anchorElNav)}
                onClose = {handleCloseNavMenu}
                sx      = {{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {menus.map((menu) => (
                  <MenuItem key={menu} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{menu}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              noWrap
              variant   = "h5"
              component = "a"
              href      = ""
              sx        = {{
                mr            : 2,
                display       : { xs: 'flex', md: 'none' },
                flexGrow      : 1,
                fontFamily    : 'monospace',
                fontWeight    : 700,
                letterSpacing : '.3rem',
                color         : 'inherit',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {menus.map((menu) => (
                <Button
                  key     = {menu}
                  onClick = {handleCloseNavMenu}
                  sx      = {{ my: 2, color: 'black', display: 'block' }}
                >
                  {menu}
                </Button>
              ))}
            </Box>

          </Toolbar>
        </Container>
      </AppBar>
      </Box>
      </Container>
    </>
  );
};
export default AppBarComponent;