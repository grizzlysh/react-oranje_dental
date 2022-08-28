import React from 'react'
import { Controller } from "react-hook-form";
import { Grid, TextField } from '@mui/material'


const ReservationFormComponent = ({ control }) => {
  
  return (
    <>
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
            name    = "formLastNAme"
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
    </>
  )
} 

export default ReservationFormComponent;