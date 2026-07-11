import { motion } from 'framer-motion';
import ContactInfo from './contactInfo';
import Contact from './contact';

function ContactSection({setIsSuccess, btnPrimaryHover, sectionVariant, lang}){
    // console.log(btnPrimaryHover)
    return(
        <motion.section style={{ display: 'flex', justifyContent: 'space-between', padding: '18px 20px 14px', borderBottom: '1px solid #f5f5f4' }} id="contact" className="w-full border-t border-blue-500/10 pt-24" variants={sectionVariant} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }}>
            {/* جهة اليسار: معلومات الاتصال السريعة */}
            <ContactInfo lang={lang} btnPrimaryHover={btnPrimaryHover}/>
            {/* جهة اليمين: حقول تجميع البيانات وإرسالها */}
            <Contact setIsSuccess={setIsSuccess} btnPrimaryHover={btnPrimaryHover} lang={lang}/>
        </motion.section>
    )
}

export default ContactSection;