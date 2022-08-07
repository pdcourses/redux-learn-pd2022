import counterReducer from "./counterReducer";
import themeReducer from "./themeReducer";
import {combineReducers} from 'redux';
import userReducer from "./userReducer";
import userDataReducer from "./userDataReducer";
// собирает коллекцию редюсеров в главный
const rootReducer = combineReducers({
    counterReducer: counterReducer,
    themeReducer: themeReducer,
    user: userReducer,
    userData: userDataReducer,
});
export default rootReducer;