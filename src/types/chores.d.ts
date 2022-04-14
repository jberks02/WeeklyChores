declare namespace choreApp {
    interface choreSet {
        'Sunday': chore[];
        'Monday': chore[];
        'Tuesday': chore[];
        'Wednesday': chore[];
        'Thursday': chore[];
        'Friday': chore[];
        'Saturday': chore[];
    }

    interface chore {
        chore: string;
        status: boolean
    }

    interface choreUpdateArgument {
        day: string, 
        chore: string
    }
}