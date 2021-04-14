import {RecipeListDispatchTypes, RecipeListType, RECIPELIST_FAIL, RECIPELIST_LOADING, RECIPELIST_SUCCESS } from '../types/RecipeListActionTypes'

/*
managing the state of the RecipeList depending on what the RecipeListAction outputs
*/


interface RecipeListDefaultState{
  loading: boolean,
  recipelist?: RecipeListType
}

const defaultState: RecipeListDefaultState = {
  loading: false
}

const RecipeListReducer = (state: RecipeListDefaultState = defaultState, action: RecipeListDispatchTypes) => {
  switch(action.type) {
    case RECIPELIST_FAIL:
    return{
      loading: false,
    }
    case RECIPELIST_LOADING:
    return {
      loading: true
    }
    case RECIPELIST_SUCCESS:
    return{
      loading: false,
      recipelist: action.payload
    }
    default: 
    return state
  }
}

export default RecipeListReducer