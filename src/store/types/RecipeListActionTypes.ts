/*
All the data types for RecipeListActions
*/

export const RECIPELIST_LOADING = 'RECIPELIST_LOADING'
export const RECIPELIST_FAIL = 'RECIPELIST_FAIL'
export const RECIPELIST_SUCCESS = 'RECIPELIST_SUCCESS'

export type RecipeListType = [
  recipes:{
  calories: number,
  id:number,
  carbs: string,
  fat: string,
  image: string,
  protein: string,
  title: string
  }
]
// export type RecipeList ={
//   RecipeListType: []
// }

export interface RecipeListLoading{
  type: typeof RECIPELIST_LOADING
}

export interface RecipeListFail {
  type: typeof RECIPELIST_FAIL
}

export interface RecipeListSuccess{
  type: typeof RECIPELIST_SUCCESS
  payload: RecipeListType
}

export type RecipeListDispatchTypes = RecipeListLoading | RecipeListFail | RecipeListSuccess