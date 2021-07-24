import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import storeReducer from './redux-store/duck'
import thunk from 'redux-thunk'

const store = createStore(storeReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store