// import logo from '/logo.svg';
import logo from '~/assets/images/logo.svg'
import '~/App.css';
import { Box, Container, Button, Grid } from '@mui/material';

import AppBarComponent from '~/appbar.component';
import ReservationComponent from './reservation.component';

function App() {
  return (
    <div className="App">
      <AppBarComponent 
        menus={['Products', 'Pricing', 'Blog']}
      />
      <Container  maxWidth="lg">
        <Box
          mt = {-25}
          sx = {{
            position               : "relative",
            zIndex                 : 2,
            borderBottomRightRadius: 200,
            borderBottomLeftRadius : 200,
            bgcolor                : '#E072A4',
            height                 : '100vh',
          }} />
      </Container>
      <Container  maxWidth="lg">
        <Box
          mt         = {-25}
          pt         = {35}
          px         = {10}
          alignItems = "center"
          sx         = {{
            display                : 'flex',
            flexDirection          : 'column',
            justifyContent         : 'center',
            position               : 'relative',
            zIndex                 : 1,
            borderBottomRightRadius: 200,
            borderBottomLeftRadius : 200,
            // opacity                : '50%',
            bgcolor                : '#FABC2A',
            width                  : 'auto',
            height                 : '100vh',
          }}>
            <Grid
              container
              alignItems     = "center"
              justifyContent = "center"
              direction      = {"column"}
              // p              = {0}
            > 
              {/* <Grid item xs={12} sm={12} md={12} lg={12} xl={12}> */}
              <Grid item>
                <Button variant="contained" sx={{bgcolor: '#3D3B8E'}} >RESERVATION</Button>
              </Grid>
              <Grid item>
                <ReservationComponent />
              </Grid>
            </Grid>
          </Box>
      </Container>
      <Container  maxWidth="lg">
        <Box sx={{ bgcolor: 'blue', height: '100vh' }} />
      </Container>
      <Container  maxWidth="lg">
        <Box sx={{ bgcolor: 'red', height: '100vh' }} />
      </Container>

    </div>
  );
}

export default App;
