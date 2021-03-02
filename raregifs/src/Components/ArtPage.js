// import React, { useEffect, useState } from 'react';
import React from 'react';
import ArtList from './ArtList';
// import UploadArtForm from './UploadArtForm';

function ArtPage({ 
    currentUser, 
    artworks,
    setArtworks,
    acquisitions,
    setAcquisitions, 
    onAcquireArtwork, 
  }) {

    console.log(artworks)
    console.log(acquisitions)

  return (
      <div className="art-page" >
        <ArtList 
            currentUser={currentUser} 
            artworks={artworks}
            setArtworks={setArtworks}
            acquisitions={acquisitions}
            setAcquisitions={setAcquisitions}
            onAcquireArtwork={onAcquireArtwork}            
            />
      </div>
  );
}

export default ArtPage;

  // const [artworks, setArtworks] = useState([]);
    
  // useEffect(() => {
  //   fetch('http://localhost:3000/artworks')
  //     .then(r => r.json())
  //     .then((artworksArray) => {
  //         setArtworks(artworksArray);
  //     });
  //   }, []) 

  // function handleAddArtwork(newArtwork) {
  //   const updatedArtworksArray = [newArtwork, ...artworks];
  //   setArtworks(updatedArtworksArray)
  // }



// ///* <UploadArtForm
//             currentUser={currentUser}
//             onCreateArtwork={handleAddArtwork}
//         /> */