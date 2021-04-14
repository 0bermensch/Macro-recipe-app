import React, { ChangeEvent, useState } from 'react'
import {useSelector} from 'react-redux'
import { RootStore } from '../store/store'
import RecipeListCard from './RecipeListCard'



const RecipeList = () => {

  const RecipeListState = useSelector((state: RootStore) => state.recipeList)


  return (
    <div className='recipelist'>
      <div className="recipelist--title">Recipe List</div>
      <ul className='recipelist__list'>
      {RecipeListState.recipelist && RecipeListState.recipelist.map((recipeList => {
        return(
          <li className='recipelist__list__recipe' key={recipeList.id}>
            <RecipeListCard recipeList={recipeList}/>
          </li>
        )
      }))}
      </ul>
    </div>
  )
}

export default RecipeList
