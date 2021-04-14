import React, {FC} from 'react'
import {Switch, Route, RouteComponentProps,} from 'react-router-dom'
import Header from './components/Header'
import MacroCal from './pages/MacroCalPage'
import RecipeList from './pages/RecipeListPage'
import routes from './config/routes'

const App: FC<{}> = props => {
  return (
    <div className="App">
      <Header/>
      <Switch>
        {routes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              render={(props: RouteComponentProps<any>) => (
                <route.component
                {...props}
                {...route.props}
                />
              )}
              />
          )
        })}
      </Switch>
     
    </div>
  );
}

export default App;
