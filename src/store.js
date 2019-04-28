import {createStore } from 'redux';
//actions , condicion.
import { SAVE_OPERATION } from './actions';
import { CALCULATE } from './actions';
//funciones que retornan los casos :
import { saveOperation }  from './reducer';
import  { calculate } from './reducer';
//PARA COMPONENTE CONTADOR
// importamos actions
import { SUMAR } from './actions';
import { RESTAR } from './actions';

//funciones de su reducer
import { reducerRestar }  from './reducer';
import  { reducerSumar } from './reducer';
const reducer = (state,action)=>{
  switch (action.type) {
    //si el action pasado tiene ese nombre pasa esto:
    case SAVE_OPERATION:
    //funcion que se creará en los reducer. y se encarga del cambio de estado
    return saveOperation(state,action)
    case CALCULATE:
    return calculate(state,action)
    case SUMAR:
    return reducerSumar(state,action)
    case RESTAR:
    return reducerRestar(state,action)
    //siempre damos una accion por defecto. Generalmente es devolver el estado.
    default :
    return state


  }
};
const initialState = {
  operations : [],
  result: 0,
  contador:0
}
export default  createStore(reducer,initialState)
