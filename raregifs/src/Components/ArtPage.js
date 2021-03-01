import React from 'react';
import ArtList from './ArtList';

  function ArtPage({ 
    currentUser, 
    artworks, 
    onAcquireArtwork 
  }) {

  return (
      <div className="art-page" >
        <ArtList 
            currentUser={currentUser} 
            artworks={artworks}
            onAcquireArtwork={onAcquireArtwork}
            />
      </div>
  );
}

export default ArtPage;