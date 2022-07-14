import {applyMiddleware,legacy_createStore as createStore} from 'redux'
import {rootReducer} from '../reducer'
import thunk from 'redux-thunk'
export const store=createStore(rootReducer,applyMiddleware(thunk))