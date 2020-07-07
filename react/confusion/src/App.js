import React, { Component } from 'react';
import logo from './logo.svg';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { DISHES } from './shared/dishes';
import { ConfigStore } from './redux/configurestore';
import { Provider } from 'react-redux';

const store = ConfigStore();

class App extends Component {

  
  render() {
    return (
      <Provider store = {store}>
    	<BrowserRouter>
    <div>
      <Main />
     </div> 
     </BrowserRouter>
     </Provider>
   
  );
  }

} 

export default App;

