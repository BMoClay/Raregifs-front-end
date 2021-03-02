import React, {  useState } from 'react'
import { useHistory } from 'react-router-dom';

function ArtStorageCard({ 
    userArtwork, 
    // currentUser, 
}) {

    let history = useHistory()
    const { title, id, image } = userArtwork
    // const [updatedTitle, setUpdatedTitle] = useState("")
    const [userArtworks, setUserArtworks] = useState([])

    const [updatedTitle, setUpdatedTitle] = useState(title)
    // const [userArtworks, setUserArtworks] = useState(userArtworks)

    function handleDeleteClick() {
        fetch(`http://localhost:3000/artworks/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(artwork => {
                const updatedUserArtworksArray = userArtworks.filter((artwork) => artwork.id !== userArtwork.id);
                setUserArtworks(updatedUserArtworksArray)
                history.push('/Storage')
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
                const updatedUserArtworksArray = userArtworks.map((artwork) => {
                    if (artwork.id === updatedArtwork.id) {
                        return updatedArtwork;
                    } else {
                        return artwork;
                    }
                    })
                    setUserArtworks(updatedUserArtworksArray);
            // onUpdateArtwork(updatedArtwork);
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
            </div>
        </div>
    );
}

export default ArtStorageCard;    
    // function handleDeleteArtwork(id) {
    //     const updatedArtworksArray = artworks.filter((artwork) => artwork.id !== id);
    //     setArtworks(updatedArtworksArray);
    // }  

    // function handleDeleteClick() {
    //     fetch(`http://localhost:3000/artworks/${id}`, {
    //       method: "DELETE",
    //     });
    //     const updatedArtworksArray = userArtworks.filter((artwork) => artwork.id !== userArtwork.id);
    //     // const updatedArtworksArray = userArtworks.filter((artwork) => artwork.id !== userArtwork.id);
    //     setUserArtworks(updatedArtworksArray);
    //     // onDeleteArtwork(id);
    //   }   



    // function handleUpdateArtwork(updatedArtwork) {
    //     const updatedArtworksArray = artworks.map((artwork) => {
    //     if (artwork.id === updatedArtwork.id) {
    //         return updatedArtwork;
    //     } else {
    //         return artwork;
    //     }
    //     })
    //     setUserArtworks(updatedArtworksArray);
    // }