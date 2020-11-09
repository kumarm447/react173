import { createStore,applyMiddleware} from 'redux';

//Combine_Reducer_Root name
import rootReducer from './../Reducer/index.js' //rootReducer

import promiseMiddleware from 'redux-promise'
 
let store=createStore(rootReducer,applyMiddleware(promiseMiddleware) );

//let store=createStore(rootRuducer)

export default store