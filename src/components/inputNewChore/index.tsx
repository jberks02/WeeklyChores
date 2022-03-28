import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import { IconButton, Typography } from '@mui/material';
import { Grid } from '@mui/material';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const fakeChores = {
    Sunday: ['foo', 'bar'],
    Monday: ['foo', 'bar'],
    Tuesday: ['foo', 'bar'],
    Wednesday: ['foo', 'bar'],
    Thursday: ['foo', 'bar'],
    Friday: ['foo', 'bar'],
    Saturday: ['foo', 'bar'],
}
export const NewChoreInput = () => {

    const arrayedList = Object.values(fakeChores);

    return (
        <Grid
            container
        >
            {[...Array(7).keys()].map((day) => {
                return (
                    <>
                        <Grid item xs={2}>
                            <Typography>{weekdays[day]}</Typography>
                        </Grid>
                        <Grid item xs={9}>
                            <Stack direction="row" spacing={1}>
                            {
                                arrayedList[day].map((chore, i) => (<Chip key={`${chore}-${day}-${i}`} label={chore} onDelete={() => console.log('i delete')} />))
                            }
                            </Stack>
                        </Grid>
                        <Grid item xs={1}>
                            <IconButton onClick={() => console.log('i do click')}>
                                <AddIcon />
                            </IconButton>
                        </Grid>
                    </>
                )
            })}
        </Grid>
    )
}