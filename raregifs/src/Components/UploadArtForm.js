import React, { useState } from 'react';
import axios from 'axios';
import { 
    Form, 
    Embed,
    Container,
} from 'semantic-ui-react'
import { useHistory } from 'react-router-dom';

function UploadArtForm({ currentUser, onCreateArtwork }){
   
    const history = useHistory() 
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");

    function handleSubmitNewArtwork(e) {
        e.preventDefault();
        axios.post("http://localhost:3000/artworks", {
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
            })
    }

    // function handleConvertClick(e) {
    //     e.preventDefault();
    //     fetch("https://api.convertio.co/convert", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //             apikey: "43419917fb02bda8434dd02fdceb07cf",
    //             file: "http://google.com/",
    //             outputformat: "gif",
    //         }),
    //     })
    //         .then((res) => res.json())
    //         .then((convertedFile) => {
    //             console.log(convertedFile)
    //         })
    //     }
    
    
    
    return ( 
        <Container>
            <br></br>
        <Form onSubmit={handleSubmitNewArtwork}>
            <br></br>
            <Form.Group widths="equal">
                <Form.Input 
                    label='title'
                    value={title}
                    placeholder='title'
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    />
                <Form.Input 
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
        </Container>
    );
}

export default UploadArtForm;

