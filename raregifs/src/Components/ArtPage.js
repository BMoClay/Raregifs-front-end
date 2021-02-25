import React, { useEffect, useState } from 'react'
import UploadArtForm from './UploadArtForm'
import ArtList from './ArtList'

function ArtPage() {
    const [artworks, setArtworks] = useState([])

    useEffect(() => {
        fetch('http://[::1]:3000/artworks')
          .then(r => r.json())
          .then(artworks => setArtworks(artworks))
        }, [])  

    function handleAddArtwork(newArtwork) {
        const updatedArtworks = [...artworks, newArtwork];
        setArtworks(updatedArtworks);
    }

  return (
      <div className="art-page" >
          <UploadArtForm onAddArtwork={handleAddArtwork}/>
          <ArtList artworks={artworks} setArtworks={setArtworks} />
      </div>
  );
}

export default ArtPage;