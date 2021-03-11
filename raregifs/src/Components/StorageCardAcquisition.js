import React from 'react'
import { 
    Grid,
    Image,
    Button,
    Header,
    Modal,
    Form,
  } from 'semantic-ui-react'

function StorageCardAcquisition({ 
                acquisition, 
                artwork, 
                onDeleteAcquisition,
             }) {
    
    const { id } = acquisition
    const [open, setOpen] = React.useState(false)

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
        <Grid 
        stackable centered 
        style={{ 
          margin: 10,
          padding: 40,
        }}
        >
            <Modal
              onClose={() => setOpen(false)}
              onOpen={() => setOpen(true)}
              open={open}
              trigger={<Image size='large' src={artwork.image} alt={artwork.title}/>}
          >
               <Modal.Content image >
                <Image wrapped size='huge' src={artwork.image} alt={artwork.title}/>
                <Modal.Description>
                  <Header>{artwork.title}</Header>
                  <p>{artwork.user_name}</p>
                </Modal.Description>
              </Modal.Content>
              <Modal.Actions>
                <Button
                  content="remove from collection"
                  labelPosition='right'
                  icon='trash'
                  onClick={handleDeleteAcquisitionClick}
                  negative
                />
              </Modal.Actions>
          </Modal>
      </Grid>
    );
}

export default StorageCardAcquisition;    