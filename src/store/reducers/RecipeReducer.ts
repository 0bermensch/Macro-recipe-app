import { RecipeDispatchTypes, RecipeInfo, RECIPE_FAIL, RECIPE_LOADING, RECIPE_SUCCESS } from '../types/RecipeActionTypes'

interface RecipeDefaultState {
  loading: boolean,
  recipeinfo?: RecipeInfo
}

const defaultState: RecipeDefaultState = {
  loading: false
}

const recipeReducer = (state: RecipeDefaultState = defaultState, action: RecipeDispatchTypes): RecipeDefaultState => {
  switch(action.type){
    case RECIPE_FAIL:
      return {
        loading: false
      }
      case RECIPE_LOADING:
        return {
          loading: true
        }
        case RECIPE_SUCCESS:
          return {
            loading: false,
            recipeinfo: action.payload
          }
          default: 
          return state
  }
}

export default recipeReducer