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
        {this.props.recipe.strDrink}<br/>
        <img className="drink-thumb" src={this.props.recipe.strDrinkThumb} alt={this.props.recipe.strDrink}/>
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
