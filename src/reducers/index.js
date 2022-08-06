import counterReducer from "./counterReducer";
import themeReducer from "./themeReducer";
import {combineReducers} from 'redux';
import userReducer from "./userReducer";
// собирает коллекцию редюсеров в главный
const rootReducer = combineReducers({
    counterReducer: counterReducer,
    themeReducer: themeReducer,
    user: userReducer,
});
export default rootReducer;