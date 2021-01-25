import {combineReducers} from 'redux'
import counterReducers from './counterReducer'

const allReducers = combineReducers({
    counterReducers,
});

export default allReducers;