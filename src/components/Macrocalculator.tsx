// import React, {useState, useCallback} from 'react'
// import {useDispatch} from 'react-redux'
// import { Link } from 'react-router-dom'
// import {GetRecipeList} from '../store/actions/RecipeListAction'



// // the biological information types of the user, will be used to calculate their macro requirements
// type Variables = {
//   weight: number,
//   height: number,
//   age: number,
//   goal: any,
//   activity: any,
//   gender: string,
//   meals: number
// }


// // macro information types
// export type MacroTypes = {
//   calories: number,
//   carbs: number,
//   fat: number,
//   protein: number
// }


// const MacroCalculator = () => {
//   const dispatch = useDispatch()

//   //state for the user's biological information
//   const [variables, setVariables] = useState<Variables>({
//   weight: 0,
//   height: 0,
//   age: 0,
//   goal: '',
//   activity: '',
//   gender: '',
//   meals: 1
//   })
//   const [macroTotal, setMacroTotal] = useState<MacroTypes>({
//     calories: 0,
//     protein: 0,
//     carbs: 0,
//     fat: 0
//   })
//   const [macroPerMeal, setMacroPerMeal] = useState<MacroTypes>({
//     calories: 0,
//     protein: 0,
//     carbs: 0,
//     fat: 0
//   })


//   // handling all the inputs from the 
//   const handleInput = (e: any) => {
//     setVariables({...variables, [variables.weight]: e.target.value})
//   }

//   // const handleWeight = (e: number) => {
//   //   setVariables(e.target.value)
//   // }


// /*
// calculating the macronutrients with the macro formula then 'save' the information
// on the macrototal and macropermeal states, then send the macropermeal state to 
// recipelistAction to fill in the params for the Spoonacular api and get the recipelist
// that fulfills the macropermeal requirements.
// */
//   const calculation = () => {
//     let cal: number = 0
//     if (variables.gender === 'male') 
//         cal = (10 * variables.weight + 6.25 * variables.height - 5 * variables.age + 5) * variables.activity * variables.goal;
//     else if (variables.gender === 'female') 
//         cal = (10 * variables.weight + 6.25 * variables.height - 5 * variables.age - 161) * variables.activity * variables.goal;
      
//     return (
//       setMacroTotal({
//       calories: Math.floor(cal),
//       protein: Math.floor((cal * 0.25) / 4),
//       carbs: Math.floor((cal * 0.6) / 4),
//       fat: Math.floor((cal * 0.15) / 4)
//       }),
//       setMacroPerMeal({
//       calories: Math.floor(cal),
//       protein: Math.floor((cal * 0.25) / 4 / variables.meals),
//       carbs: Math.floor((cal * 0.6) / 4 / variables.meals),
//       fat: Math.floor((cal * 0.15) / 4 / variables.meals)
//       }))      
//     }



//   const onSubmit = () => {
//     calculation()
//     dispatch(GetRecipeList(macroPerMeal))
//   }



//   return (
//     <div className="macrocal">
//     <div className='macrocal__calculator'>
//       <label htmlFor="" className="macrocal__calculator--label">Weight (kg)</label>
//       <input type="number" className="macrocal__calculator--input" value={variables.weight} onChange={handleInput}/>
//       <label htmlFor="" className="macrocal__calculator--label">height (cm)</label>
//       <input type="number" className="macrocal__calculator--input" value={variables.height} onChange={handleInput}/>
//       <label htmlFor="" className="macrocal__calculator--label">Age</label>
//       <input type="number" className="macrocal__calculator--input" value={variables.age} onChange={handleInput}/>
//       <label htmlFor="" className="macrocal__calculator--label">Biological Gender</label>
//       <select
//             className="macrocal__calculator--input"
//             value={variables.gender}
//             onChange={handleInput}
//           >
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//           </select>
//       <label htmlFor="" className="macrocal__calculator--label">Diet Goal</label>
//       <select
//             className="macrocal__calculator--input"
//             value={variables.goal}
//             onChange={handleInput}
//           >
//             <option value="0.8">Lose Weight</option>
//             <option value="1.0">Maintain Weight</option>
//             <option value="1.2">Gain Weight</option>
//           </select>
//       <label htmlFor="" className="macrocal__calculator--label">Activity Level</label>
//       <select
//             className="macrocal__calculator--input"
//             value={variables.activity}
//             onChange={handleInput}
//           >
//             <option value="1.20">Sedentary</option>
//             <option value="1.38">Light Activity</option>
//             <option value="1.55">Moderate Activity</option>
//             <option value="1.73">Very Active</option>
//           </select>
//       <label htmlFor="" className="macrocal__calculator--label">Meals Per Day</label>
//       <select
//             className="macrocal__calculator--input"
//             value={variables.meals}
//             onChange={handleInput}
//           >
//             <option value="1">One Meal</option>
//             <option value="2">Two Meal</option>
//             <option value="3">Three Meal</option>
//             <option value="4">Four Meal</option>
//             <option value="5">Five Meal</option>
//           </select>
//           <div className="macrocal__calculator__button">
//             <button className='macrocal__calculator__button--calbutton' onClick={calculation}>Calculate</button>
//       <Link to='/recipelist'>
//       <button className="macrocal__calculator__button--tobutton">To RecipeList</button>
//       </Link>
//           </div>
//       </div>
//       <div className='macrocal__result'>
//         <div>{macroTotal.calories}</div>
//         <div>{macroTotal.carbs}</div>
//       </div>
    
//     </div>
//   )
// }

// export default MacroCalculator


import React from 'react'

const Macrocalculator = () => {
  return (
    <div>
      
    </div>
  )
}

export default Macrocalculator
