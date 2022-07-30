import React from 'react';
import  {connect} from 'react-redux'
import ACTION_TYPES from '../../actions/actionTypes';

function Counter(props) {
  return (<>
        <h1>{props.value}</h1>
        <button onClick={props.add}>+</button>
        <button onClick={props.sub}>-</button>
</>);}
const mapActions = (dispatch) => {
    return{
        add: () => dispatch({type: ACTION_TYPES.COUNTER_ADD}),
        sub: () => dispatch({type: ACTION_TYPES.COUNTER_SUB}),
    }
}
const mapStates = (state) => state.counterReducer;

export default connect(mapStates,
  mapActions) (Counter);
