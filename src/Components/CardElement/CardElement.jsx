import React from 'react';
import './cardElement.scss';

// Import des éléments MUI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';

function CardElement() {
  return (
    <Card
      className="card-element"
      sx={{
        maxWidth: 345,
      }}
    >
      <CardMedia
        component="img"
        height="350"
        image="https://cdn-icons-png.flaticon.com/128/1607/1607357.png"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Il pleure
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <Box text-align="center">
        <Button size="small">C&apos;est ça !</Button>
      </Box>
    </Card>
  );
}

export default CardElement;
