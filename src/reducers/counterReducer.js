import ACTION_TYPES from '../actions/actionTypes';

const initialSate = {
    value: 0,
}
// чистая функция которая возвращает состояние
const counterReducer  = (state = initialSate, 
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
export default counterReducer;