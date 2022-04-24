import React, { useState } from "react";
import Title from "./comps/Title";
import Form from "./comps/Form";


function App(props) {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  return (
    <div className="App">
      <Title />

      <Form 
      file={file} 
      setFile={setFile} 
      error={error} 
      setError={setError} />
    </div>
  );
}

export default App;
