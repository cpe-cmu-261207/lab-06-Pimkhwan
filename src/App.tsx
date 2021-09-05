import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Current from './components/Current';
import Result from './components/Result';
import Select from './components/Select';

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
       
        <Route exact path='/'>
          <Current />
        </Route>
        <Route path='/current'>
          <Current />
        </Route>

        <Route path='/history/select'>
          <Select />
        </Route>


       
        <Route path='/history/result'>
          <Result />
        </Route>


  
        <Route path='/about'>
          <About />
        </Route>
      </Switch>

    </Router>
  );
}

export default App;