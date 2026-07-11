import { motion } from "framer-motion";
import data from "./data";
// تأثير حركي فخم عند تمرير الماوس فوق الكروت (ارتفاع خفيف + توهج أزرق)
const cardHover = {
  whileHover: {
    y: -8,
    scale: 1.02,
    boxShadow: "0 28px 64px rgba(0,0,0,0.6), 0 0 32px rgba(59,130,246,0.13)"
  },
  whileTap: { scale: 0.99 },
  transition: { duration: 0.35, ease: [0.25, 1, 0.5, 1] }
};

function SkillsSection({fadeUp, sectionVariant, lang}){
    return(
        <motion.section style={{ justifyContent: 'space-between',
                   alignItems: 'center', padding: '18px 20px 14px',
                   borderBottom: '1px solid #f5f5f4' ,
                   scrollMarginTop: "155px" }}// Controls where scrolling stops for this section
                   id="skills" className="w-full border-t border-blue-500/10 pt-24" variants={sectionVariant} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }}>
                  <div className="mb-16">
                    <span style={{
                      fontFamily: "'Cairo', sans-serif",
                      fontSize: "18px",
                      fontWeight: 700,
                      background: "linear-gradient(90deg, #f8fafc 0%, #cbd5e1 50%, #93c5fd 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      whiteSpace: "nowrap"
                    }} className="text-[11px] font-['JetBrains_Mono'] tracking-widest text-blue-300 bg-blue-500/5 px-2.5 py-1 rounded border border-blue-500/10">{data["skillsContent"][lang]["badge"]}</span>
                    <h2 className="font-['Cairo'] text-3xl sm:text-4xl md:text-5xl font-black mt-4 text-white">{data["skillsContent"][lang]["title"]}</h2>
                  </div>
        
                  {/* كروت المهارات */}
                  <div style={{ justifyContent: 'space-between', alignItems: 'center', padding: '18px 20px 14px'}} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-5">
                    {data["skillsContent"][lang]["skillsList"].map((skill, i) => (
                      <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} {...cardHover} className="card-hover bg-[#080c16]/60 border border-slate-800/60 hover:border-blue-500/30 rounded-2xl p-6 flex flex-col justify-between h-32">
                        <span className="text-2xl">{skill.icon}</span>
                        <div>
                          <h3 className="font-bold text-sm text-slate-200">{skill.name}</h3>
                          <span className="text-[10px] text-slate-500 font-['JetBrains_Mono'] block mt-1">{skill.category}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.section>
    );
}
export default SkillsSection;