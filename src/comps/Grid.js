import React from "react";
import useFirestore from "../Hooks/useFirestore";
import { motion } from "framer-motion/dist/framer-motion";

const Grid = ({ setSeletcedImage }) => {
  const { docs } = useFirestore("urls");
  console.log(docs);

  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <motion.div
            className="img-wrap"
            key={doc.id}
            whileHover={{ opacity: 1 }}
            layout
            onClick={() => setSeletcedImage(doc.url)}
          >
            <motion.img
              src={doc.url}
              alt="uploaded"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
        ))}
    </div>
  );
};

export default Grid;
