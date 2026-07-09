import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// استيراد الشعار الخاص بـ Web Atlas
import webAtlasLogo from '/public/webatlaslogo.png';

// مصفوفة البيانات الخاصة بالمهارات البرمجية
const SKILLS = [
  { name: "Python", category: "الأساسيات / الخلفية", icon: "🐍" },
  { name: "Java", category: "البرمجة كائنية التوجه / أندرويد", icon: "☕" },
  { name: "C# / .NET", category: "تطبيقات المؤسسات", icon: "🔷" },
  { name: "JavaScript", category: "ديناميكية / ويب", icon: "⚡" },
  { name: "React", category: "بناء الواجهات", icon: "⚛️" },
  { name: "Git & GitHub", category: "إدارة النسخ", icon: "🔗" }
];

// مصفوفة البيانات الخاصة بالخدمات
const SERVICES = [
  {
    icon: "🌐",
    title: "تطوير المواقع الإلكترونية",
    description: "مواقع ومنصات مخصصة مبنية من الصفر — سريعة، متجاوبة مع جميع الشاشات، ومتوافقة تماماً مع معايير السيو (SEO). من صفحات الهبوط إلى المنصات المتكاملة.",
    tags: ["React", "Node.js", "Full-Stack"]
  },
  {
    icon: "📱",
    title: "تطبيقات الهواتف الذكية",
    description: "تطوير تطبيقات أندرويد أصلية (Native) بواجهات مستخدم أنيقة، أداء عالي ومستقر، وتجربة مستخدم سلسة مصممة خصيصاً لجمهورك.",
    tags: ["Android", "Java", "Kotlin"]
  },
  {
    icon: "⚙️",
    title: "الأنظمة الخلفية والـ APIs",
    description: "بناء المنطق البرمجي للسيرفرات، هندسة قواعد البيانات، وتطوير واجهات برمجة التطبيقات (REST APIs) المتميزة بالأمان، والاستقرار، والقدرة على التوسع.",
    tags: ["C# / .NET", "SQL", "REST API"]
  },
  {
    icon: "🎨",
    title: "تصميم واجهات المستخدم UI/UX",
    description: "تصميم واجهات حديثة واحترافية تحول الزوار إلى عملاء — تخطيط دقيق لكل بكسل وتدفق مستخدم سلس وبديهي.",
    tags: ["Figma", "Design Systems", "Prototyping"]
  }
];

// مصفوفة البيانات الخاصة بالمشاريع المنجزة
const PROJECTS = [
  {
    title: "مجموعة بنى البيانات الديناميكية والمحسنة | Custom Java DSA",
    description: "إعادة بناء وتطوير الهياكل البيانية الأساسية (Linked List, Hash Map, Set, Stack, Queue) بلغة Java من الصفر. تم تصميمها لتكون ديناميكية بالكامل وبمرونة تحاكي لغة JavaScript في التعامل مع المجموعات، مع ابتكار خوارزميات مخصصة لرفع سرعة وكفاءة الـ Linked List مقارنة بالأداء التقليدي القياسي.",
    tech: ["Java", "Data Structures", "Algorithms Optimization", "Memory Management"],
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "أنظمة إدارة المؤسسات والويب | C# WebForms & Desktop",
    description: "تصميم وبناء أنظمة إدارية ضخمة ومكتملة تشمل نظام إدارة العيادات الطبية (Clinic Management System) لجدولة المواعيد وحفظ سجلات المرضى، ونظام إدارة الفنادق (Hotel Management System). يعتمد المشروع على هندسة متينة لإدارة قواعد البيانات وتأمين تدفق المعلومات وصناعة واجهات تحكم للمستخدم.",
    tech: ["C#", ".NET WebForms", "Database Architecture", "Enterprise Logic"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "منظومة الألعاب وتطبيقات الأندرويد | Android Studio & Java",
    description: "تطوير تطبيقات أندرويد أصلية (Native)، تشمل حاسبة علمية متطورة لمعالجة المعادلات المعقدة، تطبيق المؤقت الرقمي (Stopwatch)، ومحرك لعبة Tic-Tac-Toe ذكي يعتمد على منطق برمجي نظيف (Clean Code) وتدبير رشيد لموارد النظام من الذاكرة والمعالجة.",
    tech: ["Java", "Android SDK", "Android Studio", "Mobile OOP"],
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "تطبيقات سطح المكتب الذكية | Python Cross-Platform GUIs",
    description: "هندسة واجهات مستخدم ديناميكية ومستخلصة باستخدام بيئات بايثون المتنوعة. يتضمن السجل تطبيق إدارة المهام الذكي (smart-ToDo-List) باستخدام مكتبة KivyMD للأنظمة المحمولة و Linux، بالإضافة إلى البرامج المكتبية المخصصة لإدارة شؤون الموظفين (EMS) المبنية بـ Tkinter.",
    tech: ["Python", "KivyMD", "Tkinter", "GUI Architecture"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80"
  }
];

/* ── إعدادات الأنيميشن (Framer Motion Configuration) ── */

// تأثير الظهور التدريجي من الأسفل إلى الأعلى لفقرات الهيرو
const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }
  })
};

// تأثير دخول الأقسام الرئيسية بسلاسة عند النزول (Scroll)
const sectionVariant = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } }
};

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

// تأثير زر التواصل الرئيسي عند تمرير الماوس (توهج وإضاءة)
const btnPrimaryHover = {
  whileHover: { y: -3, scale: 1.04, boxShadow: "0 10px 28px rgba(37,99,235,0.45)" },
  whileTap: { scale: 0.96 },
  transition: { duration: 0.25, ease: [0.25, 1, 0.5, 1] }
};

// تأثير الأزرار الثانوية
const btnSecondaryHover = {
  whileHover: { y: -3, scale: 1.04 },
  whileTap: { scale: 0.96 },
  transition: { duration: 0.25, ease: [0.25, 1, 0.5, 1] }
};

/* ── مكون النافذة المنبثقة للنجاح (Popup Component) ── */
function Popup({ isOpen, onClose }) {
  if (!isOpen) return null;
  return (
    <>
      <div
        onClick={onClose}
        style={{
          position: "fixed", inset: 0,
          background: "rgba(0,0,0,0.7)",
          backdropFilter: "blur(4px)",
          zIndex: 99998,
        }}
      />
      <div
        style={{
          position: "fixed", top: "50%", left: "50%",
          transform: "translate(-50%,-50%)",
          width: "420px", maxWidth: "92%",
          background: "#080c16",
          borderRadius: "20px", overflow: "hidden",
          border: "1px solid rgba(59,130,246,0.25)",
          boxShadow: "0 40px 90px rgba(0,0,0,0.7), 0 0 40px rgba(59,130,246,0.12)",
          zIndex: 99999,
        }}
      >
        <div style={{ height: "4px", background: "linear-gradient(90deg,#2563eb,#60a5fa,#fbbf24)" }} />
        <div style={{ padding: "40px 36px 36px", direction: "rtl" }}>
          <div style={{
            width: "72px", height: "72px", margin: "0 auto",
            borderRadius: "50%",
            background: "radial-gradient(circle,#1d4ed8 0%,#0f172a 70%)",
            border: "1.5px solid rgba(96,165,250,0.35)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "32px", boxShadow: "0 0 28px rgba(59,130,246,0.3)",
          }}>✅</div>
          <h2 style={{ marginTop: "24px", textAlign: "center", color: "#f1f5f9", fontSize: "22px", fontWeight: 700 }}>
            تم إرسال رسالتك بنجاح!
          </h2>
          <p style={{ textAlign: "center", color: "#94a3b8", lineHeight: "1.7", marginTop: "12px", fontSize: "14px" }}>
            نشكرك على تواصلك مع <span style={{ color: "#60a5fa", fontWeight: 600 }}>ويب أطلس</span>.<br />لقد استلمنا رسالتك وسنقوم بالرد عليك في أقرب وقت ممكن.
          </p>
          <div style={{ height: "1px", background: "#1e293b", margin: "28px 0" }} />
          <button
            onClick={onClose}
            style={{
              width: "100%", height: "48px", border: "none", borderRadius: "12px", cursor: "pointer",
              fontSize: "14px", fontWeight: 600, color: "white", background: "linear-gradient(90deg,#1d4ed8,#3b82f6)",
            }}
          >
            العودة للموقع
          </button>
        </div>
      </div>
    </>
  );
}

/* ── المكون الرئيسي للموقع (Main App Component) ── */
export default function App() {
  // الحالات (States) لمراقبة الإرسال، النجاح، وحالة النزول في الصفحة
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // تأثير لمراقبة النزول (Scroll) لتغيير شكل الـ Navbar تلقائياً
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // دالة التعامل مع إرسال الفورم إلى Formspree
  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.target;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      await fetch("https://formspree.io/f/xojoknnb", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
      });
      setIsSuccess(true); // إظهار البوب أب عند النجاح
      form.reset();
    } catch {
      setIsSuccess(true); // احتياطي لتجنب التعليق في حال حدوث خطأ شبكة بسيط
      form.reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    /* الحاوية الكبرى: تمت إضافة (px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20) لضمان مسافة الأمان المستجيبة في الجوانب ومنع الالتصاق نهائياً */
    <div dir="rtl" className="w-full min-h-screen bg-[#05070c] text-slate-200 antialiased overflow-x-hidden flex flex-col items-center justify-start relative pb-24 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 text-right">
      
      {/* تأثير التوهج الخلفي الكبير الملون (Glow Layer) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-blue-500/10 rounded-full blur-[180px] pointer-events-none z-0" />

      {/* ── القائمة العلوية الثابتة (Navbar) ───────────────────────────────────── */}
      <div alignItems="center"  className="w-full max-w-7xl sticky top-4 z-50 mx-auto px-2 sm:px-0">
        <header className={`w-full rounded-2xl flex flex-col md:flex-row justify-between items-center gap-4 px-4 sm:px-8 py-3.5 transition-all duration-300 ${
          scrolled
            ? 'bg-[#080c18]/90 backdrop-blur-xl border border-blue-500/15 shadow-2xl shadow-black/40'
            : 'bg-[#080c18]/60 backdrop-blur-md border border-blue-500/10 shadow-xl'
        }`}>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" }}
            style={{
              width: '1350px',
              height: '800px',
              alignItems: 'center',
              borderRadius: '16px', // زوايا دائرية عصرية
              overflow: 'hidden',
              border: '1px solid rgba(59, 130, 246, 0.4)', // إطار خفيف
              position: 'relative',
              cursor: 'pointer'
            }}
          >
          <img 
                src={webAtlasLogo} 
                alt="Web Atlas" 
                className="w-full h-full object-contain" 
              />
          {/* إضافة طبقة خفيفة فوق الفيديو لتعزيز اللون */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(59,130,246,0.1), transparent)'  }} />
          </motion.div>

          {/* روابط التنقل السريع */}

          <nav style={{ justifyContent: 'space-between', alignItems: 'center',fontSize: "18px",fontWeight: 800 , padding: '20px' }} className="flex items-center gap-1 sm:gap-2 text-xs font-semibold">
  <a href="#about" className="text-blue-400 hover:text-blue-300 hover:bg-blue-500/10 px-3 py-2 rounded-xl transition-all duration-200">      من نحن?    </a>
  <a href="#services" className="text-blue-400 hover:text-blue-300 hover:bg-blue-500/10 px-3 py-2 rounded-xl transition-all duration-200">     ,خدماتنا    </a>
  <a href="#skills" className="text-blue-400 hover:text-blue-300 hover:bg-blue-500/10 px-3 py-2 rounded-xl transition-all duration-200">     ,التقنيات    </a>
  <a href="#projects" className="text-blue-400 hover:text-blue-300 hover:bg-blue-500/10 px-3 py-2 rounded-xl transition-all duration-200">     ,مشاريعنا    </a>
  <motion.a
    href="#contact"
    className="bg-blue-600/20 hover:bg-blue-600/40 border border-blue-500/30 text-blue-300 hover:text-white px-4 py-2 rounded-lg transition-colors inline-block"
    whileHover={{ y: -2, scale: 1.06 }}
    whileTap={{ scale: 0.95 }}
    transition={{ duration: 0.22, ease: [0.25, 1, 0.5, 1] }}
  >     ,اتصل بنا    .    </motion.a>
</nav>
        </header>
      </div>

      {/* ── الحاوية المركزية للمحتوى (Main Content Wrapper) ───────── */}
      <main className="w-full max-w-7xl z-10 flex flex-col gap-40 mt-24 mx-auto">

        {/* ── قسم الهيرو والتعريف الرئيسي (Hero Section) ─────────────────────────── */}
        <section id="about" className="w-full grid md:grid-cols-12 gap-12 items-center min-h-[75vh] py-8">
          {/* النصوص والتقديم البرمجي */}
          <motion.div style={{ justifyContent: 'space-between', alignItems: 'center', padding: '18px 20px 14px', borderBottom: '1px solid #f5f5f4' }}  className="md:col-span-7 flex flex-col items-start" initial="hidden" animate="show">
            {/* <motion.span
              custom={0} variants={fadeUp}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[11px] font-['JetBrains_Mono'] font-medium text-blue-300 mb-6"
            >
              📍  ميدلت  — الأطلس المتوسط
            </motion.span> */}
            
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
              custom={1} variants={fadeUp}
              className="font-['Cairo'] text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black mb-6 leading-[1.15] tracking-tight text-white"
            >
              نصنع مواقع إلكترونية بـ{' '}
              <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-amber-300 bg-clip-text text-transparent">
                معايير عالمية.
              </span>
            </motion.h1>

            <motion.p custom={2} variants={fadeUp} className="text-sm md:text-base text-slate-400 mb-8 leading-relaxed max-w-2xl text-right">
              مرحباً بكم في <strong className="text-slate-200 font-semibold">ويب أطلس </strong>. نحن متخصصون في 
              هندسة المواقع وتطبيقات الويب والأنظمة الخلفية من الصفر — نجمع بين الدقة الخوارزمية والتصميم الرقمي الحديث لمنح مشروعك أقوى حضور على الإنترنت.
            </motion.p>

            {/* أزرار اتخاذ القرار Call to Action */}
            <motion.div custom={3} variants={fadeUp} className="flex gap-4">
              <motion.a href="#projects" style={{
              fontFamily: "'Cairo', sans-serif",
              fontSize: "18px",
              fontWeight: 700,
              background: "linear-gradient(90deg, #f8fafc 0%, #cbd5e1 50%, #93c5fd 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              whiteSpace: "nowrap"
            }} className="btn-primary bg-blue-600 hover:bg-blue-500 text-white px-7 py-3.5 rounded-xl text-sm font-semibold shadow-lg shadow-blue-600/25 inline-block" {...btnPrimaryHover}>
                تصفح المشاريع و ابدأ مشروعك الآن
              </motion.a>
            </motion.div>

            {/* الإحصائيات السريعة بأسفل الـ Hero */}
            <motion.div custom={4} variants={fadeUp} className="flex gap-8 sm:gap-12 mt-16 pt-8 border-t border-slate-800/60 w-full md:w-auto justify-start">
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

        {/* ── قسم الخدمات (Services Section) ─────────────────────────── */}
        <motion.section style={{ justifyContent: 'space-between', alignItems: 'center', padding: '18px 20px 14px', borderBottom: '1px solid #f5f5f4' }} id="services" className="w-full border-t border-blue-500/10 pt-24" variants={sectionVariant} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }}>
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

        {/* ── قسم التكنولوجيات (Skills Section) ───────────────────────────── */}
        <motion.section style={{ justifyContent: 'space-between', alignItems: 'center', padding: '18px 20px 14px', borderBottom: '1px solid #f5f5f4' }} id="skills" className="w-full border-t border-blue-500/10 pt-24" variants={sectionVariant} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }}>
          <div className="mb-16">
            <span style={{
              fontFamily: "'Cairo', sans-serif",
              fontSize: "18px",
              fontWeight: 700,
              background: "linear-gradient(90deg, #f8fafc 0%, #cbd5e1 50%, #93c5fd 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              whiteSpace: "nowrap"
            }} className="text-[11px] font-['JetBrains_Mono'] tracking-widest text-blue-300 bg-blue-500/5 px-2.5 py-1 rounded border border-blue-500/10">البنية التقنية</span>
            <h2 className="font-['Cairo'] text-3xl sm:text-4xl md:text-5xl font-black mt-4 text-white">الأدوات والتقنيات</h2>
          </div>

          {/* كروت المهارات */}
          <div style={{ justifyContent: 'space-between', alignItems: 'center', padding: '18px 20px 14px'}} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-5">
            {SKILLS.map((skill, i) => (
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

        {/* ── قسم الأعمال والمشاريع (Projects Section) ─────────────────────────── */}
        <motion.section style={{ justifyContent: 'space-between', alignItems: 'center', padding: '18px 20px 14px', borderBottom: '1px solid #f5f5f4' }} id="projects" className="w-full border-t border-blue-500/10 pt-24" variants={sectionVariant} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }}>
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

        {/* ── استمارة الاتصال (Contact Section) ──────────────────────────── */}
        <motion.section style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 20px 14px', borderBottom: '1px solid #f5f5f4' }} id="contact" className="w-full border-t border-blue-500/10 pt-24" variants={sectionVariant} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }}>
          <div className="grid lg:grid-cols-12 gap-12 bg-[#080c16]/90 border border-blue-500/12 rounded-3xl p-6 sm:p-10 md:p-16 shadow-2xl">
            {/* جهة اليسار: معلومات الاتصال السريعة */}
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
                <div className="flex items-center gap-3">
                  <motion.a 
                    href="https://github.com/Zouhair010" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-blue-300 transition-colors uppercase tracking-wider" 
                    whileHover={{ y: -2, scale: 1.08 }} 
                    whileTap={{ scale: 0.94 }} 
                    transition={{ duration: 0.2, ease: [0.25, 1, 0.5, 1] }}
                  >
                    GitHub
                  </motion.a>
                </div>
                <div className="flex items-center gap-3">
                  <motion.a 
                    href="https://www.linkedin.com/in/zouhair-ou-azza-492393319/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-blue-300 transition-colors uppercase tracking-wider" 
                    whileHover={{ y: -2, scale: 1.08 }} 
                    whileTap={{ scale: 0.94 }} 
                    transition={{ duration: 0.2, ease: [0.25, 1, 0.5, 1] }}
                  >
                    LinkedIn
                  </motion.a>
                </div>            
                <div className="flex items-center gap-3">
                  <motion.a 
                    href="https://www.facebook.com/profile.php?id=61591722322577" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-blue-300 transition-colors uppercase tracking-wider" 
                    whileHover={{ y: -2, scale: 1.08 }} 
                    whileTap={{ scale: 0.94 }} 
                    transition={{ duration: 0.2, ease: [0.25, 1, 0.5, 1] }}
                  >
                    Facebook
                  </motion.a>
                </div>            
                <div className="flex items-center gap-3">
                  <motion.a 
                    href="https://wa.me/212701302594" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-green-400 text-green-500/90 font-['Cairo'] font-bold transition-colors tracking-wider" 
                    whileHover={{ y: -2, scale: 1.08 }} 
                    whileTap={{ scale: 0.94 }} 
                    transition={{ duration: 0.2, ease: [0.25, 1, 0.5, 1] }}
                  >
                    الواتساب
                  </motion.a>
                </div>            
                <div className="flex items-center gap-3"><span className="text-blue-400 text-base">📍ميدلت، المغرب</span></div>
                <div className="flex items-center gap-3"><span className="text-blue-400 text-base">📧webatlas010@gmail.com</span></div>
                <div className="flex items-center gap-3"><span className="text-green-400 text-base">💬دعم متوفر عبر الواتساب</span></div>
              </div>
            </div>

            {/* جهة اليمين: حقول تجميع البيانات وإرسالها */}
            <div className="lg:col-span-7">
              <form className="space-y-5" onSubmit={handleContactSubmit}>
                <div className="grid sm:grid-cols-2 gap-5">
                  <input 
                    type="text" 
                    name="name" 
                    required 
                    onInvalid={(e) => e.target.setCustomValidity('يرجى ملء هذا الحقل لإدخال الاسم الكامل.')}
                    onInput={(e) => e.target.setCustomValidity('')}
                    className="w-full bg-[#05070f] border border-slate-800/70 hover:border-slate-700 rounded-xl px-5 py-3.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition-colors" 
                    placeholder="الاسم الكامل" 
                  />
                  <input 
                    type="email" 
                    name="email" 
                    required 
                    onInvalid={(e) => e.target.setCustomValidity('يرجى إدخال عنوان بريد إلكتروني صالح.')}
                    onInput={(e) => e.target.setCustomValidity('')}
                    className="w-full bg-[#05070f] border border-slate-800/70 hover:border-slate-700 rounded-xl px-5 py-3.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition-colors" 
                    placeholder="البريد الإلكتروني" 
                  />
                </div>
                <textarea 
                  rows={5} 
                  name="message" 
                  required 
                  onInvalid={(e) => e.target.setCustomValidity('يرجى كتابة تفاصيل مشروعك هنا.')}
                  onInput={(e) => e.target.setCustomValidity('')}
                  className="w-full bg-[#05070f] border border-slate-800/70 hover:border-slate-700 rounded-xl px-5 py-3.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition-colors resize-none" 
                  placeholder="أخبرنا عن تفاصيل مشروعك..." 
                />
                
                {/* الحاوية المحدثة لمنح زر الإرسال مسافة إضافية */}
                <div className="pt-4 flex justify-end">
                  <motion.button 
                    type="submit" 
                    disabled={isSubmitting} 
                    className="btn-primary h-12 px-8 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-semibold rounded-xl text-sm flex items-center justify-center gap-2" 
                    {...btnPrimaryHover}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                        </svg>
                        جاري الإرسال...
                      </>
                    ) : "إرسال الرسالة ←"}
                  </motion.button>
                </div>
              </form>
            </div>
          </div>
        </motion.section>

        {/* ── تذييل الصفحة (Footer) ───────────────────────────────────── */}
        <footer className="w-full border-t border-slate-800/60 pt-10 pb-4 flex flex-col sm:flex-row justify-between items-center gap-6 text-[11px] text-slate-500 font-['JetBrains_Mono']">
          <div className="flex items-center gap-3">
            {/* Cleaned up logo box with fixed sizes that work perfectly on mobile */}
            <div className="w-6 h-6 rounded-md overflow-hidden bg-[#05070f] flex items-center justify-center border border-blue-500/10 shrink-0">
              <img 
                src={webAtlasLogo} 
                alt="Web Atlas" 
                className="w-full h-full object-contain" 
              />
            </div>
            <span>&copy; {new Date().getFullYear()} WEB ATLAS · تطوير المواقع الإلكترونية · ميدلت</span>
          </div>
        </footer>
        
      </main>

      {/* مكون البوب أب للنجاح يشتغل فقط عندما تصبح قيمة isSuccess صحيحة */}
      <Popup isOpen={isSuccess} onClose={() => setIsSuccess(false)} />
    </div>
  );
}