import React, { useState } from 'react'

function AcquisitionCard({ user, acquisition, setAcquisition, onDeleteAcquisition }) {
    // const [acquisition, setAcquisition] = useState(acquisition)
    // const { user_id, artwork_id, title, image, id } = acquisition

    function handleAcquireClick(e) {
        const acquisition = {
            user_id: user.id, 
            artwork_id: artwork.id,
        }

        fetch('http://localhost:3000/acquisitions', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(acquisition),
        })
        .then(response => response.json())
        .then(newAcquisition => {
            setAcquisition(newAcquisition)
        })
      }    

    function handleDeleteClick() {
        fetch(`http://localhost:3000/artworks/${id}`, {
          method: "DELETE",
        });
        onDeleteArtwork(id);
      }    

    function handleDeleteAcquisitionClick() {
        fetch(`http://localhost:3000/acquisitions/${id}`, {
            method: "DELETE",
        });
        onDeleteAcquisition(id);
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

    console.log(acquisition)

    return (
        <div className="acquisition-card">
                { user ? (
                        <>
                            <img src={acquisition.artwork.image} alt={title} />
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
                            <button onClick={handleDeleteClick}>delete image</button>
                        </>
                    ) : (
                        <>
                            <img src={image} alt={title} />
                            <h3>{title}</h3>
                            <h3>{artwork.user.name}</h3>
                            <button onClick={handleAcquireClick}>acquire image</button>
                        </>
                    )}
                    {/* { user.id === acquisition.user.id ? (
                        <>
                            <img src={acquisition.artwork.image} alt={acquisition.artwork.title} />
                            <h3>{acquisition.artwork.title}</h3>
                            <h3>{acquisition.artwork.user.name}</h3>
                            <button onClick={handleDeleteAcquisitionClick}>remove from my acquisitions</button>
                        </>
                    ) : (
                        <>
                            <img src={acquisition.artwork.image} alt={acquisition.artwork.title} />
                            <h3>{acquisition.artwork.title}</h3>
                            <h3>{acquisition.artwork.user.name}</h3>
                            <button onClick={handleAcquireClick}>acquire image</button>
                        </>
                    )} */}
            <div className="acquisition-card">
                <img src={image} alt={title} />
                <h3>{title}</h3>
                <h3>{artwork.user.name}</h3>
                <button onClick={handleAcquireClick}>acquire image</button>
            </div>
        </div>
    );
}

export default ArtCard;