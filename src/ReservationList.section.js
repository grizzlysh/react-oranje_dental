import React, { useState, useEffect } from 'react'
import { Box, Container, Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useQuery } from 'react-query'

const ReservationListSection = ({ api }) => {
  const [getResult, setGetResult] = useState(null);
  const fortmatResponse           = (res) => {
    return JSON.stringify(res, null, 2);
  };

  const { status, isLoading, data: qResult, error, refetch: getAllReservations } = useQuery(
    "query-reservations",
    async () => {
      return await api.get("/api/reservation");
    },
    // {
      // enabled: false,
      // onSuccess: (res) => {
      //   const result = {
      //     status : res.status + "-" + res.statusText,
      //     headers: res.headers,
      //     data   : res.data,
      //   };
      //   // console.log(JSON.parse(result.data));
      //   setGetResult(fortmatResponse(result.data));
      //   console.log(typeof(getResult))
      //   console.log(getResult)
      // },
      // onError: (err) => {
      //   setGetResult(fortmatResponse(err.response?.data || err));
      // },
    // }
  );
  
  // useEffect(() => {
  //   if (isLoading) setGetResult("loading...");
  // }, [isLoading]);

  function getAllData() {
    try {
      getAllReservations();
    } catch (err) {
      setGetResult(fortmatResponse(err));
    }
  }
  
  // if (status === "loading") return <h1>Loading...</h1>;
  if (status === "error") return <span>Error: {error.message}</span>;

  const columns = [
    { field: 'reserved_id', headerName: 'ID', width: 50, hideable:true},
    { field: 'reserved_number', headerName: 'No Urut', width: 75, sortable: true },
    { field: 'fullName', headerName: 'Full name', sortable: false, width: 250, valueGetter: (params) =>   `${params.row.first_name || ''} ${params.row.last_name || ''}`, },
    // { field: 'formFirstName', headerName: 'First Name', width: 225, sortable: true },
    // { field: 'formLastNAme', headerName: 'Last Name', width: 225, sortable: true },
    { field: 'reserved_total', headerName: 'Total Reserved', width: 150, sortable: true },
    { field: 'reserved_date', headerName: 'Date', width: 120, sortable: true },
    { field: 'reserved_time', headerName: 'Time', width: 120, sortable: true },
    { field: 'status', headerName: 'Status', width: 120, sortable: true },
  ];
  
  return (
        <Container style={{padding: 0}}>
          {console.log(1)}
          {console.log(qResult)}
          <Box my={2}>
            <Button size="large" sx={{bgcolor: "#D15523"}} variant="contained" fullWidth  onClick={getAllData}>Get Data</Button>
          </Box>
          {/* {(getResult && getResult != "loading...") ? */}
          <Box 
            alignItems = "center"
            sx         = {{
              // p             : 1,
              // width         : 'auto',
              justifyContent      : 'center',
              bgcolor             : 'white',
              height              : 600,
              borderTopRightRadius: {
                xs: 8,
                sm: 10,
                md: 20
              },
              borderTopLeftRadius: {
                xs: 8,
                sm: 10,
                md: 20
              },
              borderBottomRightRadius: {
                xs: 8,
                sm: 10,
                md: 20
              },
              borderBottomLeftRadius: {
                xs: 8,
                sm: 10,
                md: 20
              },
            }}
          >
            {
              qResult?.data && 
              (
                <DataGrid
                  rows     = {qResult.data}
                  columns  = {columns}
                  loading  = {isLoading}
                  getRowId = {(row) => row.reserved_id}
                  pagination
                  disableColumnMenu
                  disableSelectionOnClick
                  columnVisibilityModel={{
                    reserved_id: false,
                  }}
                  // style={{width: "90%"}}
                  // getRowId={row => row.yourUniqueField}
                  // pageSize           = {5}
                  // rowsPerPageOptions = {[5]}
                  // width = "100%"
                  // loading  = {true}
                />
              )
            }
          </Box> 
        </Container>
  )
}

export default ReservationListSection;