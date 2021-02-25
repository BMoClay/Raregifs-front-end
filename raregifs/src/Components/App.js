import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import ArtPage from './ArtPage';
import Login from './Login';




function App() {

  const [user, setUser] = useState(null)


  return (
    <div className="app">
        <NavBar user={user} setUser={setUser}/>
            <Switch>
          
              <Route path="/login">
                <Login setUser={setUser}/>
              </Route>

              <Route path="/artworks">
                <ArtPage setUser={setUser} />
              </Route>

            </Switch>
    </div>
  );
}

export default App;
