import React, { FC, useState } from 'react'
import {useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import { GetRecipeInfo } from '../store/actions/RecipeAction'

interface RecipeProps {
  recipeList:{
    calories: number,
    id:number,
    carbs: string,
    fat: string,
    image: string,
    protein: string,
    title: string
  }
}

const RecipeListCard: FC<RecipeProps> = ({recipeList}) => {
  const dispatch = useDispatch()
  
  const handleID = () => {
    dispatch(GetRecipeInfo(recipeList.id))
  }


  return (
    <div className='recipelist__list__recipe__card'>
      <img className='recipelist__list__recipe__card--image' src={recipeList.image} alt=""/>
      <div className="reciplelist__list__recipe__card__textbox" >
        <div className='recipelist__list__recipe__card__textbox--title' >{recipeList.title}</div>
        <div className="recipelist__list__recipe__card__textbox__infobox">
          <div className='recipelist__list__recipe__card__textbox--info'>Calories: {recipeList.calories}</div>
          <div className='recipelist__list__recipe__card__textbox--info'>Carbs: {recipeList.carbs}</div>
          <div className='recipelist__list__recipe__card__textbox--info'>Fat: {recipeList.fat}</div>
          <div className='recipelist__list__recipe__card__textbox--info'>Protein: {recipeList.protein}</div>
        </div>
      </div>
      <Link to='/recipe'>
        <button className='recipelist__list__recipe__card--button' onClick={handleID}>Full Recipe</button>
      </Link>
    </div>
  )
}

export default RecipeListCard
