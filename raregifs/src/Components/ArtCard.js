import React from 'react'
// import AcquisitionsPage from './AcquisitionsPage';

function ArtCard({ 
  artwork, 
  currentUser, 
  acquisitions, 
  setAcquisitions 
}) {
    
    const { title, image, user } = artwork

    function handleAcquireArtworkClick(e) {
        const acquisition = {
          user_id: currentUser.id,
          artwork_id: artwork.id,
        }
        e.preventDefault();
        fetch('http://localhost:3000/acquisitions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
             acquisition
          }),
        })
        .then(r => r.json())
        .then(newAcquisition => {
            let updatedAcquisitionsArray = [...acquisitions, newAcquisition]
          setAcquisitions(updatedAcquisitionsArray)
        })
      }

    return (
        <div className="art-card">
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <h3>{user.name}</h3>
            <div>
                {currentUser ? (
                    <>
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

export default ArtCard;