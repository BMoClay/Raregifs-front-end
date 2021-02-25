import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import ArtPage from './ArtPage';
import Login from './Login';
import Upload from './UploadArtForm';
import Signup from './Signup';

function App() {
  const [user, setUser] = useState(null)
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/me")
    .then(r => r.json())
    .then(user => {
      setUser(user)
    })
  }, [])

  useEffect(() => {
      fetch('http://localhost:3000/artworks')
        .then(r => r.json())
        .then((artworksArray) => {
            setArtworks(artworksArray);
        });
      }, [])  

   return (
    <div className="app">
        <NavBar user={user} setUser={setUser} />
            <Switch>
          
              <Route path="/login">
                <Login setUser={setUser}/>
              </Route>

              {/* <Route path="/artworks"> */}
              <Route path="/">
                <ArtPage setUser={setUser} artworks={artworks} setArtworks={setArtworks}/>
              </Route>

              <Route path="/upload">
                <Upload user={user} setUser={setUser} artworks={artworks} setArtworks={setArtworks}/>
              </Route>
              
              <Route path="/signup">
                <Signup setUser={setUser}/>
              </Route>

            </Switch>
    </div>
  );
}
export default App;
