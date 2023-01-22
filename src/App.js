import React, { useState , useRef } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import Home from './pages/Home';
import Results from './pages/Results';
import SingleView from './pages/SingleView';
import { SearchContext } from './context/search';


function App() {
  const [profileData, setProfileData] = useState([]);
  const [singleData, setSingleData] = useState({});

  
  const setData = (data) => {
    setProfileData(data);
  };

  const setSingle = (data) => {
    setSingleData(data);
  };

  const search = (searchTerm) => {
    return fetch(
      `https://api.jikan.moe/v4/anime?q=${searchTerm}&limit=20&order_by=start_date&sort=desc`
    ).then((response) => response.json());

  };
 
  
  return (
    <SearchContext.Provider value={{search, profileData, setData, singleData, setSingle }}>

      

      <Router>

        <main>
          <Switch>
            <Route path="/" exact>
              <Home/>
            </Route>
            <Route path="/results" exact>
              <Results/>
            </Route>
            <Route path="/single-view" exact>
              <SingleView/>
            </Route>
            <Redirect to="/" />
          </Switch>
        </main>

      </Router>
      
    </SearchContext.Provider>
  );
}
  
export default App;