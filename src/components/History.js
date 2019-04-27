import React from 'react';
import { connect } from 'react-redux';

const History = props => (
  props.operations.length > 0
  ?
  <table>
  <thead>
  <tr>
  <th>Operation</th>
  </tr>
  </thead>
  <tbody>
  {
    props.operations.map(operation =>(
      <tr>
      <td> { operation } </td>
      </tr>
    ))

  }
  </tbody>
  </table>
  : <p>No hay operaciones</p>
)
const mapStateToProps = (state )=>({
  operations : state.operations
})
export default connect(mapStateToProps)(History);
