import React from 'react'
// import AcquisitionsPage from './AcquisitionsPage';

// function ArtCard({ artwork, currentUser, onDeleteArtwork, setAcquisitions, onDeleteAcquisition, onUpdateArtwork }) {
    function ArtCard({ artwork, currentUser, acquisitions, setAcquisitions }) {
    // const [acquisition, setAcquisition] = useState(acquisition)
    const { title, image } = artwork
    // const [updatedTitle, setUpdatedTitle] = useState(title)

console.log(acquisitions)
    function handleAcquireArtworkClick(e) {
        const acquisition = {
          user_id: currentUser.id,
          artwork_id: artwork.id,
        }
        e.preventDefault();
        fetch('http://localhost:3000/acquisitions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            //   user_id: currentUser.id,
            //   artwork_id: artwork.id
            acquisition
          }),
        })
        .then(r => r.json())
        .then(newAcquisition => {
            let updatedAcquisitionsArray = [...acquisitions, newAcquisition]
          setAcquisitions(updatedAcquisitionsArray)
        })
      }

    // function handleDeleteClick() {
    //     fetch(`http://localhost:3000/artworks/${id}`, {
    //       method: "DELETE",
    //     });
    //     onDeleteArtwork(id);
    //   }    

    // function handleDeleteAcquisitionClick() {
    //     fetch(`http://localhost:3000/acquisitions/${id}`, {
    //         method: "DELETE",
    //     });
    //     onDeleteAcquisition(id);
    // } 

    // function handleUpdateArtworkSubmit(e) {
    //     e.preventDefault();
    //     fetch(`http://localhost:3000/artworks/${id}`, {
    //         method: "PATCH",
    //         headers: {
    //         "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({ title: updatedTitle }),
    //     })
    //         .then((r) => r.json())
    //         .then((updatedArtwork) => {
    //         onUpdateArtwork(updatedArtwork);
    //         });
    // }

    console.log(artwork.user)

    return (
        <div className="art-card">
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <h3>{artwork.user.name}</h3>
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
            {/* <button onClick={handleAcquireArtworkClick}>acquire image</button>
                        <>
                            <img src={image} alt={title} />
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
                            <button onClick={handleAcquireArtworkClick}>acquire image</button>
                        </>
                    ) */}
        </div>
    );
}

export default ArtCard;