import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { useState } from 'react';
import Home from './assets/pages/Home';
import Certificate from './assets/pages/Cerificate';
import Input from './assets/pages/Input';

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/" exact component = {Home}/>
        <Route component={Input}/>
      </Switch>
    </Router>
  )
}

export default App
