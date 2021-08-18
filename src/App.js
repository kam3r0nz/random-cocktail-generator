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
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    recipe: state.drinks[0]
  }
}

export default connect(mapStateToProps, { fetchRecipe })(App);
