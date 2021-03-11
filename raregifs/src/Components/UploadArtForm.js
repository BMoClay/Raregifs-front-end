import React, { useState } from 'react';
import { 
    Form, 
    Embed,
    // Button,
    Container,
} from 'semantic-ui-react'
import { useHistory } from 'react-router-dom';
// active storage
// import { DirectUpload } from 'activestorage'

function UploadArtForm({ currentUser, onCreateArtwork }){
   
    const history = useHistory() 
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
                history.push("/")
                onCreateArtwork(newArtwork)
                // console.log(newArtwork)
            })
    }

    function handleConvertClick(e) {
        e.preventDefault();
        fetch("https://api.convertio.co/convert", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                apikey: "43419917fb02bda8434dd02fdceb07cf",
                file: "http://google.com/",
                outputformat: "gif",
            }),
        })
            .then((res) => res.json())
            .then((convertedFile) => {
                console.log(convertedFile)
            })
        }
    
    
    
    return ( 
        <Container>
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
        <br></br>
        <Embed
            icon='paint brush'
            // placeholder='click play button to start a new drawing'
            url='https://kleki.com/'
        />
        <br></br>
        <Embed
            icon='file pdf'
            url='https://docs.google.com/presentation/d/1MXF9c1oGW3kR93imVzaFhlsm_-HYOzQZlsfwPv67BGs/edit#slide=id.p'
        />
        <br></br>
        <Embed
            style={{height: 2800}}
            icon='stack exchange'
            url='https://ezgif.com/pdf-to-gif'
        /> 
        <br></br>
        {/* <Embed
            // style={{height: 2200}}
            icon='world'
            url='https://imgur.com/'
        /> */}
        {/* <br></br> 
        <Embed
            // style={{height: 2200}}
            icon='hourglass three'
            url='https://image.online-convert.com/convert-to-webp'
        />
        <br></br>  */}
        {/* <Button
            onClick={handleConvertClick}
        >convert pdf to gif</Button> */}
        </Container>
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