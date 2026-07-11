import { useEffect, useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { nav } from "framer-motion/client";
import data from './data';


function Header({ webAtlasLogo, lang, setLang}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "150px",
          background: "rgba(5, 7, 12, 0.75)",
          backdropFilter: "blur(10px)",
          zIndex: 999999,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 20px",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <img
          src={webAtlasLogo}
          style={{
            height: "100px",
            objectFit: "contain",
          }}
          alt="WebAtlas Logo"
        />

        <div className="flex items-center gap-4">
        {/* الزر */}
        <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        style={{
        background: "transparent",
        border: "none",
        cursor: "pointer",
        padding: "10px",
        display: "flex", // باش نضمنو الأيقونة مقادة
        alignItems: "center"
       }}
       onMouseEnter={(e) => e.target.style.color = "#4361cc"}
       onMouseLeave={(e) => e.target.style.color = "white"}
      >
    <IoAddCircleOutline fontSize='40px' />
    </button>

    {/* قائمة اختيار اللغة */}
    <select
    value={lang}
    onChange={(e) => setLang(e.target.value)}
    style={{ 
      background: "rgba(5, 7, 12, 0.95)", 
      padding: "8px 12px", // عدلت الـ padding باش يجي متناسق مع الزر
      cursor: "pointer" 
    }}
    onMouseEnter={(e) => e.target.style.color = "#4361cc"}
    onMouseLeave={(e) => e.target.style.color = "white"}
    className="bg-[#2a2926] border border-[#d4af37]/20 text-[#d4af37] text-xs font-semibold rounded-sm focus:outline-none focus:ring-1 focus:ring-[#d4af37]"
  >
    {['ar', 'en', 'fr'].map((l) => (
      <option key={l} value={l} className="bg-[#1a1917] text-[#d4af37]">
        {l.toUpperCase()}
      </option>
    ))}
  </select>
  </div>
      </header>

      {/* Menu Overlay */}
      {isMenuOpen && (
        <div
          style={{
            position: "fixed",
            top: "80px", // Below the header
            left: 0,
            width: "100%",
            height: "calc(100vh - 80px)",
            background: "rgba(5, 7, 12, 0.95)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "30px",
            zIndex: 999998,
          }}
        >
          
          <a href="#about" onClick={() => setIsMenuOpen(false)} 
          style={{ color: "white", fontSize: "24px", textDecoration: "none" }}
          onMouseEnter={(e) => e.target.style.color = "#4361cc"}
          onMouseLeave={(e) => e.target.style.color = "white"}
          >{data["navLinks"][lang]["about"]}</a>
          <a href="#services" onClick={() => setIsMenuOpen(false)} 
          style={{ color: "white", fontSize: "24px", textDecoration: "none" }}
          onMouseEnter={(e) => e.target.style.color = "#4361cc"}
          onMouseLeave={(e) => e.target.style.color = "white"}
          >{data["navLinks"][lang]["services"]}</a>
          <a href="#skills" onClick={() => setIsMenuOpen(false)} 
          style={{ color: "white", fontSize: "24px", textDecoration: "none" }}
          onMouseEnter={(e) => e.target.style.color = "#4361cc"}
          onMouseLeave={(e) => e.target.style.color = "white"}
          >{data["navLinks"][lang]["skills"]}</a>
          <a href="#projects" onClick={() => setIsMenuOpen(false)} 
          style={{ color: "white", fontSize: "24px", textDecoration: "none" }}
          onMouseEnter={(e) => e.target.style.color = "#4361cc"}
          onMouseLeave={(e) => e.target.style.color = "white"}
          >{data["navLinks"][lang]["projects"]}</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)} 
          style={{ color: "white", fontSize: "24px", textDecoration: "none" }}
          onMouseEnter={(e) => e.target.style.color = "#4361cc"}
          onMouseLeave={(e) => e.target.style.color = "white"}
          >{data["navLinks"][lang]["contact"]}</a>
        </div>
      )}
    </>
  );
}

export default Header;