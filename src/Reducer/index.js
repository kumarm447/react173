import { combineReducers } from 'redux'

//Reducers
import EmpReducer from './EmpReducer.js'
import UserReducer from './UserReducer.js'
import GlobalUserReducer from './GlobalUserReducer.js'

let rootReducer=combineReducers({ 
    EmpReducer, UserReducer, GlobalUserReducer
})

export default rootReducer