import React from 'react';
import { Typography, Grid } from '@mui/material';
import './style.css';

export const Header = () => {
    return (
       <Grid item xs={12} className='backgroundDiv' >
           <Typography style={{margin: 0, fontSize: 40}} >Weekly Chores</Typography>
        </Grid>
    )
}