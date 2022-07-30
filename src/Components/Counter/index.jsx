import React from 'react';
import  {connect} from 'react-redux'


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
        add: () => dispatch({type: 'ADD'}),
        sub: () => dispatch({type: 'SUB'}),
    }
}
const mapStates = (state) => { 
    const {value} = state; 
    return {value}
}

export default connect(mapStates ,mapActions) (Counter);
