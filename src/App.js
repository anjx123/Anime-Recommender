import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import Home from './pages/Home';
import Results from './pages/Results';
import SingleView from './pages/SingleView';



function App() {
 
  return (
    
     <Router>
     
      <main>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/results" exact>
            <Results />
          </Route>
          <Route path="/single_view" exact>
            <SingleView />
          </Route>
          <Redirect>
            <Redirect to="/" />
          </Redirect>

        </Switch>
      </main>

    </Router>
 
  );
  
}

export default App;