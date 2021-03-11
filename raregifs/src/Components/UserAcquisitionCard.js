import React from 'react';
import { 
    Grid,
    Card,
    Image,
    Button,
    Header,
    Modal,
  } from 'semantic-ui-react'

function UserAcquisitionCard({ 
                aArtwork, 
                cUId, 
                onAcquireArtwork,
             }) {

    function handleAcquireArtworkClick(e) {
        e.preventDefault();
        fetch('http://localhost:3000/acquisitions', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user_id: cUId,
                artwork_id: aArtwork.id
            }),
        })
            .then(r => r.json())
            .then((newUserAcq) => onAcquireArtwork(newUserAcq))
    }
    
    return (
        <Card 
            style={{
                display: 'flex',
                width: '250px',
                textAlign:'center',
                justifyContent:'space-around',
                // padding: '10px',
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



// <div className="acquisition-card">
// <img src={aArtwork.image} alt={aArtwork.title} />
// <h2>{aArtwork.title}</h2>
// <h4>{aArtwork.user_name}</h4>
// <div>
//    {cUId ? (
//        <>
//        <button onClick={handleAcquireArtworkClick}>
//            acquire image
//        </button>
//        </>
//    ) : (
//        <>
//        </>
//    )}
// </div>
// <br></br>
// <br></br>
// </div>