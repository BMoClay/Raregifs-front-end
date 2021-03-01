import React from 'react';
import { useHistory } from 'react-router-dom';

function ArtCard({ 
  artwork, 
  currentUser, 
  onAcquireArtwork, 
}) {
    
    const history = useHistory()
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
        .then((newAcquisition) => {
          onAcquireArtwork(newAcquisition)
          history.push(`/acquisitions/${newAcquisition.id}`);
        });
      }

    return (
        <div className="art-card">
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <h3>{user.name}</h3>
            <button className="button" onClick={handleAcquireArtworkClick}>acquire image</button>
        </div>
    );
}

export default ArtCard;