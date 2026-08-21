const logoStyle: React.CSSProperties = {
  width: 34,
  height: 34,
  borderRadius: 10,
  background: "var(--primary)",
  color: "#fff",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  userSelect: "none",
  flexShrink: 0,
};

export function Logo() {
  return (
    <span className="logo" style={logoStyle} aria-hidden="true">
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 21V3" />
        <path d="M5 10l7-7 7 7" />
      </svg>
    </span>
  );
}
