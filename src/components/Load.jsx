import { motion } from "framer-motion";

const Load = () => {
  return (
    <motion.div
      style={{cursor: "none",
        zIndex: 1,
        position: "grid",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -150%)",
      }}
      transition={{duration : 3}}
      initial={{ scale: 0.35, rotate:-45 }}
      animate={{ scale: 0.25, rotate:360 }}
        whileTap={{ scale: 1 }}
    >
      <motion.img
        
       
        src="./assets/icon.png"
        alt="icon"
      />
      <h1
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 0.5 }}
        transition={{ duration: 0.5 }}
        style={{fontSize:"6rem",paddingLeft:"8rem"}}
      >
        loading...
      </h1>
    </motion.div>
  );
};

export default Load;
