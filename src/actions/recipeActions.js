function fetchRecipe() {
    return dispatch => {
        dispatch({type: 'FETCH_RECIPE'})
        fetch('www.thecocktaildb.com/api/json/v1/1/random.php')
            .then(resp => resp.json())
            .then(recipe => console.log(recipe))
    }
}