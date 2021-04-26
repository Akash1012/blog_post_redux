const INITIALSTATE = {
    user: []
}

const userReducer = (state = INITIALSTATE, action) => {
    switch (action.type) {
        case 'FETCH_USER':
            return {
                ...state,
                user: [...state.user, action.payload]
            }
        default: return state
    }

}

export default userReducer