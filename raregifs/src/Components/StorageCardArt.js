import React, { useState } from 'react';
import axios from 'axios';
import { 
    Grid,
    Image,
    Button,
    Header,
    Modal,
    Form,
  } from 'semantic-ui-react'

function StorageCardArt({ 
                artwork, 
                onDeleteArtwork, 
                onUpdateArtwork,
             }) {

    const [open, setOpen] = React.useState(false)
    const aUsers = artwork.acquiring_users.map((user) => {
        return (
            <div key={user.id}>{user.name}</div>
        )
    })
    
    const { id, title, image } = artwork
    const [updatedTitle, setUpdatedTitle] = useState(title)

    function handleDeleteClick() {
        axios.delete(`/artworks/${id}`)
            .then(response => {
                onDeleteArtwork(response.data)
            })
        }

    function handleUpdateArtworkSubmit(e) {
        e.preventDefault();
        axios.patch(`/artworks/${id}`, { title: updatedTitle })
            .then((response) => {
                onUpdateArtwork(response.data)
            })
    }

    function handleUpdateClick(e) {
        e.preventDefault();
        handleUpdateArtworkSubmit(e)
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
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                trigger={<Image size="large" src={image} />}
            >
                 <Modal.Content image >
                  <Image wrapped size="huge" src={image} alt={title}/>
                  <Modal.Description>
                    <Header>{title}</Header>
                    {artwork.acquiring_users.length > 0? (
                        <>
                            <h4>collected by:{aUsers}</h4>
                        </>
                    ) : (
                        <>
                        </>
                    )}
                  </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                  <Form onSubmit={handleUpdateClick}>
                    <Form.Input 
                        fluid 
                        label='update title'
                        type='text'
                        name="title"
                        autoComplete="off"
                        value={updatedTitle}
                        onChange={(e) => setUpdatedTitle(e.target.value)}
                    />
                    <Form.Button>submit</Form.Button>
                  </Form>
                  <Button
                    content="delete"
                    labelPosition='right'
                    icon='trash'
                    onClick={handleDeleteClick}
                    negative
                  />
                </Modal.Actions>
            </Modal>
        </Grid>
    )
}

export default StorageCardArt;    
