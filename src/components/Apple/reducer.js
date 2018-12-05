const initialAppleState = {
    dirty: true,
    remainingBites: 5,
    color: 'red'
};

export default (state = initialAppleState, action) => {
    const { type } = action; // can also use { type, data }

    switch (type) {
        case 'WASH':
        return {
            ...state,
            dirty: false
        }
        case 'EAT':
        return {
            ...state,
            remainingBites: (state.remainingBites - action.bites) // minus 2 from the remaining number of bites
        }
        case 'ROT':
        return {
            ...state,
            color: 'brown'
        }
        default:
        return state;
    }
}
