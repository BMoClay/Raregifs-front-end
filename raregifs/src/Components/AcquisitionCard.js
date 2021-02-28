import React from 'react'

function AcquisitionCard({ 
    currentUser, 
    acquisition, 
    acquisitions, 
    setAcquisitions, 
    onDeleteAcquisition 
}) {
    
    const { id, artwork } = acquisition

    console.log(artwork.user)

    function handleAcquireArtworkClick(e) {
        // const acquisition = {
        //   user_id: currentUser.id,
        //   artwork_id: acquisition.artwork.id,
        // }
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
        .then(newAcquisition => {
            let updatedAcquisitionsArray = [...acquisitions, newAcquisition]
          setAcquisitions(updatedAcquisitionsArray)
        })
      }   

    function handleDeleteAcquisitionClick() {
        fetch(`http://localhost:3000/acquisitions/${id}`, {
            method: "DELETE",
        });
        onDeleteAcquisition(id);
    } 

    console.log(artwork)

    return (
        <div className="acquisition-card">
            <img src={artwork.image} alt={artwork.title} />
            <h3>{artwork.title}</h3>
            <h3>{artwork.user.name}</h3>
            <div>
                {currentUser ? (
                    <>
                    <button onClick={handleDeleteAcquisitionClick}>remove from collection</button>
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