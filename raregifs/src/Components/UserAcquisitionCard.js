import React from 'react';

function UserAcquisitionCard({ userAcquisition, currentUser, onAcquireArtwork }) {

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
            .then((newAcquisition) => onAcquireArtwork(newAcquisition))
    }
    
    return (
        <div className="acquisition-card">
            <img src={userAcquisition.artwork.image} alt={userAcquisition.artwork.title} />
            <h3>{userAcquisition.artwork.title}</h3>
            <h3>{userAcquisition.artwork.user_name}</h3>
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