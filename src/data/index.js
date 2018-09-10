import uuid from 'uuid';

export const lists = [
    {
        id: 'uuid_1_here',
        title: 'Everyday',
        color: '#568cff',
        tasks: [
            {
                id: uuid.v4(),
                title: 'Morning Jogging',
                time: 'Everyday, 6:00am',
                completed: true,
            },
            {
                id: uuid.v4(),
                title: 'Clean the room',
                time: 'Everyday, 7:00am',
                completed: true,
            },
            {
                id: uuid.v4(),
                title: 'Feed Bruno',
                time: 'Everyday, 07:30am',
                completed: true,
            },
            {
                id: uuid.v4(),
                title: 'Leave for Office',
                time: 'Everyday, 08:00am',
                completed: true,
            },
            {
                id: uuid.v4(),
                title: 'Call Mom',
                time: 'Everyday, 06:00pm',
                completed: false,
            },
            {
                id: uuid.v4(),
                title: 'Read',
                time: 'Everyday, 08:00pm',
                completed: false,
            },
            {
                id: uuid.v4(),
                title: 'Sleep',
                time: 'Everyday, 10:00pm',
                completed: false,
            },
        ]
    },
    {
        id: 'uuid_2_here',
        title: 'Office',
        color: '#52AE75',
        tasks: [
            {
                id: uuid.v4(),
                title: 'Send updates email',
                time: 'Everyday, 9:00am',
                completed: true,
            },
            {
                id: uuid.v4(),
                title: 'Daily Standup',
                time: 'Everyday, 9:30am',
                completed: false,
            },
            {
                id: uuid.v4(),
                title: 'Call Anthony',
                time: 'Thursday 21st, 11:00am',
                completed: true,
            },
            {
                id: uuid.v4(),
                title: 'Meeting with AWS',
                time: 'Friday, 22nd, 06:00pm',
                completed: false,
            },
            {
                id: uuid.v4(),
                title: 'Spring Completion',
                time: 'Every Friday, 05:00pm',
                completed: false,
            },
        ]
    },
    {
        id: 'uuid_3_here',
        title: 'Finances',
        color: '#f69fa8',
        tasks: [
            {
                id: uuid.v4(),
                title: 'LIC',
                time: 'August 11th',
                completed: true,
            },
            {
                id: uuid.v4(),
                title: 'HDFC Mutual Fund',
                time: 'November 21st',
                completed: false,
            },
            {
                id: uuid.v4(),
                title: 'ITR Filing',
                time: 'July 31st',
                completed: true,
            },
            {
                id: uuid.v4(),
                title: 'Car Insurance',
                time: 'September 21st',
                completed: false,
            },
        ]
    },
]