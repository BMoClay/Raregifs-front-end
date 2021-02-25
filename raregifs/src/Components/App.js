import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import ArtPage from './ArtPage';
import Login from './Login';
import Upload from './UploadArtForm';
import Signup from './Signup';

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch("http://localhost:3000/me")
    .then(r => r.json())
    .then(user => {
      setUser(user)
    })
  }, [])

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

              <Route path="/upload">
                <Upload user={user} setUser={setUser}/>
              </Route>
              
              <Route path="/signup">
                <Signup user={user} setUser={setUser}/>
              </Route>

            </Switch>
    </div>
  );
}

export default App;
