import React from 'react';
import  {connect} from 'react-redux'
import * as actionCreators from '../../actions';
function Counter(props) {
  return (
    <>
        <h1>{props.value}</h1>
        <button onClick={props.add}>+</button>
        <button onClick={props.sub}>-</button>
    </>
);
}
const mapActions = (dispatch) => {
    return{
        add: () => dispatch(actionCreators.add()),
        sub: () => dispatch(actionCreators.sub()),
    }
}
const mapStates = (state) => state.counterReducer;

export default connect(mapStates,
  mapActions) (Counter);
