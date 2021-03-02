import React from 'react'

function StorageCardAcquisition({ userAcquisition, onDeleteAcquisition }) {
    
    function handleDeleteAcquisitionClick() {
        fetch(`http://localhost:3000/acquisitions/${userAcquisition.id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(deletedAcquisition => {
                onDeleteAcquisition(deletedAcquisition)
            })
    }

    return (
        <div className="storage-card">
            <img src={userAcquisition.artwork.image} alt={userAcquisition.artwork.title} />
            <h3>{userAcquisition.artwork.title}</h3>
            <h3>{userAcquisition.artwork.user_name}</h3>
            <button onClick={handleDeleteAcquisitionClick}>remove from collection</button>
        </div>
    );
}

export default StorageCardAcquisition;    