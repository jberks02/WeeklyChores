declare namespace choreApp {
    interface choreSet {
        'Sunday': string[];
        'Monday': string[];
        'Tuesday': string[];
        'Wednesday': string[];
        'Thursday': string[];
        'Friday': string[];
        'Saturday': string[];
    }

    interface choreUpdateArgument {
        day: string, 
        chore: string
    }
}