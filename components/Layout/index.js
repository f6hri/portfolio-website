import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function Layout({ children }) {
  return (
    <motion.div initial="hidden" animate="visible" variants={variants}>
      <div className="max-w-lg py-3 px-5 mx-auto">{children}</div>
    </motion.div>
  );
}
