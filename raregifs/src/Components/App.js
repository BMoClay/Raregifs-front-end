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
  const [acquisitions, setAcquisitions] = useState([])

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

  useEffect(() => {
      fetch('http://localhost:3000/acquisitions')
          .then(r => r.json())
          .then(acquisitionsArray => {
              setAcquisitions(acquisitionsArray);
          })
  }, [])

  console.log(acquisitions)

  function handleDeleteAcquisition(id) {
    const updatedAcquisitionsArray = acquisitions.filter((acquisition) => acquisition.id !== id);
      setAcquisitions(updatedAcquisitionsArray);
  } 

  function handleDeleteArtwork(id) {
    const updatedArtworksArray = artworks.filter((artwork) => artwork.id !== id);
      setArtworks(updatedArtworksArray);
  } 

  function handleUpdateArtwork(updatedArtwork) {
    const updatedArtworksArray = artworks.map((artwork) => {
      if (artwork.id === updatedArtwork.id) {
        return updatedArtwork;
      } else {
        return artwork;
      }
    })
    setArtworks(updatedArtworksArray);
  }

   return (
    <div className="app">
        <NavBar user={user} setUser={setUser} />
            <Switch>
          
              <Route path="/login">
                <Login setUser={setUser}/>
              </Route>

              {/* <Route path="/artworks"> */}
              <Route path="/" >
                <ArtPage 
                  user={user} 
                  setUser={setUser} 
                  artworks={artworks} 
                  setArtworks={setArtworks}
                  acquisitions={acquisitions}
                  setAcquisitions={setAcquisitions}
                  onDeleteAcquisition={handleDeleteAcquisition}
                  onDeleteArtwork={handleDeleteArtwork}
                  onUpdateArtwork={handleUpdateArtwork}
                  />
              </Route>

              <Route path="/acquisitions">
                <Acquisitions 
                  user={user}
                />
              </Route>

              <Route path="/upload">
                <Upload 
                  user={user} 
                  setUser={setUser} 
                  artworks={artworks} 
                  setArtworks={setArtworks}/>
              </Route>
              
              <Route exact path="/signup">
                <Signup setUser={setUser}/>
              </Route>

            </Switch>
    </div>
  );
}
export default App;
