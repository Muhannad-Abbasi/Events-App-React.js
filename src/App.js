import React from 'react';
import './App.css';
import { Route , Switch} from 'react-router-dom';
import Home from './Components/Home';
import Confirmation from './Components/Confirmation';
import Complete from './Components/Complete';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/confirmation/:id' component={Confirmation} />
        <Route path='/complete/:id' component={Complete} />
      </Switch>
    </div>
  );
}

export default App;
