import { useState, useEffect } from "react";
import { projectStorage, projectFirestore } from "../Firebase/config";
import { ref, uploadBytesResumable, getDownloadURL, } from "firebase/storage";
import { collection, addDoc,  } from "firebase/firestore";

const useStorage = ({ file }) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const storageRef = ref(projectStorage, file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        let percentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      () => {
        

        getDownloadURL(uploadTask.snapshot.ref).then(
          (url) =>
            addDoc(collection(projectFirestore, "urls"), {
              url: url,
              
              
            }) && setUrl(url)
        );
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
