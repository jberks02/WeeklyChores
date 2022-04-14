import { kea } from 'kea'
import { defaultChoreList, weekdays } from '../../utils/dayManagement';

export const logic = kea({
    actions: {
        // check: (chore: string) => ({chore}), 
        // uncheck: (chore: string) => ({chore}),
        // setChoreList: (allChores: choreApp.choreSet) => ({allChores}),
        loadChores: true,
        setChores: (chores: choreApp.choreSet) => ({ chores }),
        updateChore: (day: string, chore: string) => ({ day, chore }),
        saveChores: (chores: choreApp.choreSet) => (chores),
        removeChore: (day: string, chore: string) => ({day, chore}),
        toggleChoreStatus: (day: string, chore: string) => ({ chore, day }),
        clearChoreStatuses: true
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
                updateChore: (state: choreApp.choreSet, { day, chore }) => ({ ...state, [day]: [...state[day as keyof choreApp.choreSet], {chore, status: false}] }), 
                removeChore: (state: choreApp.choreSet, { day, chore}) => ({...state, [day]: [...state[day as keyof choreApp.choreSet].filter((y) => y.chore !== chore)] }),
                toggleChoreStatus: (state: choreApp.choreSet, { day, chore }) => {

                    const todaysList = state[day as keyof choreApp.choreSet];

                    const newList = todaysList.map((ch) => {
                        if (chore === ch.chore) ch.status = !ch.status;
                        return ch
                    });

                    return {
                        ...state,
                        [day]: newList
                    }

                },
                clearChoreStatuses: (state: choreApp.choreSet) => {

                    const today = weekdays[new Date().getDay()]
                    console.log(today)
                    Object.keys(state).forEach((day) => {
                        if(day !== today)state[day as keyof choreApp.choreSet] = state[day as keyof choreApp.choreSet].map((x) => ({...x, status: false}))
                    });
                    return {...state}
                }
            }
        ],
    },
})