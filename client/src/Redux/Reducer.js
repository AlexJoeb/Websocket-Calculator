let defaultState = {
    name: null,
    history: [
        {
            user: 'User A',
            equation: '1+3*5',
            answer: 16,
            time: Date.now(),
        },
        {
            user: 'User B',
            equation: '1+2*5',
            answer: 11,
            time: Date.now(),
        },
        {
            user: 'User C',
            equation: '1+4*5',
            answer: 21,
            time: Date.now(),
        }
    ]
}

export default (state = defaultState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}