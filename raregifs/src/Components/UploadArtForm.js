import React, { useState } from 'react';

function UploadArtForm({ onAddArtwork }){
    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        fetch("http://[::1]:3000/artworks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: title,
                image: image,
            }),
        })
            .then((res) => res.json())
            .then((newArtwork) => onAddArtwork(newArtwork));
    }
    return ( 
        <div className="upload-art-form">
            <h1>upload: jpeg or gif, square format, under 2MB</h1>
            <form onSubmit={handleSubmit}>
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
    )
}

export default UploadArtForm;