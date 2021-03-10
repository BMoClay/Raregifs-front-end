import React from 'react'
import { Button, Card } from 'semantic-ui-react'

function StorageCardAcquisition({ 
                acquisition, 
                artwork, 
                onDeleteAcquisition,
             }) {
    
    const { id } = acquisition

    function handleDeleteAcquisitionClick() {
        fetch(`http://localhost:3000/acquisitions/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(deletedAcquisition => {
                onDeleteAcquisition(deletedAcquisition)
            })
    }

    return (
        <div className="storage-card" >
        {/* <Card> */}
            <img src={artwork.image} alt={artwork.title} />
            <h3>{artwork.title}</h3>
            <h4>{artwork.user_name}</h4>
            <Button 
                onClick={handleDeleteAcquisitionClick}
                // justify-content='center'
                >
                    remove from collection
            </Button>
        {/* </Card> */}
        </div>
    );
}

export default StorageCardAcquisition;    