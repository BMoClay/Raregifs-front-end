import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import ArtPage from './ArtPage';
import Login from './Login';
import Upload from './UploadArtForm';
import Signup from './Signup';
import Acquisitions from './AcquisitionsPage';
import Storage from './Storage';

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [users, setUsers] = useState([])
  const [artworks, setArtworks] = useState([]);
  const [acquisitions, setAcquisitions] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/me")
    .then(r => r.json())
    .then(user => {
      setCurrentUser(user)
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

  useEffect(() => {
    fetch('http://localhost:3000/users')
        .then(r => r.json())
        .then(usersArray => {
            setUsers(usersArray);
        })
  }, [])

  function handleAddAcquisition(newAcquisition) {
    const updatedAcquisitionsArray = [...acquisitions, newAcquisition];
    setAcquisitions(updatedAcquisitionsArray)
  }

  function handleDeleteAcquisitionClick(id) {
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
        <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser} />
            <Switch>
              <Route exact path="/login">
                <Login setCurrentUser={setCurrentUser}/>
              </Route>
              <Route exact path="/" >
                <ArtPage 
                  currentUser={currentUser} 
                  acquisitions={acquisitions}
                  setCurrentUser={setCurrentUser} 
                  artworks={artworks} 
                  setArtworks={setArtworks}
                  setAcquisitions={setAcquisitions}
                  onDeleteArtwork={handleDeleteArtwork}
                  onUpdateArtwork={handleUpdateArtwork}
                  // onDeleteAcquisition={handleDeleteAcquisitionClick}
                  onAcquireArtwork={handleAddAcquisition}
                  />
              </Route>
              <Route exact path="/acquisitions">
                <Acquisitions
                  users={users}
                  // artworks={artworks}
                  currentUser={currentUser} 
                  acquisitions={acquisitions}
                  setAcquisitions={setAcquisitions}
                  onAcquireArtwork={handleAddAcquisition}
                  // onDeleteAcquisition={handleDeleteAcquisitionClick} 
                />
              </Route>
              <Route exact path="/upload">
                <Upload 
                  artworks={artworks}
                  setArtworks={setArtworks}
                  currentUser={currentUser} 
                />
              </Route>
              <Route exact path="/storage">
                <Storage
                  acquisitions={acquisitions}
                  currentUser={currentUser} 
                  artworks={artworks}
                  setAcquisitions={setAcquisitions} 
                  setArtworks={setArtworks}
                  onDeleteArtwork={handleDeleteArtwork}
                  onUpdateArtwork={handleUpdateArtwork}
                  onDeleteAcquisition={handleDeleteAcquisitionClick}
                  />
              </Route>
              <Route exact path="/signup">
                <Signup 
                  setCurrentUser={setCurrentUser}/>
              </Route>
            </Switch>
    </div>
  );
}
export default App;
