import counterReducer from "./counterReducer";
import {combineReducers} from 'redux';
// собирает коллекцию редюсеров в главный
const rootReducer = combineReducers({
    counterReducer: counterReducer,
});
export default rootReducer;