// import React, { useEffect, useState } from 'react'
import React from 'react';
// import UploadArtForm from './UploadArtForm'
import ArtList from './ArtList'

// function ArtPage({ user, artworks, setArtworks, onDeleteArtwork, onUpdateArtwork, acquisitions, setAcquisitions, onDeleteAcquisition }) {
  function ArtPage({ currentUser, artworks, acquisitions, setAcquisitions, setArtworks, onDeleteArtwork, onUpdateArtwork,  onAcquireArtwork }) {

  console.log(currentUser)
  return (
      <div className="art-page" >
        <ArtList 
            acquisitions={acquisitions}
            currentUser={currentUser} 
            artworks={artworks}
            setAcquisitions={setAcquisitions} 
            setArtworks={setArtworks}
            onDeleteArtwork={onDeleteArtwork}
            onUpdateArtwork={onUpdateArtwork}
            onAcquireArtwork={onAcquireArtwork}
            />
      </div>
  );
}

export default ArtPage;