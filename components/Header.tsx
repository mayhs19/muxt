import * as React from 'react';
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
import { green, pink } from '@mui/material/colors';


const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="sticky" color="inherit">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <Avatar alt="Muxt" src="https://img.freepik.com/free-vector/delivery-box-flying-with-parachute-icon-illustration_430232-112.jpg" />
            &nbsp;Muxt
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="data:image/png;base64,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" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
