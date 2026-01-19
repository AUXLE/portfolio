export default function SectionWrapper({ children, bg }) {
  return (
    <section style={{ background: bg || "transparent" }}>
      <div className="container">
        {children}
      </div>
    </section>
  );
}
