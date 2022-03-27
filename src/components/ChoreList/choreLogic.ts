import { kea } from 'kea'

export const choreLogic = kea({
    actions: {
        check: true, // https://kea.js.org/docs/guide/concepts#actions
        uncheck: true, // true is shorthand for a function that doesn't take any arguments
    },
    reducers: {
        count: [
           () => {
            try {
                const stringyChoreList = window.localStorage.getItem('choreList');
                console.log(stringyChoreList);
                if(stringyChoreList === null) throw Error('No Chore Lists exists')
                return {list: [...JSON.parse(stringyChoreList)]}
            } catch {
                return {list: []}
            }
           },
            {
                check: (chore: string) => console.log(chore),
                uncheck: (chore: string) => console.log(chore),
            },
        ],
    },
})