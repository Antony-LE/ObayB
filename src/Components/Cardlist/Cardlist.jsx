import * as React from 'react';
import './cardlist.scss';

// import liés à MUI
import Grid from '@mui/material/Grid';
import CardElement from '../CardElement/CardElement';

export default function Cardlist() {
  return (
    <Grid
      className="cardlist"
      container
      justify="center"
      alignItems="center"
      spacing={5}
      style={{ textAlign: 'center' }}
    >
      <Grid item xs align="center">
        <CardElement />
      </Grid>
      <Grid item xs align="center">
        <CardElement />
      </Grid>
      <Grid item xs align="center">
        <CardElement />
      </Grid>
    </Grid>
  );
}
