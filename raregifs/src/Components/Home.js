import { useState, useCallback } from 'react';
import { useDropzone } from "react-dropzone";
import styles from "./styles/Home.module.css";

export default function Home() {
    const onDrop = useCallback((acceptedFiles) => {

    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ 
        onDrop, 
        accepts: "image/*",
        multiple: false,
    })

    return(
        <>
        <div {...getRootProps()} className={`${styles.dropzone}`}>
            <input {...getInputProps()}/>    
            Drop Zone
        </div>
        </>
    )
}




// function Home() {
//     const onDrop = useCallback((acceptedFiles) => {

//     }, []);

//     const { getRootProps, getInputProps, isDragActive } = useDropZone({ 
//         onDrop, 
//         accepts: "image/*",
//         multiple: false,
//     })

//     return(
//         <>
//         <div {...getRootProps()} className={`${styles.dropzone}`}>
//             <input {...getInputProps()}/>    
//             Drop Zone
//         </div>
//         </>
//     )
// }


// export default Home
