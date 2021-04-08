import {combineReducers} from 'redux';
import HabitantsReducer from './habitants/habitants-reducers';


const rootReducer = combineReducers({
    habitantsState: HabitantsReducer,
})

export default rootReducer;