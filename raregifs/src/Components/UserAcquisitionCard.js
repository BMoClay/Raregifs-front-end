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
        // <Grid 
        //     relaxed columns={3}
        //     // centered columns={2}
        //     // style={{ 
        //     // margin: 10,
        //     // padding: 40,
        //     // // width: 300,
        //     // }}
        // >
        //     {/* width={3} */}
        //     <Grid.Column>
        <Card.Group itemsPerRow={3}>
                <Card 
                    style={{
                        // height: '50px',
                        width: '150px',
                    }}
                >
                <Image src={aArtwork.image} alt={aArtwork.title} />
                <Card.Content
                    style={{
                        // height: "20px",
                        // backgroundImage: `url(https://cdn.pixabay.com/photo/2017/05/13/15/18/dear-2309801_1280.jpg)`,
                        // backgroundSize: "cover",
                    }}
                >
                    <Card.Header
                        style={{
                            // position: 'relative',
                            // width: '90px',
                            // textAlign: 'left',
                            // display: 'block',
                            fontSize: 'small',
                            // color: 'red',
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
            </Card.Group>
        //     </Grid.Column>
        // </Grid>
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