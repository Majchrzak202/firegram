import { useState, useEffect } from "react";
import { projectFirestore } from "../Firebase/config";
import { collection, query, onSnapshot } from "firebase/firestore";

const useFirestore = (customcolection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const q = query(collection(projectFirestore, customcolection));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let documents = [];
      querySnapshot.forEach((doc) => {
        documents.push({ ...doc.data(), id: doc.id });
      });
      setDocs(documents);
    });

    return () => unsub();
  }, [customcolection]);
  

  return { docs };
};

export default useFirestore;
