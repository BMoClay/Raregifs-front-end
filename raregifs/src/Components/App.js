import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Signup from './Signup';
import Login from './Login';
import Upload from './UploadArtForm';
import ArtPage from './ArtPage';
import UserPage from './UserPage';
import StoragePage from './StoragePage';
import Account from './Account';

function App() {
    const [currentUser, setCurrentUser] = useState(null)
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

    function handleAddAcquisition(newUserAcq) {
      const updatedAcquisitionsArray = [newUserAcq, ...acquisitions]
      setAcquisitions(updatedAcquisitionsArray)
    }

    function handleAddArtwork(newArtwork) {
        const updatedArtworksArray = [newArtwork, ...artworks];
        setArtworks(updatedArtworksArray)
    } 

    function handleDeleteAcquisition(acquisitionObject) {
        const { id } = acquisitionObject
        const updatedAcqA = acquisitions.filter((acquisition) => acquisition.id !== id);
        setAcquisitions(updatedAcqA);
    } 

    function handleUpdateArtwork(updatedArtwork) {
        const updatedArtA = artworks.map((artwork) => {
            if (artwork.id === updatedArtwork.id) {
                return updatedArtwork;
            } else {
                return artwork;
            }
        })
        setArtworks(updatedArtA);
    }

    function handleDeleteArtwork(id) {
        const updatedArtworksArray = artworks.filter((artwork) => artwork.id !== id);
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
                      artworks={artworks} 
                      onAcquireArtwork={handleAddAcquisition}/>
                </Route>
                <Route exact path="/users">
                  <UserPage 
                      acquisitions={acquisitions} 
                      currentUser={currentUser} 
                      onAcquireArtwork={handleAddAcquisition}/>
                </Route>
                <Route exact path="/upload">
                  <Upload currentUser={currentUser} onCreateArtwork={handleAddArtwork}/>
                </Route>
                <Route exact path="/storage">
                  <StoragePage 
                      currentUser={currentUser}
                      acquisitions={acquisitions}
                      artworks={artworks}
                      onDeleteArtwork={handleDeleteArtwork}
                      onDeleteAcquisition={handleDeleteAcquisition}
                      onUpdateArtwork={handleUpdateArtwork}
                      />
                </Route>
                <Route exact path="/account">
                  <Account setCurrentUser={setCurrentUser} currentUser={currentUser}/>
                </Route>
                <Route exact path="/signup">
                  <Signup setCurrentUser={setCurrentUser}/>
                </Route>
              </Switch>
      </div>
    );
}
export default App;




