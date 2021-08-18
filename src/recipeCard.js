import React from 'react'
import { connect } from 'react-redux'

class RecipeCard extends React.Component {

    render() {
        return (
            <h1>HI</h1>
        )
    }

}

const mapStateToProps = state => {
    return {
    recipe: state.drinks[0]
    }
}

export default connect(mapStateToProps)(RecipeCard)