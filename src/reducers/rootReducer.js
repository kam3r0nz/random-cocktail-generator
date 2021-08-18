export default function rootReducer(state = [], action) {
    switch(action.type){
        case 'FETCH_RECIPE':
            return [...state]
        case 'ADD_RECIPE':
            return [...state, action.recipe]
        default:
            return state
    }
}