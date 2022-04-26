import React, { useState } from "react";
import Title from "./comps/Title";
import Form from "./comps/Form";
import Grid from "./comps/Grid";
import Modal from "./comps/Modal";


function App(props) {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [selectedImage, setSeletcedImage] = useState(null)


  return (
    <div className="App">
      <Title />

      <Form 
      file={file} 
      setFile={setFile} 
      error={error} 
      setError={setError} />
      <Grid  setSeletcedImage={setSeletcedImage}/> 
      {selectedImage && <Modal setSeletcedImage={setSeletcedImage} selectedImage={selectedImage}/>}
    </div>
  );
}

export default App;
