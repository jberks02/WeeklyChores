import React, { SetStateAction, useState, useEffect } from 'react';
import { IconButton, TextField, Typography, InputAdornment } from '@mui/material';
import { Cancel, Add } from '@mui/icons-material';
import { Grid } from '@mui/material';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { useValues, useActions } from 'kea'
import { logic } from './newChoreLogic'

export const NewChoreInput = () => {

    const { chores } = useValues(logic);

    const {updateChore, loadChores, saveChores, removeChore, toggleChoreStatus} = useActions(logic);

    useEffect(() => {
        if(Object.keys(chores).length === 0) {
            loadChores()
        } else {
            saveChores(chores)
        }
    }, [chores])

    const [newChoreField, setChoreField] = useState<SetStateAction<null | string>>(null)
    const [choreUpdate, setChoreUpdate] = useState('');

    const addButtonClick = (day: string) => setChoreField(day);

    const cancelInput = () => setChoreField(null);

    const inputUpdate = (chore: string) => setChoreUpdate(chore)

    const addChoreToList = (day: string) => {
        updateChore(day, choreUpdate)
        inputUpdate('')
        setChoreField(null)
    }

    const remove = (chore: string, day: string) => removeChore(day, chore)

    return (
        <Grid
            container
        >
            {Object.keys(chores).map((day: string, i: number) => {
                return (
                    <Grid 
                    container 
                    item 
                    style={{padding: 5}}
                    key={day + i + 'list-container'}>
                        <Grid key={day + 'title'} item xs={2}>
                            <Typography>{day}</Typography>
                        </Grid>
                        <Grid key={day + 'chorelist'} item xs={9} style={{ maxHeight: 32 }}>
                            <Stack direction="row" spacing={1}>
                                {
                                    chores[day as keyof choreApp.choreSet].map((chore: choreApp.chore, i: number) => (<Chip style={{backgroundColor: chore.status ? '#86B049' : '#017ec3', color: '#EEE'}} key={`${chore}-${day}-${i}`} label={chore.chore} onClick={() => toggleChoreStatus(day, chore.chore)} onDelete={() => removeChore(day, chore.chore)} />))
                                }
                                {
                                    newChoreField && newChoreField === day &&
                                    <TextField
                                        size="small"
                                        id="input-with-icon-textfield"
                                        label="New Chore"
                                        onChange={(event) => inputUpdate(event.target.value)}
                                        onKeyDown={(event) => event.key === 'Enter' ? addChoreToList(day) : null}
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
                    </Grid>
                )
            })}
        </Grid>
    )
}