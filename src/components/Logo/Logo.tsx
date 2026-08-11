const logoStyle: React.CSSProperties = {
  width: 34,
  height: 34,
  borderRadius: 10,
  background: "var(--primary)",
  color: "#fff",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: 800,
  fontSize: 19,
  lineHeight: 1,
  userSelect: "none",
  flexShrink: 0,
};

export function Logo() {
  return (
    <span className="logo" style={logoStyle} aria-hidden="true">
      Б
    </span>
  );
}
