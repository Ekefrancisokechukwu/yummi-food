import { motion } from "framer-motion";


export const SingleProdWrapper = ({ children }) => {
  return (
    <motion.article
      layout
      className="group  relative overflow-hidden
      border
    before:absolute  before:left-0 before:top-0 before:h-[1.4px]
    before:w-0 before:bg-rose-700  before:transition-all  
    before:duration-500
    after:absolute  after:bottom-0 after:right-0

    after:h-[2px]
    after:w-0
    after:bg-rose-700
    after:transition-all
    after:duration-500
    
    hover:before:w-full
    hover:after:w-full
    "
    >
      <span
        className="
           before:absolute 
           before:left-0    before:top-0  before:h-0 
           before:w-[1.4px]   before:bg-rose-700 

       before:transition-all before:duration-300 after:absolute  after:bottom-0  after:right-0 
       after:h-0  after:w-[2px]
       after:bg-rose-700


       after:transition-all
       after:duration-300
          
      group-hover:before:h-full  group-hover:after:h-full

      "
      ></span>
      {children}
    </motion.article>
  );
};
