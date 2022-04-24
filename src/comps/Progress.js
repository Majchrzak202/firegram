import React,{useEffect} from "react";
import useStorage from "../Hooks/useStorage";

const Progress = ({ file, setFile }) => {
  const { url, progress } = useStorage({ file });
  
  useEffect(() => {
    if (url) {
        setFile(null)
    }
  }, [url, setFile]);

  console.log(progress);
  console.log(url);

  return <div className="progress-bar" style={{ width: progress + '%'}}></div>;
};

export default Progress;
