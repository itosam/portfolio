import { motion } from "framer-motion";

const Load = () => {
  return (
    <motion.div
      style={{
        zIndex: 1,
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}
      initial={{rotate:-45}}
      animate={{rotate:45}}
      transition={{duration : 5}}
    >
      <motion.img
        style={{ cursor: "none" }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 0.5 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1 }}
        src="./assets/icon.png"
        alt="icon"
      />
      <motion.p
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 0.5 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1 }}
      >
        loading...
      </motion.p>
    </motion.div>
  );
};

export default Load;
