import MotionLink from './motionLink';
function ContactInfo() {
  return (
    <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <span style={{
              fontFamily: "'Cairo', sans-serif",
              fontSize: "18px",
              fontWeight: 700,
              background: "linear-gradient(90deg, #f8fafc 0%, #cbd5e1 50%, #93c5fd 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              whiteSpace: "nowrap"
            }} className="text-[11px] font-['JetBrains_Mono'] tracking-widest text-blue-300 bg-blue-500/5 px-2.5 py-1 rounded border border-blue-500/10">تواصل معنا</span>
                <h2 className="font-['Cairo'] text-2xl sm:text-3xl md:text-4xl font-black mt-5 mb-4 text-white leading-snug">لنبتكر شيئاً استثنائياً معاً</h2>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed">هل تبحث عن الأداء العالي والحلول البرمجية المتكاملة؟ راسلنا لمناقشة تفاصيل مشروعك القادم.</p>
              </div>
              <div className="mt-12 space-y-4 font-['JetBrains_Mono'] text-xs sm:text-sm text-slate-500 border-t border-slate-800/60 pt-8">
                <MotionLink name={"github"} link={"https://github.com/Zouhair010"}/>
                <MotionLink name={"LinkedIn"} link={"https://www.linkedin.com/in/zouhair-ou-azza-492393319/"}/> 
                <MotionLink name={"Facebook"} link={"https://www.facebook.com/profile.php?id=61591722322577"}/>  
                <MotionLink name={"Whatsapp"} link={"https://wa.me/212701302594"}/>            
                <div className="flex items-center gap-3"><span className="text-blue-400 text-base">📍ميدلت، المغرب</span></div>
                <div className="flex items-center gap-3"><span className="text-blue-400 text-base">📧webatlas010@gmail.com</span></div>
                <div className="flex items-center gap-3"><span className="text-green-400 text-base">💬دعم متوفر عبر الواتساب</span></div>
              </div>
    </div>
  );
}
export default ContactInfo;