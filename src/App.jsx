import FeatureShowcase from "./components/FeatureShowcase"

export default function App() {
  return (
    <main>
      {/* Intro Section */}
      <section className="max-w-3xl mx-auto px-4 py-5 sm:py-20 mb-[1.5rem]">
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900">
          Feature Showcase (Internship Task)
        </h1>
        <p className="mt-4 text-gray-600 text-sm sm:text-base max-w-xl">
          Scroll to the section below. It becomes sticky, auto-switches features 1 → 5, then the page scrolls normally
          after the last feature. Click items on the right or use arrows to switch.
        </p>
      </section>

      {/* Feature Showcase */}
      <FeatureShowcase />

      {/* Outro Section */}
      <section className="max-w-3xl mx-auto px-4 py-16 sm:py-20 mt-[1rem]">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">Normal scrolling resumes here.</h2>
        <p className="mt-4 text-gray-600 text-sm sm:text-base max-w-xl">
          This content demonstrates that the sticky effect ends after feature 5.
        </p>
      </section>
    </main>
  )
}
