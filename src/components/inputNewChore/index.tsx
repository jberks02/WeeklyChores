import React, { SetStateAction, useState } from 'react';
import { IconButton, TextField, Typography, InputAdornment } from '@mui/material';
import { Cancel, Add, Key } from '@mui/icons-material';
import { Grid } from '@mui/material';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

interface choreSet {
    'Sunday': string[];
    'Monday': string[];
    'Tuesday': string[];
    'Wednesday': string[];
    'Thursday': string[];
    'Friday': string[];
    'Saturday': string[];
}



export const NewChoreInput = () => {

    const [fakeChores, setChores] = useState<choreSet>({
        'Sunday': ['foo', 'bar'],
        'Monday': ['foo', 'bar'],
        'Tuesday': ['foo', 'bar'],
        'Wednesday': ['foo', 'bar'],
        'Thursday': ['foo', 'bar'],
        'Friday': ['foo', 'bar'],
        'Saturday': ['foo', 'bar'],
    })
    const [newChoreField, setChoreField] = useState<SetStateAction<null | string>>(null)
    const [choreUpdate, setChoreUpdate] = useState('');

    const addButtonClick = (day: string) => setChoreField(day);

    const cancelInput = () => setChoreField(null);

    const inputUpdate = (chore: string) => setChoreUpdate(chore)

    const addChoreToList = (day: string) => {
        // fakeChores[day].push(choreUpdate);
        setChores({
            ...fakeChores, 
            [day]: [...fakeChores[day as keyof choreSet], choreUpdate]
        });
        inputUpdate('')
        setChoreField(null)
    }

    const remove = (chore: string, day: string) => {
        console.log(fakeChores[day as keyof choreSet], chore)
        // fakeChores[day] = [...fakeChores[day].filter(y => y !== chore)]
        setChores({
            ...fakeChores, 
            [day]: [...fakeChores[day as keyof choreSet].filter(y => y !== chore)]
        })
    }

    return (
        <Grid
            container
        >
            {Object.keys(fakeChores).map((day: string) => {
                return (
                    <>
                        <Grid key={day + 'title'} item xs={2}>
                            <Typography>{day}</Typography>
                        </Grid>
                        <Grid key={day + 'chorelist' } item xs={9} style={{ maxHeight: 32 }}>
                            <Stack direction="row" spacing={1}>
                                {
                                    fakeChores[day as keyof choreSet].map((chore, i) => (<Chip key={`${chore}-${day}-${i}`} label={chore} onDelete={() => remove(chore, day)} />))
                                }
                                {
                                    newChoreField && newChoreField === day &&
                                    <TextField
                                        size="small"
                                        id="input-with-icon-textfield"
                                        label="New Chore"
                                        onChange={(event) => inputUpdate(event.target.value)}
                                        onKeyDown={(event) => event.key === 'Enter' ? addChoreToList(day) : null }
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton onClick={cancelInput} >
                                                        <Cancel />
                                                    </IconButton>
                                                </InputAdornment>
                                            ),
                                        }}
                                        variant="standard"
                                    />
                                }
                            </Stack>
                        </Grid>
                        <Grid key={day + 'add item'} item xs={1}>
                            <IconButton onClick={() => addButtonClick(day)}>
                                <Add />
                            </IconButton>
                        </Grid>
                    </>
                )
            })}
        </Grid>
    )
}