import { kea } from 'kea'
import { defaultChoreList } from '../../utils/dayManagement';

const weekdays: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']; 

export const logic = kea({
    actions: {
        // check: (chore: string) => ({chore}), 
        // uncheck: (chore: string) => ({chore}),
        // setChoreList: (allChores: choreApp.choreSet) => ({allChores}),
        // displayAllChores: true
        updateChores: (day: string, chore: string) => ({day, chore})
    },
    // listeners: ({actions}) => ({
        // setChoreList: () => {
        //     try {
        //         const storageItem = localStorage.getItem('chores');
        //         if(storageItem === null) throw 'No Storage Item';
        //         const savedSet: choreApp.choreSet = JSON.parse(storageItem);
        //         actions.setChoreList(savedSet);
        //     } catch (err) {
        //         console.error('No saved chores. Using default set.')
        //         actions.setChoreList(defaultChoreList)
        //     }
        // },
        // displayAllChores: () => {
        //     try {
        //         const storageItem = localStorage.getItem('chores')
        //         if(storageItem === null) throw 'No Storage Item';
        //         const savedSet: choreApp.choreSet = JSON.parse(storageItem);
        //         actions.displayAllChores(savedSet)
        //     } catch (err) {
        //         actions.displayAllChores(defaultChoreList)
        //     }
        // }
    // }),
    reducers: {
        // chores: [
        //    [],
        //     {
        //         check: (_, {choreListState}) => [...choreListState],
        //         uncheck: (_, {choreListState}) => [...choreListState],
        //         setChoreList: (state, {allChores}) => {
        //             const dayNum = new Date().getDay()
        //             const day = weekdays[dayNum];
        //             state = {chores: allChores[day]}
        //         }
        //     },
        // ], 
        chores: [
            {...defaultChoreList}, 
            {
                updateChores: (state, {day, chore}) =>  {
                            console.log(day, chore)
                    }
            }
        ],
    },
})