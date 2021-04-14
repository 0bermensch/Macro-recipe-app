import axios from 'axios'
import {Dispatch} from 'redux'
import { RecipeDispatchTypes, RECIPE_FAIL, RECIPE_LOADING, RECIPE_SUCCESS } from '../types/RecipeActionTypes'

export const GetRecipeInfo = (id: number) => async (dispatch: Dispatch<RecipeDispatchTypes>) => {
try {
  dispatch({
    type: RECIPE_LOADING
})

const API_KEY: string = "apiKey=91be2662a6dd44fb9d1ebedb2f18a8be"

  const res = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?${API_KEY}&includeNutrition=false`)

dispatch({
  type: RECIPE_SUCCESS,
  payload: res.data
})


} catch (e) {
  dispatch({
    type: RECIPE_FAIL
  })
}

}