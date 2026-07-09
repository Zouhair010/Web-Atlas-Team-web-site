import { motion } from 'framer-motion';

function HeroSection({fadeUp, btnPrimaryHover}){
    return(
      <>
        <section 
          id="about" 
          className="w-full grid md:grid-cols-12 gap-12 items-center min-h-[75vh] py-8"
          style={{ paddingTop: "180px" }} // 180px header + 20px extra spacing
        >
          {/* النصوص والتقديم البرمجي */}
          <motion.div 
            style={{ 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              padding: '18px 20px 14px', 
              borderBottom: '1px solid #f5f5f4' 
            }}  
            className="md:col-span-7 flex flex-col items-start" 
            initial="hidden" 
            animate="show"
          >
            <span style={{
                fontFamily: "'Cairo', sans-serif",
                fontSize: "20px",
                fontWeight: 900,
                background: "linear-gradient(90deg, #f8fafc 0%, #cbd5e1 50%, #93c5fd 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                whiteSpace: "nowrap"
              }}>
                ويب أطلس
              </span>
            <motion.h1
              custom={1} 
              variants={fadeUp}
              className="font-['Cairo'] text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black mb-6 leading-[1.15] tracking-tight text-white"
            >
              نصنع مواقع إلكترونية بـ{' '}
              <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-amber-300 bg-clip-text text-transparent">
                معايير عالمية.
              </span>
            </motion.h1>

            <motion.p 
              custom={2} 
              variants={fadeUp} 
              className="text-sm md:text-base text-slate-400 mb-8 leading-relaxed max-w-2xl text-right"
            >
              مرحباً بكم في <strong className="text-slate-200 font-semibold">ويب أطلس </strong>. نحن متخصصون في 
              هندسة المواقع وتطبيقات الويب والأنظمة الخلفية من الصفر — نجمع بين الدقة الخوارزمية والتصميم الرقمي الحديث لمنح مشروعك أقوى حضور على الإنترنت.
            </motion.p>

            {/* أزرار اتخاذ القرار Call to Action */}
            <motion.div custom={3} variants={fadeUp} className="flex gap-4">
              <motion.a 
                href="#projects" 
                style={{
                  fontFamily: "'Cairo', sans-serif",
                  fontSize: "18px",
                  fontWeight: 700,
                  background: "linear-gradient(90deg, #f8fafc 0%, #cbd5e1 50%, #93c5fd 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  whiteSpace: "nowrap"
                }} 
                className="btn-primary bg-blue-600 hover:bg-blue-500 text-white px-7 py-3.5 rounded-xl text-sm font-semibold shadow-lg shadow-blue-600/25 inline-block" 
                {...btnPrimaryHover}
              >
                تصفح المشاريع و ابدأ مشروعك الآن
              </motion.a>
            </motion.div>

            {/* الإحصائيات السريعة بأسفل الـ Hero */}
            <motion.div 
              custom={4} 
              variants={fadeUp} 
              className="flex gap-8 sm:gap-12 mt-16 pt-8 border-t border-slate-800/60 w-full md:w-auto justify-start"
            >
              {[
                { value: "", label: "مشاريع تم تسليمها +10" },
                { value: "", label: "بيئات برمجية متكاملة +4" },
                { value: "", label: "تركيز كامل على العميل %100" },
              ].map((stat, i) => (
                <div key={i} className="text-left">
                  <div className="text-2xl sm:text-3xl font-black text-white font-['Cairo']">{stat.value}</div>
                  <div className="text-[11px] text-slate-500 font-['JetBrains_Mono'] mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </section>
      </>
    );
}

export default HeroSection;