import React from 'react';
import axios from 'axios';
import { 
    Card,
    Image,
    Button,
  } from 'semantic-ui-react'

function UserAcquisitionCard({ 
                aArtwork, 
                cUId, 
                onAcquireArtwork,
             }) {

    function handleAcquireArtworkClick(e) {
        e.preventDefault();
        axios.post('/acquisitions', {
                user_id: cUId,
                artwork_id: aArtwork.id
            })
            .then((response) => onAcquireArtwork(response.data))
    }
    
    return (
        <Card 
            style={{
                display: 'flex',
                width: '250px',
                textAlign:'center',
                justifyContent:'space-around',
            }}
        >
            <Image src={aArtwork.image} alt={aArtwork.title} />
            <Card.Content>
                <Card.Header
                    style={{
                        fontSize: 'small',
                    }}
                >
                    {aArtwork.title}
                </Card.Header>
                <Card.Meta>
                    <span className='artist-name'>{aArtwork.user_name}</span>
                </Card.Meta>
            </Card.Content>
                {cUId ? (
                    <>
                    <Button size='small' onClick={handleAcquireArtworkClick}>
                        acquire
                    </Button>
                    </>
                ) : (
                    <>
                    </>
                )}
            <br></br>
        </Card>
        
    );
}

export default UserAcquisitionCard;
