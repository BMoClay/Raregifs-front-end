import React, { useEffect, useState } from 'react';
import { Switch, Route} from 'react-router-dom';
import axios from 'axios';
import NavBar from './NavBar';
import Signup from './Signup';
import Login from './Login';
import Upload from './UploadArtForm';
import ArtPage from './ArtPage';
import UserPage from './UserPage';
import StoragePage from './StoragePage';
import Account from './Account';
import Demo from './Demo';
//import DelayMessage from './DelayMessage';

function App() {
  
  const [currentUser, setCurrentUser] = useState(null)
  const [artworks, setArtworks] = useState([]);
  const [users, setUsers] = useState([])
  const [acquisitions, setAcquisitions] = useState([])
  const [comments, setComments] = useState([])
  
  const [isReady, setReady] = useState(false)
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setReady(true)
      }, 6000);
      return () => clearTimeout(timer);
    }, []);


    useEffect(() => {
      axios.get("/me").then((response) => {
           setCurrentUser(response.data)
        });
    }, [])
   
    useEffect(() => {
      axios.get('/artworks')
        .then((response) => {
            setArtworks(response.data.reverse());
        });
    }, []) 

    
    useEffect(() => {
      axios.get('/users')
          .then((response) => {
              setUsers(response.data);
          })
    }, [])

    useEffect(() => {
      axios.get('/acquisitions')
          .then((response) => {
              setAcquisitions(response.data);
          })
    }, [])

    useEffect(() => {
      axios.get('/comments')
          .then(response => {
              setComments(response.data);
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
        const { id } = (updatedArtwork)
        const updatedArtA = artworks.map((artwork) => {
            if (artwork.id === id) {
                return updatedArtwork;
            } else {
                return artwork;
            }
        })
        setArtworks(updatedArtA);
    }


    function handleDeleteArtwork(artworkObj) {
        const { id } = artworkObj
        const updatedArtworksArray = artworks.filter((artwork) => artwork.id !== id);
        setArtworks(updatedArtworksArray);
    }  

    function handleDeleteUser(userObj) {
      console.log(userObj)
      const { id } = userObj
      const updatedUsersArray = users.filter((user) => user.id !== id);
      setUsers(updatedUsersArray);
  } 

    function handleAddComment(newComment) {
      const updatedCommentsArray = [newComment, ...comments];
      setComments(updatedCommentsArray)
  } 

  function handleDeleteComment(commentObj) {
      const { id } = commentObj
      const updatedCommentsArray = comments.filter((comment) => comment.id !== id);
      setComments(updatedCommentsArray);
  } 
        
      return (
        isReady === false ? (
        <>
        <br></br>
        <h4 style={{textAlign: 'center'}}>Please Wait... Sometimes this can take a minute to load everything :) If it's your first time here checkout the demo video. Raregifs works best w Google Chrome</h4>
        </>
        ) : 
        (
        <div className="app">
            <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser} />
                <Switch>
                  {currentUser ? (
                    <>
                    <Route exact path="/studio">
                      <Upload currentUser={currentUser} onCreateArtwork={handleAddArtwork}/>
                    </Route>
                    <Route exact path="/my_storage">
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
                      <Account 
                      setCurrentUser={setCurrentUser} 
                      currentUser={currentUser}
                      onDeleteUser={handleDeleteUser}
                      />
                    </Route>
                    <Route exact path="/" >
                      <ArtPage 
                        currentUser={currentUser} 
                        artworks={artworks} 
                        onAcquireArtwork={handleAddAcquisition}/>
                    </Route>
                    <Route exact path="/users_collections">
                      <UserPage 
                        users={users}
                        comments={comments}
                        acquisitions={acquisitions} 
                        currentUser={currentUser} 
                        onAcquireArtwork={handleAddAcquisition}
                        onAddComment={handleAddComment}
                        onDeleteComment={handleDeleteComment}
                        />
                    </Route>
                    <Route exact path="/demo">
                      <Demo/>
                    </Route>
                    </>
                  ) : (
                    <>
                    <Route exact path="/login">
                      <Login setCurrentUser={setCurrentUser}/>
                    </Route>
                    <Route exact path="/signup">
                      <Signup setCurrentUser={setCurrentUser}/>
                    </Route>
                    <Route exact path="/" >
                      <ArtPage 
                        currentUser={currentUser} 
                        artworks={artworks} 
                        onAcquireArtwork={handleAddAcquisition}/>
                    </Route>
                    <Route exact path="/demo">
                      <Demo/>
                    </Route>
                    </>
                  )}
                </Switch>
       </div>
      ));
}

export default App;