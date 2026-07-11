import { motion } from "framer-motion"

function MotionLink({name,link}){
    return(
        <div className="flex items-center gap-3">
                          <motion.a 
                            href= {link}
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="hover:text-blue-300 transition-colors uppercase tracking-wider" 
                            whileHover={{ y: -2, scale: 1.08 }} 
                            whileTap={{ scale: 0.94 }} 
                            transition={{ duration: 0.2, ease: [0.25, 1, 0.5, 1] }}
                          >
                            {name}
                          </motion.a>
        </div>
    )
}
export default MotionLink;