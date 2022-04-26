import React from "react";
import { motion } from "framer-motion/dist/framer-motion";

const Modal = ({ selectedImage, setSeletcedImage }) => {
  const backdropHandler = () => {
    setSeletcedImage(null);
  };

  return (
    <motion.div
      onClick={backdropHandler}
      className="backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img 
      className="img" 
      src={selectedImage} 
      alt="enlarged-pic"
      initial={{ y:'-100vh'}}
      animate={{ y: 0}}
       />
    </motion.div>
  );
};

export default Modal;
