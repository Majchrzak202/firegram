import React from "react";
import Progress from '../comps/Progress'

const Form = ({ file, setFile, error, setError}) => {

  const types = ["image/png", 'image/jpg', 'image/jpeg', 'image/JPG']  

  const uploadHandler = (e) => {
      let selected = e.target.files[0]; 
    if (selected && types.includes(selected.type)) {
      setFile(e.target.files[0]);
      setError('')
    } else {
        setFile(null)
        setError('Please select an image file (png or jpg)') 
    }
   
  };

  return (
    <form className='form'>
      <input className="label" onChange={uploadHandler} type="file" />
      <div className='output'>
          { error && <div className='error'>{error}</div>}
          { file && <div>{file.name}</div>}
          { file && <Progress file={file} setFile={setFile}/>}
          
      </div>
    </form>
  );
};

export default Form;
