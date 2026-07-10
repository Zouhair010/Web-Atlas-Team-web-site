import { useState } from "react";

function Header({ webAtlasLogo }) {
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
          backdropFilter: "blur(0.5px)",
          zIndex: 999999,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 20px",
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

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{
            background: "transparent",
            border: "none",
            cursor: "pointer",
            padding: "10px",
          }}
        >
          ☰ {/* Simple hamburger icon */}
        </button>
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
          >
            من نحن؟
          </a>
          <a href="#services" onClick={() => setIsMenuOpen(false)} 
          style={{ color: "white", fontSize: "24px", textDecoration: "none" }}
          onMouseEnter={(e) => e.target.style.color = "#4361cc"}
          onMouseLeave={(e) => e.target.style.color = "white"}>
            خدماتنا
          </a>
          <a href="#skills" onClick={() => setIsMenuOpen(false)} 
          style={{ color: "white", fontSize: "24px", textDecoration: "none" }}
          onMouseEnter={(e) => e.target.style.color = "#4361cc"}
          onMouseLeave={(e) => e.target.style.color = "white"}>
            التقنيات
          </a>
          <a href="#projects" onClick={() => setIsMenuOpen(false)} 
          style={{ color: "white", fontSize: "24px", textDecoration: "none" }}
          onMouseEnter={(e) => e.target.style.color = "#4361cc"}
          onMouseLeave={(e) => e.target.style.color = "white"}>
            مشاريعنا
          </a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)} 
          style={{ color: "white", fontSize: "24px", textDecoration: "none" }}
          onMouseEnter={(e) => e.target.style.color = "#4361cc"}
          onMouseLeave={(e) => e.target.style.color = "white"}>
            اتصل بنا
          </a>
        </div>
      )}
    </>
  );
}

export default Header;