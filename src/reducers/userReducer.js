const userReducer = (state =  {
    name: 'alex',
    age: 30
}, action) => {
    switch (action.type) {
        case 'SET_AGE':
            state = {
                ...state,
                age: action.payload
            }
            break;
        case 'SET_NAME_FULFILLED':
            state = {
                ...state,
                name: action.payload
            }
            break;

    }
    return state
}
export default userReducer