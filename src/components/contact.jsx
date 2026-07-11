import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Send } from 'lucide-react';
import data from './data';

function Contact({ setIsSuccess, btnPrimaryHover, lang}) {
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
                  <motion.input 
                   type="text" 
                   name="name" 
                   required 
                   onInvalid={(e) => e.target.setCustomValidity(data["contactContent"][lang]["validName"])}
                    onInput={(e) => e.target.setCustomValidity('')}
                   style={{ border: '1px solid rgba(255, 255, 255, 0.4)' }}
                   className="w-full bg-[#05070f] rounded-xl px-5 py-3.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                   placeholder={data["contactContent"][lang]["name"]} 
                   {...btnPrimaryHover}
                   />
                  <motion.input 
                    type="email" 
                    name="email" 
                    required 
                    onInvalid={(e) => e.target.setCustomValidity(data["contactContent"][lang]["validEmail"])}
                    onInput={(e) => e.target.setCustomValidity('')}
                    style={{ border: '1px solid rgba(255, 255, 255, 0.4)' }}
                    className="w-full bg-[#05070f] rounded-xl px-5 py-3.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder={data["contactContent"][lang]["email"]} 
                    {...btnPrimaryHover}
                  />
                </div>
                <motion.textarea 
                  rows={5} 
                  name="message" 
                  required 
                  onInvalid={(e) => e.target.setCustomValidity(data["contactContent"][lang]["validMsg"])}
                  onInput={(e) => e.target.setCustomValidity('')}
                  style={{ border: '1px solid rgba(255, 255, 255, 0.4)' }}
                  className="w-full bg-[#05070f] rounded-xl px-5 py-3.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder={data["contactContent"][lang]["message"]}
                  {...btnPrimaryHover}
                />
                
                {/* الحاوية المحدثة لمنح زر الإرسال مسافة إضافية */}
                <div className="pt-4 flex justify-end">
                  <motion.button 
                    type="submit" 
                    disabled={isSubmitting} 
                    className="btn-primary btnPrimaryHoverh-12 px-8 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-semibold rounded-xl text-sm flex items-center justify-center gap-2" 
                    {...btnPrimaryHover}
                  >
                    {
                    isSubmitting ? (
                      <>
                        {data["contactContent"][lang]["sending"]}
                      </>
                    ) :(<><Send size={20} /> {data["contactContent"][lang]["submit"]} </>)
                    }
                  </motion.button>
                </div>
              </form>
            </div>
    )
}

export default Contact;