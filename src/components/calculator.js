import React from 'react';
//connect conecta redux con react
import { connect } from 'react-redux';
import { CALCULATE } from './../actions';// importamos constantes
import { SAVE_OPERATION} from './../actions';// importamos constantes

//1-cuando le damos click se ejecuta esta funcion
const calculate = (props)=>{
  let numberOne = document.getElementById('value-one').value;
  let numberTwo = document.getElementById('value-two').value;
  let result = Number(numberOne) + Number(numberTwo);
  //2-luego el resultado llega aqui lo pasamos a la funcion mapdispatch.
  props.calculateOperation(result);
  props.saveOperation(`${numberOne} + ${numberTwo} = ${result}`);
}
const Calculator = (props)=>(
  <div>
  <input type='number' placeholder='number1' id='value-one'/>
  <input type='number' placeholder='number2' id='value-two'/>
  <br/>
  <button onClick={()=>calculate(props)}>Calcular</button>
  <br/>
  <span>El resultado es : { props.result } </span>

  </div>
)
//esta funcion lee el estado del store
const mapStateToProps= state =>({
  result : state.result
});
//esta funcion cambia el estado del store en el lugar que indicamos en type.
const mapDispatchToProps = dispatch => ({
  //esta funcion se usa como propiedad en el componente.
  calculateOperation(result) {
    //3-luego de que le llega el resultado le pasa ese resultado a CALCULATE
    //OSEA SOLICITA AL STORE CAMBIO DEL ESTADO DONDE EL TIPO SEA calculate
//y su payload sea result
    dispatch({
      type: CALCULATE,//esta es una action
      result //este seria su peyload
    })

  },
  saveOperation(operation) {
    dispatch({
      type: SAVE_OPERATION,//otra action
      operation //su peyload

    })
  }
})
export default connect(mapStateToProps,mapDispatchToProps)(Calculator);
