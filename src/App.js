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
        <h2>Ingredients:</h2>
        <ul>        
        <li>{this.props.recipe.strMeasure1} {this.props.recipe.strIngredient1}</li>
        <li>{this.props.recipe.strMeasure2} {this.props.recipe.strIngredient2}</li>
        <li>{this.props.recipe.strMeasure3} {this.props.recipe.strIngredient3}</li>
        <li>{this.props.recipe.strMeasure4} {this.props.recipe.strIngredient4}</li>
        <li>{this.props.recipe.strMeasure5} {this.props.recipe.strIngredient5}</li>
        <li>{this.props.recipe.strMeasure6} {this.props.recipe.strIngredient6}</li>
        <li>{this.props.recipe.strIngredient7}</li>
        <li>{this.props.recipe.strIngredient8}</li>
        <li>{this.props.recipe.strIngredient9}</li>
        <li>{this.props.recipe.strIngredient10}</li>
        <li>{this.props.recipe.strIngredient11}</li>
        <li>{this.props.recipe.strIngredient12}</li>
        </ul>
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
