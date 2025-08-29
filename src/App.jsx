import FeatureShowcase from "./components/FeatureShowcase"

export default function App() {
  return (
    <main>
      <section style={{ maxWidth: 960, margin: "0 auto", padding: "64px 16px" }}>
        <h1 style={{ fontSize: 28, fontWeight: 600, color: "#111827" }}>Feature Showcase (Internship Task)</h1>
        <p style={{ marginTop: 16, maxWidth: 640, color: "#4B5563" }}>
          Scroll to the section below. It becomes sticky, auto-switches features 1 → 5, then the page scrolls normally
          after the last feature. Click items on the right or use arrows to switch.
        </p>
      </section>

      <FeatureShowcase />

      <section style={{ maxWidth: 960, margin: "0 auto", padding: "96px 16px" }}>
        <h2 style={{ fontSize: 24, fontWeight: 600 }}>Normal scrolling resumes here.</h2>
        <p style={{ marginTop: 16, maxWidth: 640, color: "#4B5563" }}>
          This content demonstrates that the sticky effect ends after feature 5.
        </p>
      </section>
    </main>
  )
}
