import React from 'react';
import { 
  Grid,
  Image,
  Button,
  Header,
  Modal,
} from 'semantic-ui-react'

function ArtCard(
      { 
          artwork, 
          currentUser, 
          onAcquireArtwork, 
      }
) {

    const [open, setOpen] = React.useState(false)
    const { title, image, user } = artwork

    function handleAcquireArtworkClick(e) {
        e.preventDefault();
        fetch('http://localhost:3000/acquisitions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            user_id: currentUser.id,
            artwork_id: artwork.id,
          }),
        })
        .then(r => r.json())
        .then((newAcquisition) => onAcquireArtwork(newAcquisition))
      }

      function onAcquireClick(e) {
        e.preventDefault();
        handleAcquireArtworkClick(e)
        setOpen(false)
      }

      return (
        <Grid 
          stackable centered 
          style={{ 
            margin: 10,
            padding: 40,
          }}
          >
            <Modal
                // onSuccess={() => setOpen(false)}
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                trigger={<Image size="large" src={image} />}
            >
                  <Modal.Content image>
                  <Image wrapped size="huge" src={image} />
                  <Modal.Description>
                    <Header>{title}</Header>
                    <p>{user.name}</p>
                  </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                  <Button 
                    className='delete-btn'
                    color='black' 
                    onClick={() => setOpen(false)} 
                    >
                    Nope
                  </Button>
                  <Button
                    className='acquire-btn'
                    content="Add it to the collection"
                    labelPosition='right'
                    icon='checkmark'
                    // onClick={handleAcquireArtworkClick}
                    onClick={onAcquireClick}
                    positive
                  />
                </Modal.Actions>
            </Modal>
          </Grid>
       );
  }

export default ArtCard;

  // <div className="storage-card">
  // <div>
  //     <img src={image} alt={title} />
  //     <h3>{title}</h3>
  //     <form onSubmit={handleUpdateArtworkSubmit}>
  //         <input
  //             type="text"
  //             name="title"
  //             autoComplete="off"
  //             value={updatedTitle}
  //             onChange={(e) => setUpdatedTitle(e.target.value)}
  //         /><input type="submit" value="update title"/>
  //     </form>
  //     <button onClick={handleDeleteClick}>delete</button>
  //     <div>
  //         {artwork.acquiring_users.length > 0? (
  //             <>
  //                 <h4>collected by:{aUsers}</h4>
  //             </>
  //         ) : (
  //             <>
  //             </>
  //         )}
  //     </div>
  // </div>
  // </div>











 // function wrapperFunction(handleAcquireArtworkClick) {
      //      setOpen(false);
      // }



  // <Segment basic padded='very' vertical className="art-card">
  // <Image src={image} alt={title} size="large"/>
  // <h3>{title}</h3>
  // <h3>{user.name}</h3>
  // <Button 
  //   className="button" 
  //   onClick={handleAcquireArtworkClick}>
  //     acquire image
  // </Button>
  // </Segment>