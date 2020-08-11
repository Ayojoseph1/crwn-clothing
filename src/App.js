import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

function App() {
  return (
    <div className="App">
      <Switch>
      <Route  path='/' component={Homepage} />      
      <Route  path='/hats' component={HatsPage} />
      </Switch>
      
    </div>
  );
}

export default App;
