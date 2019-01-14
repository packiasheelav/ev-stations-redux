import React, { Component } from 'react';
import EvStationsList from './container/EvStationsList'
import { Container } from 'reactstrap';

import { Provider } from 'react-redux';
import store from './store';

// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App =()=> {
    return (
      <Provider store={store}>
        <div className="App">
        <EvStationsList />

        </div>
      </Provider>
    );
  }

export default App;