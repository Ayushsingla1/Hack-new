import { useInView } from "motion/react";
import React from "react";
import {motion} from "motion/react"

const LazySection = ({ children } : {children : any}) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true});
    
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    );
  };

export default LazySection;