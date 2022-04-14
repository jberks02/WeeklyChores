import React, { useState, useEffect } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useValues, useActions } from 'kea'
import { logic } from '../inputNewChore/newChoreLogic';

const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

export const ChoreCheck = () => {

    const { chores } = useValues(logic);

    const getChoreList = () => {
        try{
            
        const dayNum = new Date().getDay();

        const weekday = weekdays[dayNum];

        return chores[weekday];

        } catch {
            return []
        }
    }

    // const [choreList, updateChoreList] = useState(getChoreList())

    // useEffect(() => {
    //     updateChoreList(getChoreList())
    // }, chores)
    
    return (
        <FormGroup>
            {
                getChoreList().map((chore: choreApp.chore) => (
                    <FormControlLabel control={<Checkbox checked={chore.status} />} label={chore.chore} />
                ))
            }
        </FormGroup>
      );
}