
import { useState, useEffect } from "react";
import { projectFirestore } from "../Firebase/config";

const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
     projectFirestore(collection)
     .onSnapshot((snap)=> {
         const documents = []
         snap.forEach(doc => {
          documents.push({...doc.data(), id: doc.id })
         })
       setDocs(documents)
     })
   
    
  }, [collection]);

  return { docs };
};

export default useFirestore;
