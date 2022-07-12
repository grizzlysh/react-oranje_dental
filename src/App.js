// import logo from '/logo.svg';
import logo from '~/assets/images/logo.svg'
import '~/App.css';
import ResponsiveAppBar from '~/navbar.component'
import { Box, Container } from '@mui/material';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar 
        menus={['Products', 'Pricing', 'Blog']}
      />
      <Container  maxWidth="sm">
        <Box sx={{ bgcolor: 'pink', height: '100vh' }} />
      </Container>
      <Container  maxWidth="sm">
        <Box sx={{ bgcolor: 'blue', height: '100vh' }} />
      </Container>
      <Container  maxWidth="sm">
        <Box sx={{ bgcolor: 'red', height: '100vh' }} />
      </Container>

    </div>
  );
}

export default App;
