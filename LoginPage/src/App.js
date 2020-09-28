import React,{Component} from 'react';
import Grid from '@material-ui/core/Grid';
import './App.css';
import Login from './login/login.component'
import Home from './home/home.component';
import { BrowserRouter, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Route path="/" exact component={Login}/>
      <Route path="/home" component={Home}/>
    </div>
  );
}
export default App;
