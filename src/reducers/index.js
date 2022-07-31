import counterReducer from "./counterReducer";
import themeReducer from "./themeReducer";
import {combineReducers} from 'redux';
// собирает коллекцию редюсеров в главный
const rootReducer = combineReducers({
    counterReducer: counterReducer,
    themeReducer: themeReducer,
});
export default rootReducer;