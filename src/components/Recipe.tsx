import React from 'react'
import {useSelector} from 'react-redux'
import {RootStore} from '../store/store'

const Recipe = () => {

  const RecipeState = useSelector((state: RootStore) => state.recipe)

  return (
    <div className='recipe'>
      <div className="recipe--title">{RecipeState.recipeinfo?.title}</div>
      <img src={RecipeState.recipeinfo?.image} alt="food" className="recipe--image"/>
      <div className="recipe__textbox">
        <div className="recipe__textbox--item"><strong>Ready in:</strong> {RecipeState.recipeinfo?.readyInMinutes}</div>
        <div className="recipe__textbox--item"><strong>Serving:</strong> {RecipeState.recipeinfo?.servings}</div>
        <div className="recipe__textbox--item"><strong>Spoonacular Score:</strong> {RecipeState.recipeinfo?.spoonacularScore}</div>
      </div>
      
      {RecipeState.recipeinfo?.extendedIngredients.map((ingredients) => {
        return(
          <div className="recipe__textbox__ingredient">
            <div className="recipe__textbox__ingredient--name">{ingredients.name}</div>
            <div className="recipe__textbox__ingredient--measure">{ingredients.measure.metric.amount}</div>
          </div>
        )
      })}
      {/* {RecipeState.recipeinfo?.wineParing.pairedWines.map((wine)=> {
        return(
          <div className="recipe__textbox--wine">{wine}</div>
        )
      })} */}

    </div>
  )
}

export default Recipe


/*
need to figure out how to map out the ingredients and wine
*/