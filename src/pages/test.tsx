import React, {useState, ChangeEvent} from 'react'
import {useDispatch} from 'react-redux'
import {GetRecipeList} from '../store/actions/RecipeListAction'

const Test = () => {
  const dispatch = useDispatch()
  const [calories, setCalories] = useState<number>(0)

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setCalories(e.target.value as any)
  }

  const handleSumbit = () => {
    dispatch(GetRecipeList(calories))
  }

  return (
    <div>
      <input type="number" onChange={handleChange} />
      <button onClick={handleSumbit}>Seach</button>
    </div>
  )
}

export default Test
