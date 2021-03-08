import React, { useState } from 'react'

function StorageCardArt({ 
                artwork, 
                onDeleteArtwork, 
                onUpdateArtwork,
             }) {

    const aUsers = artwork.acquiring_users.map((user) => {
        return (
            <div key={user.id}>{user.name}</div>
        )
    })
    
    const { id, title, image } = artwork
    const [updatedTitle, setUpdatedTitle] = useState(title)

    function handleDeleteClick() {
        fetch(`http://localhost:3000/artworks/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(deletedArtwork => {
                onDeleteArtwork(deletedArtwork)
            })
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
                onUpdateArtwork(updatedArtwork)
            });
    }

    return (
        <div className="storage-card">
            <div>
                <img src={image} alt={title} />
                <h3>{title}</h3>
                <form onSubmit={handleUpdateArtworkSubmit}>
                    <input
                        type="text"
                        name="title"
                        autoComplete="off"
                        value={updatedTitle}
                        onChange={(e) => setUpdatedTitle(e.target.value)}
                    /><input type="submit" value="update title"/>
                </form>
                <button onClick={handleDeleteClick}>delete</button>
                <div>
                    {artwork.acquiring_users.length > 0? (
                        <>
                            <h4>collected by:{aUsers}</h4>
                        </>
                    ) : (
                        <>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default StorageCardArt;    