import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Login from './components/misc/Login';
import AuthenticatedRoute from './components/misc/AuthenticatedRoute';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/login" component={Login}/>
      </Switch>
    </div>
  );
}

export default App;
