import {createStore} from 'redux';
const initialSate = {
    value: 0,
}
const reducer  = (state = initialSate, action) => {
    switch(action.type){
        case 'ADD': return {value: state.value + 1};
        case 'SUB': return {value: state.value - 1};
        default: return state;
    }
};
const store = createStore(reducer);
export default store;
