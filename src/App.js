import './App.css';
import React from 'react'
import { connect } from 'react-redux'
import { fetchRecipe } from './actions/recipeActions'

class App extends React.Component {

  componentDidMount() {
    this.props.fetchRecipe()
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Random Cocktail Recipe Generator
        </header>
        <div id="recipe-card">
        <img className="drink-thumb" src={this.props.recipe.strDrinkThumb} alt={this.props.recipe.strDrink}/><br/>
        <h1>{this.props.recipe.strDrink}</h1>
        {this.props.recipe.strAlcoholic}<br/>
        Category: {this.props.recipe.strCategory}<br/>
        <h2>Instructions:</h2>
        <div id="instructions">{this.props.recipe.strInstructions}</div>
        </div>

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    recipe: state
  }
}


export default connect(mapStateToProps, { fetchRecipe })(App);
