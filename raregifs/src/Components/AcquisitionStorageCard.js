import React, { useState } from 'react'

function AcquisitionStorageCard({ 
    // currentUser, 
    userAcquisition,
}) {

    const [userAcquisitions, setUserAcquisitions] = useState([])
    // const [userAcquisitions, setUserAcquisitions] = useState(userAcquisitions)    

    function handleDeleteAcquisitionClick() {
        fetch(`http://localhost:3000/acquisitions/${userAcquisition.id}`, {
            method: "DELETE",
        });
        const updatedAcquisitionsArray = userAcquisitions.filter((acquisition) => acquisition.id !== userAcquisition.id);
        setUserAcquisitions(updatedAcquisitionsArray);
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

export default AcquisitionStorageCard;    





     // onDeleteAcquisition(artwork.acquisition.id);

//       function handleDeleteAcquisitionClick(id) {
//     const updatedAcquisitionsArray = acquisitions.filter((acquisition) => acquisition.id !== id);
//       setAcquisitions(updatedAcquisitionsArray);
//   } 