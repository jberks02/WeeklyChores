import React, { useState, useEffect } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useValues, useActions } from 'kea'
import { logic } from '../inputNewChore/newChoreLogic';
import { weekdays } from '../../utils/dayManagement';
const thirtyMinutes = 1000 * 60 * 60 * 30;

// const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

export const ChoreCheck = () => {

    const { chores } = useValues(logic);

    const { toggleChoreStatus, clearChoreStatuses } = useActions(logic)

    const refreshTimeout = setTimeout(() => {
        clearChoreStatuses();
    }, thirtyMinutes);

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
        <FormGroup>
            {
                list.map((chore: choreApp.chore, i: number) => (
                    <FormControlLabel key={chore.chore + i} control={<Checkbox checked={chore.status} />} label={chore.chore}  onClick={() => toggleChoreStatus(day, chore.chore)} />
                ))
            }
        </FormGroup>
      );
}