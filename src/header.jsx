import { motion } from "framer-motion";

function Header({ webAtlasLogo }) {
  return (
    <header
      style={{
        position: "fixed",
        width: "calc(100% - 17px)",
        fontFamily: "'Cairo', sans-serif",
        fontSize: "18px",
        top: 0,
        left: 0,
        height: "150px",
        background: "rgba(5, 7, 12, 0.75)",
        backdropFilter: "blur(0.5px)",
        zIndex: 999999,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 40px",
      }}
      className="border-b border-[#d4af37]/30 shadow-lg"
    >
      <img
        src={webAtlasLogo}
        style={{
          width: "260px",
          height: "200px",
          objectFit: "contain",
          flexShrink: 0,
        }}
        alt="WebAtlas Logo"
      />
      
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          gap: "32px", // Explicit gap in pixels
        }}
        className="hidden md:flex"
      >
        <a
          href="#about"
          style={{
            padding: "8px 12px",
            fontSize: "16px",
            color: "white",
            fontWeight: "bold",
            whiteSpace: "nowrap",
            textDecoration: "none",
            transition: "color 0.3s",
          }}
          onMouseEnter={(e) => e.target.style.color = "#1a00db"}
          onMouseLeave={(e) => e.target.style.color = "white"}
        >
          من نحن؟
        </a>
        <a
          href="#services"
          style={{
            padding: "8px 12px",
            fontSize: "16px",
            color: "white",
            fontWeight: "bold",
            whiteSpace: "nowrap",
            textDecoration: "none",
            transition: "color 0.3s",
          }}
          onMouseEnter={(e) => e.target.style.color = "#1a00db"}
          onMouseLeave={(e) => e.target.style.color = "white"}
        >
          خدماتنا
        </a>
        <a
          href="#skills"
          style={{
            padding: "8px 12px",
            fontSize: "16px",
            color: "white",
            fontWeight: "bold",
            whiteSpace: "nowrap",
            textDecoration: "none",
            transition: "color 0.3s",
          }}
          onMouseEnter={(e) => e.target.style.color = "#1a00db"}
          onMouseLeave={(e) => e.target.style.color = "white"}
        >
          التقنيات
        </a>
        <a
          href="#projects"
          style={{
            padding: "8px 12px",
            fontSize: "16px",
            color: "white",
            fontWeight: "bold",
            whiteSpace: "nowrap",
            textDecoration: "none",
            transition: "color 0.3s",
          }}
          onMouseEnter={(e) => e.target.style.color = "#1a00db"}
          onMouseLeave={(e) => e.target.style.color = "white"}
        >
          مشاريعنا
        </a>
        <a
          href="#contact"
          style={{
            padding: "8px 12px",
            fontSize: "16px",
            color: "white",
            fontWeight: "bold",
            whiteSpace: "nowrap",
            textDecoration: "none",
            transition: "color 0.3s",
          }}
          onMouseEnter={(e) => e.target.style.color = "#1a00db"}
          onMouseLeave={(e) => e.target.style.color = "white"}
        >
          اتصل بنا
        </a>
      </nav>
    </header>
  );
}

export default Header;