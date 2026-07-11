import { motion } from "framer-motion"

function MotionLink({name, btnPrimaryHover, link}){
    return(
        <div className="flex items-center gap-3">
                          <motion.a style={{
                fontFamily: "'Cairo', sans-serif",
                fontSize: "15px",
                fontWeight: 700,
                background: "linear-gradient(90deg, #f8fafc 0%, #cbd5e1 50%, #93c5fd 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                whiteSpace: "nowrap"
                }}
                className="btn-primary bg-blue-600 hover:bg-blue-500 text-white px-7 py-3.5 rounded-xl text-sm font-semibold shadow-lg shadow-blue-600/25 inline-block" 
                {...btnPrimaryHover}
                            href= {link}
                            target="_blank" 
                            rel="noopener noreferrer" 
                          >
                            {name}
                          </motion.a>
        </div>
    )
}
export default MotionLink;