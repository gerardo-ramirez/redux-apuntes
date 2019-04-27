export const saveOperation = (state,action)=>({
  //se hace copia del estado (nunca se modifica directamente)
  ...state,
  operations : state.operations.concat(action.operation)
})
//el action es un nombre generico, convencional y trae result de Calculator
//por eso es action.result
export const calculate = (state,action)=>({
  ...state,
  result : action.result
})
