
let initialState = {
    users: []
}

export default function reducer(state = initialState, action){
    if (action.type === "userAdded"){
        return {...state, users: state.users.concat(action.users) }
    }
    return state
}