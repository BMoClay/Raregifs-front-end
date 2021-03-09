import React, { useState } from 'react';
import { Form } from 'semantic-ui-react'
// active storage
// import { DirectUpload } from 'activestorage'

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
        <Form onSubmit={handleSubmitNewArtwork}>
            <br></br>
            <Form.Group widths="equal" padding>
                <Form.Input 
                    fluid label='title'
                    placeholder='title'
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    />
                <Form.Input 
                    fluid label='image-url'
                    placeholder='image-url'
                    type="text"
                    //file
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    />
                </Form.Group>
            <Form.Button>submit</Form.Button>
        </Form>
    );
}

export default UploadArtForm;



// {/* 
// <div className="upload-art-form">
//             <h4>Upload</h4>
//             <form onSubmit={handleSubmitNewArtwork}>
//                 <input
//                     type="text"
//                     title="title"
//                     placeholder="title (optional)"
//                     value={title}
//                     onChange={(e) => setTitle(e.target.value)}
//                 />
//                 <input
//                     // activestorage
                    
//                     type="text"
//                     // type="file"
//                     title="image"
//                     placeholder="enter image url/ gif url"
//                     value={image}
//                     onChange={(e) => setImage(e.target.value)}
//                 />
//                 <button type="submit">Add Image</button>
//             </form>
//         </div>





// // return ( 
// //     <div className="upload-art-form">
// //         <h4>Upload</h4>
// //         <form onSubmit={handleSubmitNewArtwork}>
// //             <input */}
// //                 type="text"
// //                 title="title"
// //                 placeholder="title (optional)"
// //                 value={title}
// //                 onChange={(e) => setTitle(e.target.value)}
// //             />
// //             <input
// //                 // activestorage
                
// //                 type="text"
// //                 // type="file"
// //                 title="image"
// //                 placeholder="enter image url/ gif url"
// //                 value={image}
// //                 onChange={(e) => setImage(e.target.value)}
// //             />
// //             <button type="submit">Add Image</button>
// //         </form>
// //     </div>
// // );