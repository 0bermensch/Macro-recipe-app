import {combineReducers} from 'redux'
import RecipeListReducer from './RecipeListReducer'
import RecipeReducer from './RecipeReducer'

const RootReducer = combineReducers ({
  recipeList: RecipeListReducer,
  recipe: RecipeReducer
})

export default RootReducer