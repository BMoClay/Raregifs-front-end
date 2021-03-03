import React from 'react';

function UserAcquisitionCard({ acquisition, currentUser, onAcquireArtwork }) {

    function handleAcquireArtworkClick(e) {
        e.preventDefault();
        fetch('http://localhost:3000/acquisitions', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user_id: currentUser.id,
                artwork_id: acquisition.artwork.id
            }),
        })
            .then(r => r.json())
            .then((newAcquisition) => onAcquireArtwork(newAcquisition))
    }
    
    return (
        <div className="acquisition-card">
            <img src={acquisition.artwork.image} alt={acquisition.artwork.title} />
            <h3>{acquisition.artwork.title}</h3>
            <h3>{acquisition.artwork.user_name}</h3>
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

export default UserAcquisitionCard;