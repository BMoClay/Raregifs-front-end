import React from 'react'

function AcquisitionCard({ 
    user,
    currentUser, 
    thisCollection,
    acquisitions,
    setAcquisitions, 
}) {

    function handleAcquireArtworkClick(e) {
        e.preventDefault();
        fetch('http://localhost:3000/acquisitions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              user_id: currentUser.id,
              artwork_id: user.acquisition.artwork.id
          }),
        })
        .then(r => r.json())
        .then(newAcquisition => {
            let updatedAcquisitionsArray = [...acquisitions, newAcquisition]
          setAcquisitions(updatedAcquisitionsArray)
        })
      }   
      console.log(thisCollection)
      console.log(currentUser)
      console.log(thisCollection)
      console.log(user)
      console.log(user.acquisitions)
    
    return (
        <div className="acquisition-card">
            <img src={user.acquisition.artwork.image} alt={user.acquisition.artwork.title} />
            <h3>{user.acquisition.artwork.title}</h3>
            <h3>{user.acquisition.artwork.user.name}</h3>
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