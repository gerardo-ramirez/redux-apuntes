export const saveOperation = (state,action)=>({
  //se hace copia del estado (nunca se modifica directamente)
  ...state,
  operations : state.operations.concat(action.operation)
});
//el action es un nombre redux, convencional y trae result de Calculator
//por eso es action.result
export const calculate = (state,action)=>({
  ...state,
  result : action.result
});
//trabajamos con el componente Contador.
//1-recibe el estado (contador del store) del store
//2-el action viene del mapDispacheToProps es el del punto
//donde usamos Dispatch pasando el type y el stado a cambiar
//en este caso contador, por eso es action.contador.

export const reducerSumar = (state,action)=>({
  ...state,
  contador : action.contador
});
export const reducerRestar = (state,action)=>({
  ...state,
  contador : action.contador
});
