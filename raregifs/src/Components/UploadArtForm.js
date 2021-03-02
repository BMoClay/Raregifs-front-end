import React, { useState } from 'react';

function UploadArtForm({ currentUser, onCreateArtwork }){
   
    const { id } = currentUser
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");

    function handleSubmitNewArtwork(e) {
        e.preventDefault();
        fetch("http://localhost:3000/artworks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: title,
                image: image,
                user_id: id,
            }),
        })
            .then((res) => res.json())
            .then((newArtwork) => {
                onCreateArtwork(newArtwork)
            })
    }
    
    return ( 
        <div className="upload-art-form">
            <h1>upload: jpeg or gif, square format, under 2MB</h1>
            <form onSubmit={handleSubmitNewArtwork}>
                <input
                    type="text"
                    title="title"
                    placeholder="title (optional)"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="text"
                    title="image"
                    placeholder="enter image url/ gif url"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />
                <button type="submit">Add Image</button>
            </form>
        </div>
    );
}

export default UploadArtForm;