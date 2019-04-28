import React from 'react';
//connect conecta redux con react
import { connect } from 'react-redux'; //esta funcion viene de react-redux
import { SUMAR} from './../actions';// importamos constantes
import { RESTAR } from './../actions';// importamos constantes

//1-cuando le damos click se ejecuta esta funcion
const sumando = (props)=>{
 const contador = props.contador + 1 ;
 props.reducerSumar(contador);
}
const restando = (props) => {
 const contador= props.contador - 1 ;
  props.reducerRestar(contador);


}
const Contador = (props)=>(
  <div>
<h2> Contador</h2>
//aqui leemos el estado del store pasado por props.
<div>El resultado es : { props.contador } </div>

  <button onClick={()=>sumando(props)}>sumar</button>

  <button onClick={()=>restando(props)}>Restar</button>



  </div>
)
//esta funcion lee el estado del store lo trae como props de mi componente.
const mapStateToProps= state =>({
  contador : state.contador
});
//esta funcion cambia el estado del store en el lugar que indicamos en type.
const mapDispatchToProps = dispatch => ({
  //estas funciones cambian el estado del store /props de componente.
  reducerSumar(contador) {

    //solicita al store el cambio del stado donde el type sea SUMAR
//y como segundo parametro el elemento del state a acualizar osea contador.
    dispatch({
      type: SUMAR,//esta es una action
      contador : contador//este seria el parametro a actualizar,recibido arriba
    })

  },
  reducerRestar(contador) {
    dispatch({
      type: RESTAR,//otra action
      contador //su peyload

    })
  }
})
export default connect(mapStateToProps,mapDispatchToProps)(Contador);
