

const INITIALSTATE = {
    ListOfData: []
}

const postReducer = (state = INITIALSTATE, action) => {
    switch (action.type) {
        case 'FETCH_POST':
            return {
                ...state,
                ListOfData: action.payload
            }
        default:
            return state
    }
}

export default postReducer