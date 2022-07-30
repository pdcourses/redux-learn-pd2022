import { configureStore } from '@reduxjs/toolkit';
import ACTION_TYPES from '../actions/actionTypes';

const initialSate = {
    value: 0,
}
// чистая функция которая возвращает состояние
const reducer  = (state = initialSate, 
    action) => {
    // action {type: ''}
    switch(action.type){
        case ACTION_TYPES.COUNTER_ADD: return {
            value: state.value + 1};
        case ACTION_TYPES.COUNTER_SUB: return {
            value: state.value - 1};
        default: return state;
    }
};
const store = configureStore({reducer : reducer});
export default store;
