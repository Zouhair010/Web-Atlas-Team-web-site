import { motion } from 'framer-motion';
import Contact from './contact';
import ContactInfo from './contactInfo';

function ContactSection({setIsSuccess, btnPrimaryHover, sectionVariant}){
    return(
        <motion.section style={{ display: 'flex', justifyContent: 'space-between', padding: '18px 20px 14px', borderBottom: '1px solid #f5f5f4' }} id="contact" className="w-full border-t border-blue-500/10 pt-24" variants={sectionVariant} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }}>
            {/* جهة اليسار: معلومات الاتصال السريعة */}
            <ContactInfo />
            {/* جهة اليمين: حقول تجميع البيانات وإرسالها */}
            <Contact setIsSuccess={setIsSuccess} btnPrimaryHover={btnPrimaryHover}/>
        </motion.section>
    )
}
export default ContactSection;