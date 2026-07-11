import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// استيراد الشعار الخاص بـ Web Atlas
import webAtlasLogo from '/public/webatlasteamlogo.png';
import { useNavigate } from 'react-router-dom'; // إذا كنت تستخدم React Router، أو يمكنك استخدام window.location مباشرة

import Popup from './components/popup'; // استيراد مكون البوب أب من ملف منفصل 


import Header from './components/header';
import HeroSection from './components/heroSection';
import ServicesSection from './components/servicesSection';
import ProjectsSection from './components/projectsSection';
import SkillsSection from './components/skillsSection';
import Footer from './components/footer';
import ContactSection from './components/contactSection';


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

/* ── المكون الرئيسي للموقع (Main App Component) ── */
export default function App() {
  
  const [scrolled, setScrolled] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // let lang = 'ar'
  const [lang, setLang] = useState('ar'); // 1. استخدام useState هنا
  // حالة لتخزين الصورة المحددة لعرضها في وضع ملء الشاشة
  const [selectedImage, setSelectedImage] = useState(null);

  // تأثير لمراقبة النزول (Scroll) لتغيير شكل الـ Navbar تلقائياً
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    /* الحاوية الكبرى: تمت إضافة (px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20) لضمان مسافة الأمان المستجيبة في الجوانب ومنع الالتصاق نهائياً */
    <div dir={lang==='ar' ? 'rtl' : 'ltr'} className="w-full min-h-screen bg-[#05070c] text-slate-200 antialiased overflow-x-hidden flex flex-col items-center justify-start relative pb-24 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 text-right">
      
      {/* تأثير التوهج الخلفي الكبير الملون (Glow Layer) */}

      {/* ── القائمة العلوية الثابتة (Navbar) ───────────────────────────────────── */}
      <Header webAtlasLogo={webAtlasLogo} lang={lang} setLang={setLang} />

      {/* ── الحاوية المركزية للمحتوى (Main Content Wrapper) ───────── */}
      <main className="w-full max-w-7xl z-10 flex flex-col gap-40 mt-24 mx-auto">
        {/* ── قسم الهيرو والتعريف الرئيسي (Hero Section) ─────────────────────────── */}
        <HeroSection fadeUp={fadeUp} btnPrimaryHover={btnPrimaryHover} lang={lang} />

        {/* ── قسم الخدمات (Services Section) ─────────────────────────── */}
        <ServicesSection fadeUp={fadeUp} sectionVariant={sectionVariant} lang={lang} />

        {/* ── قسم التكنولوجيات (Skills Section) ───────────────────────────── */}
        <SkillsSection fadeUp={fadeUp} sectionVariant={sectionVariant} lang={lang} />

        {/* ── قسم الأعمال والمشاريع (Projects Section) ─────────────────────────── */}
        <ProjectsSection fadeUp={fadeUp} sectionVariant={sectionVariant} lang={lang} />

        {/* ── استمارة الاتصال (Contact Section) ──────────────────────────── */}
        <ContactSection setIsSuccess={setIsSuccess} btnPrimaryHover={btnPrimaryHover} sectionVariant={sectionVariant} lang={lang}/>

        {/* ── تذييل الصفحة (Footer) ───────────────────────────────────── */}
        <div align="center" className="w-full max-w-7xl mx-auto px-2 sm:px-0">
          <Footer lang={lang} />
        </div>
      </main>

      {/* مكون البوب أب للنجاح يشتغل فقط عندما تصبح قيمة isSuccess صحيحة */}
      <Popup isOpen={isSuccess} onClose={() => setIsSuccess(false)} />
    </div>
  );
}