import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface FadeInProps {
  children: React.ReactNode;
  duration?: number;
}

const FadeIn: React.FC<FadeInProps> = ({ children, duration = 1.5 }) => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true, margin: "0px 0px -200px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: duration }}
      className="will-change-opacity"
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
