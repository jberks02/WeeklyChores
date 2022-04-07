import { kea } from 'kea'
import { defaultChoreList } from '../../utils/dayManagement';

const weekdays: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export const logic = kea({
    actions: {
        // check: (chore: string) => ({chore}), 
        // uncheck: (chore: string) => ({chore}),
        // setChoreList: (allChores: choreApp.choreSet) => ({allChores}),
        loadChores: true,
        setChores: (chores: choreApp.choreSet) => ({ chores }),
        updateChore: (day: string, chore: string) => ({ day, chore }),
        saveChores: (chores: choreApp.choreSet) => (chores),
        removeChore: (day: string, chore: string) => ({day, chore})
    },
    listeners: ({ actions }) => ({
        loadChores: () => {
            try {
                const storageItem = localStorage.getItem('chores');
                if (storageItem === null) {
                    actions.setChores(defaultChoreList)
                } else {
                    const savedSet: choreApp.choreSet = JSON.parse(storageItem);
                    actions.setChores(savedSet);
                }
            } catch (err) {
                console.error('No saved chores. Using default set.')
                actions.setChoreList(defaultChoreList)
            }
        },
        saveChores: (choreSet: choreApp.choreSet) => {
            try {
                const stringyChores = JSON.stringify(choreSet);
                localStorage.setItem('chores', stringyChores);
            } catch (err) {
                console.log('Failure in listener updateChores: ', err);
            }
        }
    }),
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
            {},
            {
                setChores: (_, { chores }) => ({ ...chores }),
                updateChore: (state, { day, chore }) => ({ ...state, [day]: [...state[day], chore] }), 
                removeChore: (state, {day, chore}) => ({...state, [day]: [...state[day].filter((y: string) => y !== chore)] })
            }
        ],
    },
})