
import React from 'react'
import { hot } from 'react-hot-loader/root'
import { Counter } from './components/Counter'
import { Header } from './components/Header'
import { NewChoreInput } from './components/inputNewChore'

export const App = hot(_App)
export function _App(): JSX.Element | null {
    return (
        <div>
            <Header />
            <NewChoreInput/>
            <Counter />
        </div>
    )
}