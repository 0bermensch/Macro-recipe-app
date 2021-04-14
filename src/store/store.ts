import {createStore, applyMiddleware} from 'redux'
import RootReducer from './reducers/RootReducer'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'

/*
applyMiddleware allows user to extend Redux with custom functionality
you can wrap the store's idspatch method for fun and profit. 
the key ture of middleware is that it is composable.
you can combine multiple middleware, and the order doesnt matter.

middleware is most commonly used to support asynchronous actions without boilderplate code or other dependency.

redux-thunk lets the action creators invert control by dispatching functions.
They would receive dispatch as an argument and may call it asynchronously
*/


const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)))

export type RootStore = ReturnType<typeof RootReducer>

export default store