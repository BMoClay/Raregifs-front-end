// import React, { useEffect, useState } from 'react'
import React from 'react';
import UploadArtForm from './UploadArtForm'
import ArtList from './ArtList'

function ArtPage({ user, artworks, setArtworks }) {

  return (
      <div className="art-page" >
          <UploadArtForm user={user} artworks={artworks} setArtworks={setArtworks}/>
          <ArtList user={user} artworks={artworks} setArtworks={setArtworks} />
      </div>
  );
}

export default ArtPage;