import React, { useState, useEffect } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import {Grid, Typography} from '@mui/material'
import Checkbox from '@mui/material/Checkbox';
import { useValues, useActions } from 'kea'
import { logic } from '../inputNewChore/newChoreLogic';
import { weekdays } from '../../utils/dayManagement';
const hours = 1000 * 60 * 60 * 60 * 6;

// const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

export const ChoreCheck = () => {

    const { chores } = useValues(logic);

    const { toggleChoreStatus, clearChoreStatuses } = useActions(logic)

    setInterval(() => {
        clearChoreStatuses();
        location.reload();
    }, hours);

    const getChoreList = () => {
        try {

        // clearChoreStatuses();
            
        const dayNum = new Date().getDay();

        const weekday = weekdays[dayNum];

        return chores[weekday] || [];

        } catch(err) {

            console.log('failure to get chore list: ', err)

            return []
        }
    }

    const day = weekdays[new Date().getDay()]

    const list = getChoreList();
    
    return (
        <Grid container direction='row' >
            {
                list.map((chore: choreApp.chore, i: number) => (
                    <Grid key={chore.chore + i} item xs={12} sm={6} md={4} style={{paddingTop: 10, paddingBottom: 10}}>
                        <FormControlLabel style={{margin: 0}}  control={<Checkbox checked={chore.status} size="medium" />} label={<Typography style={{fontSize: 35}} >{chore.chore}</Typography>}  onClick={() => toggleChoreStatus(day, chore.chore)} />
                    </Grid>
                ))
            }
        </Grid>
      );
}