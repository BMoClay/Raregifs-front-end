import React, { useState, useCallback } from 'react';
import axios from 'axios';
import { useDropzone } from 'react-dropzone';
import { Image } from 'cloudinary-react';
import styles from "./styles/Home.module.css";
import { 
    Form, 
    Embed,
    Container,
} from 'semantic-ui-react'
import { useHistory } from 'react-router-dom';

function UploadArtForm({ currentUser, onCreateArtwork }){

    const [uploadedFiles, setUploadedFiles] = useState([])
    
    const history = useHistory() 
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");

    const onDrop = useCallback((acceptedFiles) => {
        const url = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/upload`;

        acceptedFiles.forEach(async (acceptedFile) => {
            const { signature, timestamp } = await getSignature();

            const formData = new FormData();
            formData.append("file", acceptedFile);
            // formData.append("upload_preset", process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET)
            formData.append('signature', signature);
            formData.append('timestamp', timestamp);
            formData.append('api_key', process.env.REACT_APP_CLOUDINARY_KEY);

            const response = await fetch(url, {
                method: "post",
                body: formData,
            })
            const data = await response.json();
           setUploadedFiles(old => [...old, data]);
        })
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ 
        onDrop, 
        accepts: "image/*",
        multiple: false,
    })

    function handleSubmitNewArtwork(e) {
        e.preventDefault();
        axios.post("/artworks", {
                title: title,
                image: image,
                user_id: currentUser.id,
            })
            .then((response) => {
                onCreateArtwork(response.data)
                history.push("/")
            })
    }   
        
    return ( 
        <Container>
            <>
            {/* <div {...getRootProps()} className={`${styles.dropzone} ${isDragActive ? styles.active : null}`}>
                <input {...getInputProps()}/>    
                Drop Zone
            </div> */}
            <ul>
                {uploadedFiles.map((file) => (
                <li key={file.public_id}>
                     <Image 
                     cloudName={process.env.REACT_APP_CLOUDINARY_CLOUD_NAME} 
                     publicId={file.public_id} 
                     width="300" 
                     crop="scale"
                     />
                    </li>
                ))}
            </ul>
            </>
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

async function getSignature() {
    const response = await fetch('/api/sign');
    // const response = await axios.post('/api/sign');
    console.log(response)
    // const data = await response.json();
    const data = await response
    
    return data;
    // const { signature, timestamp } = data;
    // return { signature, timestamp };
} 