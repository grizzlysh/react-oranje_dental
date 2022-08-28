import React, { useState, useEffect } from 'react'
import { useForm, Controller } from "react-hook-form";
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { useMutation } from "react-query";
import apiClient from "~/http-common";

import ReservationFormComponent from '~/reservation-form.component';

const defaultValues = {
  formTitle   : "",
  formAuthor  : "",
  formCategory: "",
  formPrice   : "",
  formStock   : ""
};

const ReservationComponent = () => {
  
  const { handleSubmit, reset, setValue, control } = useForm({ defaultValues });
  const [formData, setFormData]                    = useState(null);
  const [postResult, setPostResult]                = useState(null);
  const formatResponse                             = (res) => {
    return JSON.stringify(res, null, 2);
  };

  const { isLoading, mutate: insertBook } = useMutation(
    async () => {
      console.log(formData);
      return await apiClient.post(`/api/book`, {
        formTitle   : formData.formTitle,
        formAuthor  : formData.formAuthor,
        formCategory: formData.formCategory,
        formPrice   : formData.formPrice,
        formStock   : formData.formStock,
      });
    },
    {
      onSuccess: (res) => {
        const result = {
          status : res.status + "-" + res.statusText,
          headers: res.headers,
          data   : res.data,
        };
        setPostResult(formatResponse(result));
        console.log(postResult);
      },
      onError: (err) => {
        setPostResult(formatResponse(err.response?.data || err));
      },
    }
  );

  const onSubmit = (formData) => {
    setFormData(formData);
    insertBook();
  }

  return (
    
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
                control = {control}
                render  = {({ field }) => <TextField fullWidth {...field} sx={{m: 0.5}} id = "form-title" label = "Title" variant = "outlined" /> }
                name    = "formTitle"
              />
            </Grid>
            <Grid item 
              ml    = {-1}
              style = {{paddingLeft:0}}
              xs    = {12} sm = {12} md = {12} lg = {12} xl = {12}>
              <Controller
                control = {control}
                render  = {({ field }) => <TextField fullWidth {...field} sx={{m: 0.5}} id = "form-author" label = "Author" variant = "outlined" /> }
                name    = "formAuthor"
              />
            </Grid>
          
            <Grid item 
              ml    = {-1}
              style = {{paddingLeft:0}}
              xs    = {12} sm = {12} md = {12} lg = {12} xl = {12}
            >
                <Controller
                  name    = "formCategory"
                  control = {control}
                  render  = {
                    ({ field }) => <TextField
                      fullWidth
                      {...field}
                      onChange = {(e) => field.onChange(e)}
                      selected = {field.value}
                      sx       = {{m:0.5}}
                      id       = "form-category"
                      label    = "Category"
                      variant  = "outlined"
                      // value    = {value}
                      // onChange = {onChange}
                    />
                  }
                />
            </Grid>
          
            <Grid item 
              ml    = {-1}
              style = {{paddingLeft:0}}
              xs    = {12} sm = {12} md = {12} lg = {12} xl = {12}
            >
              <Controller
                control = {control}
                render  = {({ field }) => <TextField fullWidth {...field} sx={{m: 0.5}} id = "form-price" label = "Price" variant = "outlined" /> }
                name    = "formPrice"
              />
            </Grid>
          
            <Grid item 
              ml    = {-1}
              style = {{paddingLeft:0}}
              xs    = {12} sm = {12} md = {12} lg = {12} xl = {12}
            >
              <Controller
                control = {control}
                render  = {({ field }) => <TextField fullWidth {...field} sx={{m: 0.5}} id = "form-stock" label = "Stock" variant = "outlined" /> }
                name    = "formStock"
              />
            </Grid>
          </Grid>
          <Container style={{padding: 0}}>
            <Box mt={1}>
              <Button size="medium" variant="contained" fullWidth type="submit">Submit</Button>
            </Box>
          </Container>
        </Box>
        {console.log(formData)}
      </form>
  )
}

export default ReservationComponent;