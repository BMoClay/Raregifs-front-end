import React, { useEffect, useState } from 'react'
import UploadArtForm from './UploadArtForm'
import ArtList from './ArtList'

function ArtPage({ user }) {
    const [artworks, setArtworks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/artworks')
          .then(r => r.json())
          .then((artworksArray) => {
              setArtworks(artworksArray);
          });
        }, [])  

    function handleAddArtwork(newArtwork) {
        const updatedArtworksArray = [...artworks, newArtwork];
        setArtworks(updatedArtworksArray);
    }

  return (
      <div className="art-page" >
          <UploadArtForm user={user} onAddArtwork={handleAddArtwork}/>
          <ArtList user={user} artworks={artworks} setArtworks={setArtworks} />
      </div>
  );
}

export default ArtPage;