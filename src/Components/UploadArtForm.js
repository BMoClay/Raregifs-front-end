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
  // window.scrollTo({
  //   top: 0,
  //   left: 0,
  //   behavior: 'smooth'
  // });

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
      const { title, url } = files[index];
      db.collection("artworks")
        .add({ title, url, name: currentUser.name })
        .then((response) => {
          onCreateArtwork({ title, url, name: currentUser.name });
          history.push("/");
          window.scrollTo(0, 0);
        });
    }
  }

  return (
    <div style={{ margin: "0px 170px 0px 170px" }}>
      <Container>
        <>
          {/* <a id="top"></a>
        <a href="#top">Jump to top of page</a> */}
          {/* <h4>*to scroll up and down the page move the cursor to the right or left margins</h4> */}
          <br></br>
          <h4>1. draw something below using the drawing pad</h4>
          <h4>
            2. When you're done click the blue 'Save Image' icon to the right
          </h4>
          <h4>3. then click 'Save', this will save it as a PNG image file</h4>
          <div
            className="video-responsive"
            // style={{
            //         left: 0,
            //         top: 0,
            //         // height= 100%
            //         // width= 100%
            //         position: absolute,
            //  }}
          >
            <iframe
              src="https://kleki.com/"
              frameborder="0"
              allow="autoplay; encrypted-media"
              width="1000"
              height="560"
              allowfullscreen="true"
              title="video"
            />
          </div>
          {/* <Embed icon="paint brush" url="https://kleki.com/" /> */}
          <br></br>
          <h4>
            4. drag the file you just saved and drop it directly into the google
            slides slide deck below where it says 'Click to add title'
          </h4>
          <h4>
            5. after that right click the slide in the left column and select
            'Duplicate slide' repeatedly
          </h4>
          <h4>
            6. In each slide move the image (by dragging and dropping it) so
            none of the slides have the image in the same place
          </h4>
          <h4>
            7. go to the 'File' dropdown, click it and select download then
            choose to download the file as a pdf file
          </h4>
          {/* <Embed icon="file pdf" url="https://slides.google.com/create"/> */}
          <div
            className="video-responsive"
            // style={{
            //         left: 0,
            //         top: 0,
            //         // height= 100%
            //         // width= 100%
            //         position: absolute,
            //  }}
          >
            <iframe
              src="https://slides.google.com/create"
              frameborder="0"
              allow="autoplay; encrypted-media"
              width="1000"
              height="560"
              allowfullscreen="true"
              title="video"
            />
          </div>
          <br></br>
          <h4>
            8. now upload the pdf file to the EZGif converter by dragging it and
            dropping it directly on the 'Choose Files' button below
          </h4>
          <h4>9. click the 'Upload!' button</h4>
          <h4>
            10. directly below that will appear 'Options', check the 'Create
            animated GIF box' and click 'Convert to GIF'
          </h4>
          <h4>
            11. scroll down a tiny bit and click the save icon, almost done
          </h4>
          {/* <Embed style={{ height: 2800 }} icon="stack exchange" url="https://ezgif.com/pdf-to-gif"/> */}
          {/* <div {...getRootProps()} className={`${styles.dropzone} ${isDragActive ? styles.active : null}`}>
                  <input {...getInputProps()}/>    
                  Drop Zone
              </div> */}
          <div
            className="video-responsive"
            // style={{
            //         left: 0,
            //         top: 0,
            //         // height= 100%
            //         // width= 100%
            //         position: absolute,
            //  }}
          >
            <iframe
              src="https://ezgif.com/pdf-to-gif"
              frameborder="0"
              allow="autoplay; encrypted-media"
              width="1000"
              height="560"
              allowfullscreen="true"
              title="video"
            />
          </div>
          <br></br>
          <h4>
            12. drag and drop the newly saved gif file below then click 'done'
          </h4>
          <DropzoneArea onChange={onDrop} />
          <button onClick={onSubmit}>done</button>
          <ul>
            {uploadedFiles.map((file) => (
              <li key={file.public_id}>
                <Image
                  cloudName={process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}
                  publicId={file.public_id}
                  crop="scale"
                  frameborder="0"
                  width="1000"
                  allowfullscreen="true"
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
                <h4>13. title your work below</h4>
                <h4>14. click upload to Raregifs and enjoy</h4>
                <Form.Group widths="equal">
                  {file.url && (
                    <img
                      src={file.url}
                      style={{ width: "10em", height: "6em" }}
                    />
                  )}
                  <Form.Input
                    // label="add a title here then click submit to upload it to Raregifs"
                    value={file.title || ""}
                    placeholder="title"
                    type="text"
                    length="20em"
                    onChange={(e) => addTitle(e.target.value, index)}
                  />
                  {/* {file.url && (
                    <img
                      src={file.url}
                      style={{ width: "10em", height: "6em" }}
                    />
                  )} */}
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
