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
    const updatedAcquisitionsArray = [newAcquisition, ...acquisitions];
    setAcquisitions(updatedAcquisitionsArray)
  }
  function handleAddArtwork(newArtwork) {
    const updatedArtworksArray = [newArtwork, ...artworks, ];
    setAcquisitions(updatedArtworksArray)
  }

  // console.log(users)

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
                  artworks={artworks} 
                  onAcquireArtwork={handleAddAcquisition}
                  />
              </Route>
              <Route exact path="/acquisitions">
                <Acquisitions
                  users={users}
                  currentUser={currentUser}
                  onAcquireArtwork={handleAddAcquisition}
                />
              </Route>
              <Route exact path="/upload">
                <Upload 
                  currentUser={currentUser}
                  onCreateArtwork={handleAddArtwork}
                />
              </Route>
              <Route exact path="/storage">
                <Storage
                  currentUser={currentUser}
                  users={users} 
                  // acquisitions={acquisitions}
                  // artworks={artworks}
                  // setAcquisitions={setAcquisitions} 
                  // setArtworks={setArtworks}
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
