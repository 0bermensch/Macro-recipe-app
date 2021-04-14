import Home from '../pages/HomePage'
import MacroCal from '../pages/MacroCalPage'
import Recipe from '../pages/RecipePage'
import RecipeList from '../pages/RecipeListPage'
import {IRoute} from '../store/types/RouteTypes'

const routes: IRoute[] = [
  {
    path: '/',
    name: 'Home Page',
    component: Home,
    exact: true
  },
  {
    path: '/macrocal',
    name: 'Macrocal Page',
    component: MacroCal,
    exact: true
  },
  {
    path: '/recipelist',
    name: 'Recipelist Page',
    component: RecipeList,
    exact: true
  },
  {
    path: '/recipe',
    name: 'Recipe Page',
    component: Recipe,
    exact: true
  }
]

export default routes;