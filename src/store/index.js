import { configureStore } from '@reduxjs/toolkit'
const initialSate = {
    value: 0,
}
const reducer  = (state = initialSate, action) => {
    // action {type: ''}
    switch(action.type){
        case 'ADD': return {value: state.value + 1};
        case 'SUB': return {value: state.value - 1};
        default: return state;
    }
};
const store = configureStore({reducer : reducer});
export default store;
