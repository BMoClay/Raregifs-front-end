import React, { useState, useCallback } from "react";
import axios from "axios";
import { DropzoneArea } from "material-ui-dropzone";
import { Image } from "cloudinary-react";
// import styles from "./styles/Home.module.css";
import { Form, Embed, Container } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import { db, storage } from "../api/fireabse.config";
import { SettingsCellSharp } from "@material-ui/icons";

function UploadArtForm({ currentUser, onCreateArtwork }) {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const history = useHistory();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [files, setFiles] = useState([]);

  const onDrop = useCallback((filees) => {
    setFiles(filees);
  });

  const onSubmit = () => {
    let image = [];
    for (let i = 0; i < files.length; i++) {
      var task = storage.ref().child(files[i].name).put(files[i]);
      task.then((shot) => {
        shot.ref.getDownloadURL().then((url) => {
          image.push({ url, title: "" });
          if (image.length === files.length) {
            setFiles(image);
          }
        });
      });
    }
  };

  // const url = `https://api.cloudinary.com/v1_1/raregifs/upload`;

  // acceptedFiles.forEach(async (acceptedFile) => {
  //   const { signature, timestamp } = await getSignature();

  //   const formData = new FormData();
  //   formData.append("file", acceptedFile);
  //   // formData.append("upload_preset", process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET)
  //   formData.append("signature", signature);
  //   formData.append("timestamp", timestamp);
  //   formData.append("api_key", process.env.REACT_APP_CLOUDINARY_KEY);

  //   const response = await fetch(url, {
  //     method: "post",
  //     body: formData,
  //   });
  //   const data = await response.json();
  //   setUploadedFiles((old) => [...old, data]);
  // });
  // }, []);

  // const { getRootProps, getInputProps, isDragActive } = useDropzone({
  //     onDrop,
  //     accepts: "image/*",
  //     multiple: false,
  // })

  const addTitle = (value, index) => {
    let array = [...files];
    array[index] = { ...array[index], title: value };
    setFiles(array);
  };

  function handleSubmitNewArtwork(e) {
    e.preventDefault();
    for (let index = 0; index < files.length; index++) {
      const element = files[index];
      axios
        .post("/artworks", {
          title: element.title,
          image: element.url,
          user_id: currentUser.id,
        })
        .then((response) => {
          onCreateArtwork(response.data);
          // history.push("/");
        });
    }
  }

  return (
    <div style={{margin: '0px 170px 0px 170px'}}>
      <Container >
        <>
        <h4>draw something then save it</h4>
        <Embed icon="paint brush" url="https://kleki.com/" />
        <br></br>
        <h4>drop the file into slides, duplicate and move it around then turn it into slideshow and download it as a pdf</h4>
        <Embed
          icon="file pdf"
          url="https://docs.google.com/presentation/d/1MXF9c1oGW3kR93imVzaFhlsm_-HYOzQZlsfwPv67BGs/edit#slide=id.p"
        />
        <br></br>
        <h4>upload pfd file here and convert it from a pdf to gif</h4>
        <Embed
          style={{ height: 2800 }}
          icon="stack exchange"
          url="https://ezgif.com/pdf-to-gif"
        />
          {/* <div {...getRootProps()} className={`${styles.dropzone} ${isDragActive ? styles.active : null}`}>
                  <input {...getInputProps()}/>    
                  Drop Zone
              </div> */}
          <br></br>
          <h4>drag and drop your file here then click 'upload to dropzone'</h4>
          <DropzoneArea onChange={onDrop} />
          <button onClick={onSubmit}>upload to dropzone</button>
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
          {files.map((file, index) => {
            console.log(
              "🚀 ~ file: UploadArtForm.js ~ line 105 ~ {files.map ~ file",
              file
            );
            return (
              <div>
                <br></br>
                <Form.Group widths="equal">
                  <Form.Input
                    label="add a title here then click submit to upload it to Raregifs"
                    value={file.title || ""}
                    placeholder="title"
                    type="text"
                    onChange={(e) => addTitle(e.target.value, index)}
                  />
                  {file.url && (
                    <img
                      src={file.url}
                      style={{ width: "10em", height: "6em" }}
                    />
                  )}
                </Form.Group>
              </div>
            );
          })}
          <Form.Button>upload to Raregifs</Form.Button>
          <br></br>
        </Form>
        {/* <br></br> */}
        {/* <h4>draw something then save it</h4>
        <Embed icon="paint brush" url="https://kleki.com/" />
        <br></br>
        <h4>drop the file into slides, duplicate and move it around then turn it into slideshow and download it as a pdf</h4>
        <Embed
          icon="file pdf"
          url="https://docs.google.com/presentation/d/1MXF9c1oGW3kR93imVzaFhlsm_-HYOzQZlsfwPv67BGs/edit#slide=id.p"
        />
        <br></br>
        <h4>convert it from a pdf to gif</h4>
        <Embed
          style={{ height: 2800 }}
          icon="stack exchange"
          url="https://ezgif.com/pdf-to-gif"
        /> */}
        {/* <br></br> */}
      </Container>
    </div>
  );
}

export default UploadArtForm;

async function getSignature() {
  const response = await fetch("/api/sign");
  // const response = await axios.post('/api/sign');
  console.log(response);
  // const data = await response.json();
  const data = await response;

  return data;
  // const { signature, timestamp } = data;
  // return { signature, timestamp };
}
