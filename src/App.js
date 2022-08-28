// import logo from '/logo.svg';
import logo from '~/assets/images/od-inner.jpeg'
import { Box, Container, Button, Grid, Divider } from '@mui/material';
import '~/App.css';

import AppBarComponent from '~/appbar.component';
import ReservationFormSection from './ReservationForm.section';
import ReservationListSection from './ReservationList.section';

import apiClient from "~/http-common";
import HeaderTextComponent from './components/HeaderText.component';
function App() {
  return (
    <div className="App">
      <AppBarComponent 
        menus={['Products', 'Pricing', 'Blog']}
      />
      <Container  maxWidth="lg">
        <Box
          mt = {-25}
          pt = {30}
          sx = {{
            position               : "relative",
            zIndex                 : 2,
            borderBottomRightRadius: {
              xs: 80,
              sm: 100,
              md: 200
            },
            borderBottomLeftRadius : {
              xs: 80,
              sm: 100,
              md: 200
            },
            bgcolor                : '#E072A4',
            height                 : '100vh',
          }}
        >
          <Grid container item xs={12} lg={9} sx={{ mx: "auto" }}>
            <Grid item xs={12} md={4}>
              <HeaderTextComponent 
                color="#59114D"
                textNumber={"100"}
                textTitle={"Madjidah"}
                textDesc={"somewhere"}
              />
            </Grid>
            <Grid item xs={12} md={4} display="flex">
              <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, mx: 0 }} />
              <HeaderTextComponent 
                color="#59114D"
                textNumber={"100"}
                textTitle={"Madjidah"}
                textDesc={"somewhere"}
              />
            </Grid>
            <Grid item xs={12} md={4} display="flex">
              <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, mx: 0 }} />
              <HeaderTextComponent 
                color="#59114D"
                textNumber={"100"}
                textTitle={"Madjidah"}
                textDesc={"somewhere"}
              />
            </Grid>
          </Grid>
          <Box>
            <img src={logo} width="30%"/>
          </Box>
        </Box>
      </Container>
      <Container  maxWidth="lg">
        <Box
          mt         = {-25}
          pt         = {5}
          px         = {10}
          alignItems = "center"
          sx         = {{
            display                : 'flex',
            flexDirection          : 'column',
            justifyContent         : 'center',
            position               : 'relative',
            bgcolor                : '#FABC2A',
            width                  : 'auto',
            height                 : '100vh',
            zIndex                 : 1,
            borderBottomRightRadius: {
              xs: 80,
              sm: 100,
              md: 200
            },
            borderBottomLeftRadius: {
              xs: 80,
              sm: 100,
              md: 200
            },
            // opacity                : '50%',
          }}>
            <ReservationFormSection />
          </Box>
      </Container>
      <Container  maxWidth="lg">
        <Box 
          mt         = {-25}
          py         = {25}
          alignItems = "center"
          sx         = {{
            display       : 'flex',
            flexDirection : 'column',
            justifyContent: 'center',
            position      : 'relative',
            zIndex        : 0,
            bgcolor       : '#05A8AA',
            width         : 'auto',
            height        : '100vh',
            px            : {
              xs: 1,
              sm: 3,
              md: 10
            },
        }}>
          <ReservationListSection api={apiClient}/>
        </Box>
      </Container>
      <Container  maxWidth="lg">
        <Box sx={{ bgcolor: 'red', height: '100vh' }} />
      </Container>

    </div>
  );
}

export default App;
