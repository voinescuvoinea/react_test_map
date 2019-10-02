import React from 'react';
import {Provider}  from 'react-redux';
import store from './store';
import './css/styles.css'
import AppContainer from "./components/MapContainer";
import Info from "./components/Info";

function App() {
  return (
    <Provider store={store}>
            <AppContainer/>
            <Info/>
    </Provider>
  );
}

export default App;
