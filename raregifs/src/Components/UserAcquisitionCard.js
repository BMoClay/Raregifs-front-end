import React from 'react';

function UserAcquisitionCard({ 
                aArtwork, 
                cUId, 
                onAcquireArtwork,
             }) {

    function handleAcquireArtworkClick(e) {
        e.preventDefault();
        fetch('http://localhost:3000/acquisitions', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user_id: cUId,
                artwork_id: aArtwork.id
            }),
        })
            .then(r => r.json())
            .then((newUserAcq) => onAcquireArtwork(newUserAcq))
    }
    
    return (
        <div className="acquisition-card">
            <img src={aArtwork.image} alt={aArtwork.title} />
            <h2>{aArtwork.title}</h2>
            <h4>{aArtwork.user_name}</h4>
            <div>
                {cUId ? (
                    <>
                    <button onClick={handleAcquireArtworkClick}>
                        acquire image
                    </button>
                    </>
                ) : (
                    <>
                    </>
                )}
            </div>
            <br></br>
            <br></br>
        </div>
    );
}

export default UserAcquisitionCard;