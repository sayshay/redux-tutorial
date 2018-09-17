import {applyMiddleware, combineReducers, createStore} from "redux";
import {createLogger} from "redux-logger";

import mathReducer from './reducers/mathReducer'
import userReducer from './reducers/userReducer'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'

export const store = createStore(
    combineReducers({mathReducer: mathReducer, userReducer: userReducer}),
    {},
    applyMiddleware(createLogger(), thunk, promise())
)