const Footer = () => {
    return (
        <>
        <footer className="w-full border-t border-slate-800/60 pt-10 pb-4 flex flex-col sm:flex-row justify-between items-center gap-6 text-[11px] text-slate-500 font-['JetBrains_Mono']">
          <div className="flex items-center gap-3">
            <span>&copy; {new Date().getFullYear()} WEB ATLAS · تطوير المواقع الإلكترونية · ميدلت</span>
          </div>
        </footer>
        </>
    );
}
export default Footer;