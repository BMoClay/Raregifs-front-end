import React from "react";
import axios from "axios";
import "./App.css";
import { Grid, Image, Button, Header, Modal } from "semantic-ui-react";

function ArtCard({ artwork, currentUser, onAcquireArtwork }) {
  const [open, setOpen] = React.useState(false);
  const { title, image, user } = artwork;

  function handleAcquireArtworkClick(e) {
    e.preventDefault();
    axios
      .post("/acquisitions", {
        user_id: currentUser.id,
        artwork_id: artwork.id,
      })
      .then((response) => onAcquireArtwork(response.data));
  }

  function onAcquireClick(e) {
    e.preventDefault();
    handleAcquireArtworkClick(e);
    setOpen(false);
  }

  return (
    <Grid
      stackable
      centered
      style={{
        margin: 10,
        padding: 40,
      }}
    >
      <Modal
        className="art-modal"
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
            className="delete-btn"
            color="black"
            onClick={() => setOpen(false)}
          >
            Nope
          </Button>
          <Button
            className="acquire-btn"
            content="Add it to the collection"
            labelPosition="right"
            icon="checkmark"
            onClick={onAcquireClick}
            positive
          />
        </Modal.Actions>
      </Modal>
    </Grid>
  );
}

export default ArtCard;
