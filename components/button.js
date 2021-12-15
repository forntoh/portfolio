import { motion } from "framer-motion";

export const Button = ({ label, className, ...props }) => {
  return (
    <motion.button
      className={`border-primary text-primary border rounded px-6 py-2 hover:bg-primary hover:text-background transition-all whitespace-nowrap select-none ${className}`}
      whileTap={{
        scale: 0.95,
        transition: {
          duration: 0.025,
        },
      }}
      {...props}
    >
      {label}
    </motion.button>
  );
};
