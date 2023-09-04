const GET_USERS = 'GET_USERS'
const initialState = {
    users: []
}

export const usersReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_USERS:
            return {...state, users: [...action.payload]};
        default:
            return state;
    }
}

export const getUsersActionCreator = payload => ({type: GET_USERS, payload})
