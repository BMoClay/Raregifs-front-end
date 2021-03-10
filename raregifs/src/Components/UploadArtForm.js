import React, { useState } from 'react';
import { Form } from 'semantic-ui-react'
// active storage
// import { DirectUpload } from 'activestorage'

function UploadArtForm({ currentUser, onCreateArtwork }){
   
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
                user_id: currentUser.id,
            }),
        })
            .then((res) => res.json())
            .then((newArtwork) => {
                onCreateArtwork(newArtwork)
                // console.log(newArtwork)
            })
    }
    
    return ( 
        <div>
            <br></br>
        <Form onSubmit={handleSubmitNewArtwork}>
            <br></br>
            <Form.Group widths="equal">
                <Form.Input 
                    // fluid label='title'
                    label='title'
                    value={title}
                    placeholder='title'
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    />
                <Form.Input 
                    // fluid label='image-url'
                    label='image-url'
                    value={image}
                    placeholder='image-url'
                    type="text"
                    onChange={(e) => setImage(e.target.value)}
                    />
                </Form.Group>
            <Form.Button>submit</Form.Button>
        </Form>
        </div>
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