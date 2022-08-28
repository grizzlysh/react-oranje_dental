import { Box, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';



const HeaderTextComponent = ({ color, textNumber, textTitle, textDesc }) => {
  return (
    <Container>
      <Box
        p          = {2}
        d
        textAlign  = "center"
        lineHeight = {1}
      >
        <Typography variant = "h1" color = {color} textGradient>
          <b>{textNumber}</b>
        </Typography>
        {textTitle && (
          <Typography variant="h5" mt={2} mb={1}>
            <b>{textTitle}</b>
          </Typography>
        )}
        {textDesc && (
          <Typography variant="h6" color="text">
            {textDesc}
          </Typography>
        )}
      </Box>
    </Container>
  );
}

export default HeaderTextComponent;
