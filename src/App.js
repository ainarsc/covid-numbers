import React from 'react';
// import logo from './logo.svg';
import {Home, Map} from './components/pages'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/map' component={Map} />
      </Switch>
    </Router>
    
  );
}

export default App;
