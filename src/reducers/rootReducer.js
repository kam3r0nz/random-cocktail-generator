export default function rootReducer(state = [], action) {
    switch(action.type){
        case 'FETCH_RECIPE':
            return [...state]
        default:
            return state
    }
}