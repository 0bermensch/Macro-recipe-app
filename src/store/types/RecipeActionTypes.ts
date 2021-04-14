export const RECIPE_LOADING = 'RECIPE_LOADING'
export const RECIPE_FAIL = 'RECIPE_FAIL'
export const RECIPE_SUCCESS = 'RECIPE_SUCCESS'


export type RecipeInfo = {
  title: string
  image: string
  readyInMinutes: number
  servings: number
  spoonacularScore: number
  extendedIngredients: RecipeIngredients
  wineParing: {pairedWines: string[]}
}

export type RecipeIngredients = [
  {
    name: string,
  measure:{
    metric: {
      amount: string
      unitLong: string
    }
  },
  image: string
  }
]

export interface RecipeLoading{
  type: typeof RECIPE_LOADING
}

export interface RecipeFail{
  type: typeof RECIPE_FAIL
}

export interface RecipeSuccess{
  type: typeof RECIPE_SUCCESS
  payload: RecipeInfo
}

export type RecipeDispatchTypes = RecipeLoading | RecipeFail | RecipeSuccess