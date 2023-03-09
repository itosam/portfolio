import { motion } from "framer-motion";

const Load = () => {
  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}
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
    </div>
  );
};

export default Load;
