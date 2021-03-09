import React from 'react';
import { 
  Container,
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

      return (
          <Grid stackable centered columns={3}>
            <Modal
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                trigger={<Image size='large' src={image}/>}
                padding='20px'
            >
                <Modal.Content image>
                  <Image size='huge' src={image} wrapped />
                  <Modal.Description>
                    <Header>{title}</Header>
                    <p>{user.name}</p>
                  </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                  <Button color='black' onClick={() => setOpen(false)}>
                    Nope
                  </Button>
                  <Button
                    content="Add it to the collection"
                    labelPosition='right'
                    icon='checkmark'
                    onClick={handleAcquireArtworkClick}
                    // onClick={() => setOpen(false)}
                    positive
                  />
                </Modal.Actions>
            </Modal>
            </Grid>
       );
  }

export default ArtCard;


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