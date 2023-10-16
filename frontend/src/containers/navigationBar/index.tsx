import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Avatar } from '@mui/material';
import "../../assets/expertaLogo.jpg"


function NavigationBar() {
  return (
    <AppBar position="static" color="transparent">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img alt='xperta' height="50px" src='../src/assets/expertaLogo.jpg'/>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/loggedin/profile"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Xperta
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

            <Button
                href='/profile'
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                Profile
              </Button>
              <Button
                href='/browse'
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                Excercise
              </Button>
              <Button
                href='/workout'
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                Workout
              </Button>
              <Button
                href='/faq'
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                FAQ
              </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavigationBar;