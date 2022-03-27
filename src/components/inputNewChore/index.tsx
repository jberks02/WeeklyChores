import React from 'react';
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

export const NewChoreInput = () => {
    
    return (
        <div>
            {[...Array(7).keys()].map((day) => {
                return (
                    <div key={day}>
                        <h5>{weekdays[day]}</h5>

                    </div>
                )
            })}
        </div>
    )
}