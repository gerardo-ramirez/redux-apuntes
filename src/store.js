import {createStore } from 'redux';
import { SAVE_OPERATION } from './actions';
import { CALCULATE } from './actions';
import { saveOperation }  from './reducer';
import  { calculate } from './reducer';
const reducer = (state,action)=>{
  switch (action.type) {
    //si el action pasado tiene ese nombre pasa esto:
    case SAVE_OPERATION:
    //funcion que se creará en los reducer. y se encarga del cambio de estado
    return saveOperation(state,action)
    case CALCULATE:
    return calculate(state,action)
    default :
    return state


  }
};
const initialState = {
  operations : [],
  result: 0
}
export default  createStore(reducer,initialState)
