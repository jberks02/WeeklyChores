
import React from 'react'
import { hot } from 'react-hot-loader/root'
import { ChoreCheck } from './components/ChoreList'
import { Header } from './components/Header'
import { NewChoreInput } from './components/inputNewChore'
import  Grid from '@mui/material/Grid'

export const App = hot(_App)
export function _App(): JSX.Element | null {
    return (
        <Grid container>
            <Header />
            <ChoreCheck/>
            <NewChoreInput/>
            {/* <Counter /> */}
        </Grid>
    )
}