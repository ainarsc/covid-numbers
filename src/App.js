import React from 'react';
// import logo from './logo.svg';
import {Home} from './components/pages'
import {Map} from './components/pages'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/map' component={Map} />
        <Route path='/' component={Home} />
      </Switch>
      <Map />
    </Router>
    
  );
}

export default App;
