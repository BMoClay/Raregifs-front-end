import React from 'react'

function ArtCard({ artwork }) {
    const { title, image } = artwork
   
    return (
        <div className="art-card">
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <h3>{artwork.user.name}</h3>
        </div>
    );
}

export default ArtCard;