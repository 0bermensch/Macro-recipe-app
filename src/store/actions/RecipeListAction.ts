import React, {ChangeEvent, FormEvent} from 'react'
import axios from 'axios'
import {Dispatch} from 'redux'
// import {MacroTypes} from '../../components/Macrocalculator'
import {RecipeListDispatchTypes, RECIPELIST_LOADING, RECIPELIST_FAIL, RECIPELIST_SUCCESS} from '../types/RecipeListActionTypes'

//calories: number, carbs: number, protein: number, fat: number

/*
RecipeListAction is responsible for taking in the daily macro information
then use them for the values of the spoonacular endpoints, to get the
list of recipe catered to the user's macro requirements per meal
*/

/* api
https://api.spoonacular.com/recipes/findByNutrients?${API_KEY}&minProtein=${
          macroPerMeal.protein - 15
        }&minCarbs=${macroPerMeal.carbs - 30}&minFat=${macroPerMeal.fat - 8}&number=18
*/
//macroPerMeal: MacroTypes
export const GetRecipeList = (calories:number) => async (dispatch: Dispatch<RecipeListDispatchTypes>) => {
  console.log(calories)
  try{
    dispatch ({
      type: RECIPELIST_LOADING
    })

     const API_KEY: string = "apiKey=91be2662a6dd44fb9d1ebedb2f18a8be"

    const res = await axios.get(`https://api.spoonacular.com/recipes/findByNutrients?${API_KEY}&minCalories=${calories}&number=18`)

    dispatch({
      type: RECIPELIST_SUCCESS,
      payload: res.data
    })
  } catch (e) {
    dispatch({
      type: RECIPELIST_FAIL
    })
  }
}