// import logo from '/logo.svg';
import logo from '~/assets/images/od-inner.jpeg'
import { Box, Container, Button, Grid, Divider, Typography } from '@mui/material';
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
      <Container maxWidth="xl">
        <Box
          mt = {-25}
          pt = {30}
          pb = {10}
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
            minHeight              : '100vh',
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
          {/* //TODO: change to box to container to adjust display */}
          <Box
            mt         = {5}
            alignItems = "center"
            sx         = {{
              display       : 'flex',
              flexDirection : 'row',
              justifyContent: 'center',
            }}
          >
            <Box
              component    = "img"
              src          = {logo}
              width        = {"30%"}
              p            = {1.2}
              ml           = {25}
              mr           = {2}
              bgcolor      = {"#FFFFFF"}
              borderRadius = {5}
            />
            <Box
              // alignItems = "center"
              ml = {2}
              mr = {25}
              px = {1}
              sx = {{
                display       : 'flex',
                flexDirection : 'column',
                justifyContent: 'center',
              }}
            >
              <Typography variant="h4" mt={2} mb={1} align="left">
                <b>YEAHH</b>
              </Typography>
              <Typography variant="h6" color="text" align="justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
            </Box>
          </Box>
          <Box
            mt         = {5}
            alignItems = "center"
            sx         = {{
              display       : 'flex',
              flexDirection : 'column',
              justifyContent: 'center',
            }}
          >
            <Box
              component    = "img"
              src          = {logo}
              // width        = {"30%"}
              p            = {1.2}
              ml           = {25}
              mr           = {2}
              bgcolor      = {"#FFFFFF"}
              borderRadius = {5}
              width        = "15%"
            />
          </Box>
        </Box>
      </Container>
      <Container maxWidth="xl">
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
      <Container maxWidth="xl">
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
      <Container maxWidth="xl">
        <Box sx={{ bgcolor: 'red', height: '100vh' }} />
      </Container>

    </div>
  );
}

export default App;
