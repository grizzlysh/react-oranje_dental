import React, { useState } from 'react'
import { Container } from '@mui/system';
import { useMutation } from "react-query";
import { useForm, Controller } from "react-hook-form";
import { Box, Button, Grid, TextField, Typography } from '@mui/material';

import apiClient from "~/http-common";
import ReservationFormComponent from '~/ReservationForm.component';

const defaultValues = {
  formFirstName    : "",
  formLastName     : "",
  formTotalReserved: "",
  formDate         : "",
  formTime         : ""
};

const ReservationFormSection = () => {
  
  const { handleSubmit, reset, setValue, control } = useForm({ defaultValues });
  // const [data, setData]                            = useState(null);
  const [formData, setFormData]                    = useState(defaultValues);
  const [postResult, setPostResult]                = useState(null);
  const formatResponse                             = (res) => {
    return JSON.stringify(res, null, 2);
  };

  const { isLoading, mutate: insertReservation } = useMutation(
    async () => {
      console.log(formData);
      return await apiClient.post(`/api/reservation`, {
        first_name    : formData.formFirstName,
        last_name     : formData.formLastName,
        reserved_total: formData.formTotalReserved,
        reserved_date : formData.formDate,
        reserved_time : formData.formTime,
      });
    },
    {
      onSuccess: async (res) => {
        const result = {
          status : res.status + "-" + res.statusText,
          headers: res.headers,
          data   : res.data,
        };
        reset();
        setFormData(null);
        setPostResult(formatResponse(result));
        console.log(formData);
        console.log(postResult);
      },
      onError: (err) => {
        setPostResult(formatResponse(err.response?.data || err));
      },
    }
  );

  const onSubmit = (data) => {
    console.log("before")
    console.log(formData);
    setFormData(data);
    console.log("after")
    console.log(formData);
    insertReservation();
  }

  return (
      // <form onSubmit={handleSubmit((data) => setData(data))}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          // pt            = {30}
          // px            = {5}
          width          = "auto"
          display        = "flex"
          flexDirection  = 'column'
          alignItems     = {"center"}
          justifyContent = {"center"}
        >
          {/* <Button size="large" variant="contained" sx={{mb:5, bgcolor: '#3D3B8E'}} disabled>RESERVATION</Button> */}
          <Typography mb={5} color={'#3D3B8E'} variant="h4" component="div">
              <b>reservation</b>
          </Typography>
          <Grid
            container
            alignItems     = "center"
            justifyContent = "center"
            
            // spacing        = {0.5}
          >
            <Grid item 
              ml    = {-1}
              style = {{paddingLeft:0}}
              xs    = {12} sm = {12} md = {12} lg = {12} xl = {12}
            >
              <Controller
                render  = {({ field }) => <TextField fullWidth {...field} sx={{m: 0.5}} id = "form-firstName" label = "First Name" variant = "outlined" /> }
                name    = "formFirstName"
                control = {control}
              />
            </Grid>
            <Grid item 
              ml    = {-1}
              style = {{paddingLeft:0}}
              xs    = {12} sm = {12} md = {12} lg = {12} xl = {12}>
              <Controller
                render  = {({ field }) => <TextField fullWidth {...field} sx={{m: 0.5}} id = "form-lastName" label = "Last Name" variant = "outlined" /> }
                name    = "formLastName"
                control = {control}
              />
            </Grid>
          
            <Grid item 
              ml    = {-1}
              style = {{paddingLeft:0}}
              xs    = {12} sm = {12} md = {12} lg = {12} xl = {12}
            >
                <Controller
                  render  = {({ field }) => <TextField fullWidth {...field} sx={{m: 0.5}} id = "form-totalReserved" label = "Total Reserved" variant = "outlined" /> }
                  name    = "formTotalReserved"
                  control = {control}
                />
            </Grid>
          
            <Grid item 
              ml    = {-1}
              style = {{paddingLeft:0}}
              xs    = {12} sm = {12} md = {12} lg = {12} xl = {12}
            >
              <Controller
                render  = {({ field }) => <TextField fullWidth {...field} sx={{m: 0.5}} id = "form-date" label = "Date" variant = "outlined" /> }
                name    = "formDate"
                control = {control}
              />
            </Grid>
          
            <Grid item 
              ml    = {-1}
              style = {{paddingLeft:0}}
              xs    = {12} sm = {12} md = {12} lg = {12} xl = {12}
            >
              <Controller
                render  = {({ field }) => <TextField fullWidth {...field} sx={{m: 0.5}} id = "form-time" label = "Time" variant = "outlined" /> }
                name    = "formTime"
                control = {control}
              />
            </Grid>
          </Grid>
          <Container style={{padding: 0}}>
            <Box mt={1}>
              <Button size="medium" variant="contained" fullWidth type="submit">Submit</Button>
            </Box>
          </Container>
        </Box>
        {/* {console.log(data)} */}
      </form>
  )
}

export default ReservationFormSection;