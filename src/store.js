import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import playersReducer from './reducers/playersReducer.js'

const store = createStore(playersReducer, composeWithDevTools(applyMiddleware()))

export default store;
