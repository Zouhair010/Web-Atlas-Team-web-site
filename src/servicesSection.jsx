import { motion } from "framer-motion";
import SERVICES from "./services";
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

function ServicesSection(fadeUp, sectionVariant){
    return(
                <motion.section style={{
                   justifyContent: 'space-between', alignItems: 'center',
                   padding: '18px 20px 14px',
                   borderBottom: '1px solid #f5f5f4',
                   scrollMarginTop: "155px" }}// Controls where scrolling stops for this section

                   id="services" className="w-full border-t border-blue-500/10 pt-24" variants={sectionVariant} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }}>
                  <div className="mb-16">
                    <span style={{
                      fontFamily: "'Cairo', sans-serif",
                      fontSize: "18px",
                      fontWeight: 700,
                      background: "linear-gradient(90deg, #f8fafc 0%, #cbd5e1 50%, #93c5fd 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      whiteSpace: "nowrap"
                    }} className="text-[11px] font-['JetBrains_Mono'] tracking-widest text-blue-300 bg-blue-500/5 px-2.5 py-1 rounded border border-blue-500/10">ماذا نقدم</span>
                    <h2 className="font-['Cairo'] text-3xl sm:text-4xl md:text-5xl font-black mt-4 text-white">خدماتنا الاحترافية</h2>
                    <p className="text-slate-400 text-sm md:text-base mt-4 max-w-xl leading-relaxed">حلول رقمية متكاملة، من الفكرة إلى الإطلاق الفعلي — مبنية بدقة وعناية لتضمن الاستدامة.</p>
                  </div>
        
                  {/* توليد كروت الخدمات عبر عمل Loop لمصفوفة الخدمات */}
                  <div style={{ justifyContent: 'space-between', alignItems: 'center', padding: '18px 20px 14px'}} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {SERVICES.map((service, i) => (
                      <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} {...cardHover} className="card-hover bg-[#080c16]/70 border border-slate-800/60 hover:border-blue-500/30 rounded-2xl p-7 flex flex-col gap-5">
                        <div className="text-4xl">{service.icon}</div>
                        <div>
                          <h3 className="font-bold text-base text-white mb-2">{service.title}</h3>
                          <p className="text-slate-400 text-xs md:text-sm leading-relaxed">{service.description}</p>
                        </div>
                        <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                          {service.tags.map((tag, j) => (
                            <span key={j} className="text-[10px] font-['JetBrains_Mono'] bg-blue-500/8 text-blue-300 px-2.5 py-0.5 rounded border border-blue-500/15">{tag}</span>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.section>
    );
}
export default ServicesSection;