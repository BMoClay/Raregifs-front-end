import React from 'react'
// import React, { useState } from 'react'
import AcquisitionsList from './AcquisitionsList'

function AcquisitionsPage({ 
    // artworks,
    users, 
    currentUser, 
    acquisitions, 
    setAcquisitions, 
    onAcquireArtwork, 
    // onDeleteAcquisition 
}){
    // const [collection, setCollection] = useState([])

    // const thisCollection = users.map((user) => {
    //     user.acquisitions.map((acquired_artwork) => {
    //        setCollection(acquired_artwork)
    //         return collection
    //     })
    // })
    //     console.log(collection)

    return (
        <div className="acquisitions-page" >
            <AcquisitionsList 
                // artworks={artworks}
                users={users}
                currentUser={currentUser}
                acquisitions={acquisitions}  
                setAcquisitions={setAcquisitions}
                // onDeleteAcquisition={onDeleteAcquisition}
                onAcquireArtwork={onAcquireArtwork}
                />
        </div>
    );
    }
export default AcquisitionsPage;