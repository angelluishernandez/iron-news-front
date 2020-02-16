import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Login from './components/misc/Login';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/login" component={Login}></Route>
      </Switch>
    </div>
  );
}

export default App;
