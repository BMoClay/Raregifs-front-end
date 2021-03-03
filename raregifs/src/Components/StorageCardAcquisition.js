import React from 'react'

function StorageCardAcquisition({ acquisition, artwork, onDeleteAcquisition }) {
    
    const { id } = acquisition

    function handleDeleteAcquisitionClick() {
        fetch(`http://localhost:3000/acquisitions/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(deletedAcquisition => {
                onDeleteAcquisition(deletedAcquisition)
            })
    }

    return (
        <div className="storage-card">
            <img src={artwork.image} alt={artwork.title} />
            <h3>{artwork.title}</h3>
            <h3>{artwork.user_name}</h3>
            <button onClick={handleDeleteAcquisitionClick}>remove from collection</button>
        </div>
    );
}

export default StorageCardAcquisition;    