import React, { useState , useRef, useEffect } from 'react';
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
import PageHeader from './components/PageHeader';


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
      `https://api.myanimelist.net/v2/users/${searchTerm}/animelist?limit=20&status=completed&sort=list_score&fields=mean,synopsis,genre,popularity,rank,media_type,start_season,list_status`, {
      method: 'GET',
      headers: {'X-MAL-CLIENT-ID': 'fbff9778d6f0ac20c5a30f6af55f207e'}
    })
    .then((response) => response.json());

  };
 
  
  return (
    <SearchContext.Provider value={{search, profileData, setData, singleData, setSingle }}>

      

      <Router>
      <PageHeader/>

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