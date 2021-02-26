// import React, { useEffect, useState } from 'react'
import React from 'react';
import UploadArtForm from './UploadArtForm'
import ArtList from './ArtList'

function ArtPage({ user, artworks, setArtworks, onDeleteArtwork, onUpdateArtwork, acquisitions, setAcquisitions, onDeleteAcquisition }) {

  console.log(user)
  return (
      <div className="art-page" >
          <UploadArtForm 
            user={user} 
            artworks={artworks} 
            setArtworks={setArtworks}
          />
          <ArtList 
            user={user} 
            artworks={artworks} 
            setArtworks={setArtworks}
            onDeleteArtwork={onDeleteArtwork}
            onUpdateArtwork={onUpdateArtwork}
            acquisitions={acquisitions}
            setAcquisitions={setAcquisitions}
            onDeleteAcquisition={onDeleteAcquisition}
            />
      </div>
  );
}

export default ArtPage;