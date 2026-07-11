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
      >￼
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
export default Popup;