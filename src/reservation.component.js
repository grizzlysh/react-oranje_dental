import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { Box, Button } from '@mui/material';

import ReservationFormComponent from '~/reservation-form.component';
import { Container } from '@mui/system';

const defaultValues = {
  formFirstName    : "",
  formLastNAme     : "",
  formTotalReserved: "",
  formDate         : "",
  formTime         : ""
};

const ReservationComponent = () => {
  
  const { handleSubmit, reset, setValue, control } = useForm({ defaultValues });
  const [data, setData] = useState(null);

  return (
    
      <form onSubmit={handleSubmit((data) => setData(data))}>
        <Box
          // pt            = {30}
          // px            = {5}
          width          = "auto"
          display        = "flex"
          flexDirection  = 'column'
          alignItems     = {"center"}
          justifyContent = {"center"}
        >
          <ReservationFormComponent control={control} />
          <Container style={{padding: 0}}>
            <Box m={2}>
              <Button variant="contained" fullWidth type="submit">Submit</Button>
            </Box>
          </Container>
        </Box>
        {console.log(data)}
      </form>
  )
}

export default ReservationComponent;