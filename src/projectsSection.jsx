import { motion } from "framer-motion";
import PROJECTS from "./projects";
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
function ProjectsSection(fadeUp, sectionVariant){
    return(
        <motion.section style={{ justifyContent: 'space-between',
                   alignItems: 'center', padding: '18px 20px 14px',
                   borderBottom: '1px solid #f5f5f4',scrollMarginTop: "155px"}}
                   id="projects" className="w-full border-t border-blue-500/10 pt-24" variants={sectionVariant} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }}>
                  <div className="mb-16">
                    <span style={{
                      fontFamily: "'Cairo', sans-serif",
                      fontSize: "18px",
                      fontWeight: 700,
                      background: "linear-gradient(90deg, #f8fafc 0%, #cbd5e1 50%, #93c5fd 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      whiteSpace: "nowrap"
                    }} className="text-[11px] font-['JetBrains_Mono'] tracking-widest text-amber-300 bg-amber-500/5 px-2.5 py-1 rounded border border-amber-500/10">أعمال مختارة</span>
                    <h2 className="font-['Cairo'] text-3xl sm:text-4xl md:text-5xl font-black mt-4 text-white">مشاريع طُوّرت بإتقان هندسي</h2>
                  </div>
        
                  {/* عرض المشاريع */}
                  <div style={{ justifyContent: 'space-between', alignItems: 'center', padding: '18px 20px 14px'}} className="grid md:grid-cols-2 gap-8">
                    {PROJECTS.map((project, i) => (
                      <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} {...cardHover} className="card-hover bg-[#080c16]/60 border border-slate-800/60 hover:border-blue-500/30 rounded-2xl flex flex-col overflow-hidden shadow-xl">
                        <div className="h-56 sm:h-64 w-full overflow-hidden relative">
                          <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-75 hover:scale-105 transition-transform duration-700" />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#05070c]/90 via-transparent to-transparent" />
                        </div>
                        <div className="p-7 flex-1 flex flex-col justify-between">
                          <div>
                            <h3 className="text-base sm:text-lg font-bold text-white mb-3 leading-snug">{project.title}</h3>
                            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">{project.description}</p>
                          </div>
                          <div className="flex flex-wrap gap-1.5 pt-2">
                            {project.tech.map((t, j) => (
                              <span key={j} className="text-[10px] font-['JetBrains_Mono'] bg-slate-900 text-slate-400 px-2.5 py-0.5 rounded border border-slate-800/50">{t}</span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
        </motion.section>
    );
}
export default ProjectsSection;