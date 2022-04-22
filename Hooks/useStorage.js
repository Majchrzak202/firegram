import { useState, useEffect } from "react";
import { projectStorage, projectFirestore } from "../Firebase/config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, doc, setDoc } from "firebase/firestore";

const useStorage = ({ file }) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const storageRef = ref(projectStorage, file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);
    const collectionRef = collection(projectFirestore, "images");
    

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
        getDownloadURL(uploadTask.snapshot.ref).then((url) => setUrl(url));
       
        const firebase = doc(collectionRef, 'urls');
        setDoc(firebase, {url: url}, {merge: true})

      
         /* setDoc(doc(collectionRef, "urls"), {
          url: url 
        }); */
      }
    );
  }, [file, url]);

  return { progress, url, error };
};

export default useStorage;
