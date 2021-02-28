import React, { useState } from 'react'

function StorageCard({ 
  artwork, 
  currentUser, 
  acquisitions,
  setAcquisitions,
  onDeleteArtwork={onDeleteArtwork},
  onUpdateArtwork={onUpdateArtwork},
  onDeleteAcquisition={onDeleteAcquisition}

}) {
    const [updatedTitle, setUpdatedTitle] = useState(title)
    // const { title, image, user } = artwork
    console.log(artwork)
    console.log(artwork.acquisitions)

console.log(acquisitions)

    function handleDeleteAcquisitionClick() {
        fetch(`http://localhost:3000/acquisitions/${artwork.acquisition.id}`, {
            method: "DELETE",
        });
        onDeleteAcquisition(artwork.acquisition.id);
    }

    function handleDeleteClick() {
        fetch(`http://localhost:3000/artworks/${id}`, {
          method: "DELETE",
        });
        onDeleteArtwork(id);
      }    

    function handleUpdateArtworkSubmit(e) {
        e.preventDefault();
        fetch(`http://localhost:3000/artworks/${id}`, {
            method: "PATCH",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({ title: updatedTitle }),
        })
            .then((r) => r.json())
            .then((updatedArtwork) => {
            onUpdateArtwork(updatedArtwork);
            });
    }
    console.log(artwork.user)
    console.log(artwork)

    return (
        <div className="storage-card">
            <div>
                <img src={image} alt={title} />
                <h3>{title}</h3>
                <h3>{user.name}</h3>
                <button onClick={handleDeleteAcquisitionClick}>remove from collection</button>
            </div>
            <div>
            <img src={image} alt={title} />
                <h3>{title}</h3>
                <h3>{user.name}</h3>
                <form onSubmit={handleUpdateArtworkSubmit}>
                    <input
                        type="text"
                        name="title"
                        autoComplete="off"
                        value={updatedTitle}
                        onChange={(e) => setUpdatedTitle(e.target.value)}
                    /><input type="submit" value="update title"/>
                    <h3>{artwork.user.name}</h3>
                </form>
                <button onClick={handleDeleteClick}>delete</button>
            </div>
        </div>
    );
}

export default StorageCard;    

    

      {/* <button onClick={handleAcquireArtworkClick}>acquire image</button>
                        <>
                            <img src={image} alt={title} />
                         
                            <button onClick={handleDeleteClick}>delete image</button>
                        </>
                    ) : (
                        <>
                            <img src={image} alt={title} />
                            <h3>{title}</h3>
                            <h3>{artwork.user.name}</h3>
                            <button onClick={handleAcquireArtworkClick}>acquire image</button>
                        </>
                    ) */}