import React from 'react';
// import logo from './logo.svg';
import {Home, Map} from './components/pages'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/map' component={Map} />
        <Route exact path='/' component={Home} />
      </Switch>
    </Router>
    
  );
}

export default App;
