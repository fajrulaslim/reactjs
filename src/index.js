import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import HelloComponent from './component/HelloComponent'
// import {createStore} from 'redux'
// import {Provider} from 'react-redux'
// import rootReducer from './redux/reducer/globalReducer'

// Store
// const storeRedux = createStore(rootReducer)

// class StateFullComponent extends React.Component {
//   render() {
//     return <p>Hello Statefull component</p>
//   }
// }

// REDUX
// ReactDOM.render(
//   <Provider store={storeRedux}><App /></Provider>,
//   document.getElementById('root')
// );

// CONTECT
ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
