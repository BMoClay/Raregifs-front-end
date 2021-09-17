import React from "react";
import ArtCard from "./ArtCard";

function ArtPage({ currentUser, artworks, onAcquireArtwork }) {
  console.log("🚀 ~ file: ArtPage.js ~ line 5 ~ ArtPage ~ artworks", artworks);
  const uArtwork =
    artworks.length &&
    artworks.map((artwork) => {
      return (
        <ArtCard
          key={artwork?.id}
          artwork={artwork}
          currentUser={currentUser}
          onAcquireArtwork={onAcquireArtwork}
        />
      );
    });

  return (
    <div style={{ margin: "0px 120px 0px 120px" }} className="art-container">
      {uArtwork}
    </div>
  );
}

export default ArtPage;
