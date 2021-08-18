export function fetchRecipe() {
    return dispatch => {
        dispatch({type: 'FETCH_RECIPE'})
        fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
            .then(resp => resp.json())
            .then(recipe => dispatch({type: 'ADD_RECIPE', recipe}))
    }
}

export function addRecipe(recipe) {
    return dispatch => dispatch({type: 'ADD_RECIPE', recipe})
}