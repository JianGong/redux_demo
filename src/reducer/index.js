import {combineReducers} from 'redux'
import app from './app'
import welcome from './welcome'

const rootReducer = combineReducers({app, welcome});
export default rootReducer;