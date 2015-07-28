// import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
// import { Connector } from 'react-redux';
// import Main from '../components/Main';
// import * as SomeappActions from '../actions/SomeappActions';

// export default class SomeApp extends Component {
//   render() {
//     return (
//       <Connector select={state => ({ someapp: state.someapp })}>
//         {this.renderChild}
//       </Connector>
//     );
//   }

//   renderChild({ someapp, dispatch }) {
//     const actions = bindActionCreators(SomeappActions, dispatch);
//     return (
//       <div>
//         <Main someapp={someapp} actions={actions} />
//       </div>
//     );
//   }
// }
