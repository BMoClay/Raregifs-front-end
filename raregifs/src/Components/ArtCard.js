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
                  <Image wrapped size="large" src={image} />
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



  // <Grid 
  // //     relaxed columns={3}
  // //     // centered columns={2}
  //     style={{ 
  //     margin: 10,
  //     padding: 40,
  //     // width: 300,
  //     }}
  // >
  //     {/* width={3} */}
  // {/* //     <Grid.Column> */}
  // <Container itemsPerRow={4}>
  //         <Modal 
  //             style={{
  //                 // height: '50px',
  //                 width: '150px',
  //             }}
  //             onClose={() => setOpen(false)}
  //             onOpen={() => setOpen(true)}
  //             open={open}
  //             trigger={<Image size="small" src={aArtwork.image} />}
  //         >
  //             <Modal.Content image>
  //                 <Image src={aArtwork.image} alt={aArtwork.title} />
  //             <Modal.Description>
  //                 <Header
  //                     style={{
  //                         // position: 'relative',
  //                         // width: '90px',
  //                         // textAlign: 'left',
  //                         // display: 'block',
  //                         fontSize: 'small',
  //                         // color: 'red',
  //                     }}
  //                 >
  //                     {aArtwork.title}
  //                 </Header>
  //             </Modal.Description>
  //                 <Modal.Meta>
  //                     <span className='artist-name'>{aArtwork.user_name}</span>
  //                 </Modal.Meta>
  //             </Modal.Content>
  //             {cUId ? (
  //                 <>
  //                 <Button size='small' onClick={handleAcquireArtworkClick}>
  //                     acquire
  //                 </Button>
  //                 </>
  //             ) : (
  //                 <>
  //                 </>
  //             )}
  //         <br></br>
  //         </Modal>
  //     </Container>
  //     {/* </Grid.Column> */}
  // </Grid>













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