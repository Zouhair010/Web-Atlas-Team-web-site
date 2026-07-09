import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";

function Contact({ setIsSuccess, btnPrimaryHover }) {
    // الحالات (States) لمراقبة الإرسال، النجاح، وحالة النزول في الصفحة
    const [isSubmitting, setIsSubmitting] = useState(false);
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

    return(
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
                    className="btn-primary btnPrimaryHoverh-12 px-8 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-semibold rounded-xl text-sm flex items-center justify-center gap-2" 
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
    )
}
export default Contact;