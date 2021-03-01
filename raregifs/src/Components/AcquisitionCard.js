import React from 'react';
import { useHistory } from 'react-router-dom';

function AcquisitionCard({ 
    thisUser,
    userAcquisition,
    currentUser, 
    onAcquireArtwork,
}) {

    const history = useHistory()

    function handleAcquireArtworkClick(e) {
        e.preventDefault();
        fetch('http://localhost:3000/acquisitions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              user_id: currentUser.id,
              artwork_id: userAcquisition.artwork.id
          }),
        })
        .then(r => r.json())
        .then((newAcquisition) => {
            onAcquireArtwork(newAcquisition)
            history.pushState(`/acquisitions/${newAcquisition.id}`)
        })
      }   
      console.log(thisUser)
      console.log(userAcquisition)
    return (
        <div className="acquisition-card">
            <img src={userAcquisition.artwork.image} alt={userAcquisition.artwork.title} />
            <h3>{userAcquisition.artwork.title}</h3>
            <h3>{userAcquisition.artwork.user_name}</h3>
            <div>
                {currentUser ? (
                    <>
                    {/* <button onClick={handleDeleteAcquisitionClick}>remove from collection</button> */}
                    <button onClick={handleAcquireArtworkClick}>acquire image</button>
                    </>
                ) : (
                    <>
                    </>
                )}
            </div>
        </div>
    );
}

export default AcquisitionCard;