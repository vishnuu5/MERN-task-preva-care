import { useEffect, useMemo, useRef, useState } from "react"
import "../index.css"
import { features as FEATURES } from "../data/features"

// Helper
const clamp = (n, min, max) => Math.min(Math.max(n, min), max)

export default function FeatureShowcase() {
  const containerRef = useRef(null)
  const [featureIndex, setFeatureIndex] = useState(0)
  const features = useMemo(() => FEATURES, [])

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const onScroll = () => {
      const rect = el.getBoundingClientRect()
      const containerTop = window.scrollY + rect.top
      const totalScrollable = el.offsetHeight - window.innerHeight
      if (totalScrollable <= 0) return

      const current = window.scrollY - containerTop
      const progress = clamp(current / totalScrollable, 0, 1)
      const nextIndex = clamp(Math.floor(progress * features.length), 0, features.length - 1)
      setFeatureIndex(nextIndex)
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [features.length])

  const scrollToFeature = (idx) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const containerTop = window.scrollY + rect.top
    const totalScrollable = el.offsetHeight - window.innerHeight
    const fraction = features.length === 1 ? 0 : idx / (features.length - 1)
    const target = Math.round(containerTop + totalScrollable * fraction)
    window.scrollTo({ top: target, behavior: "smooth" })
  }

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault()
        scrollToFeature(clamp(featureIndex - 1, 0, features.length - 1))
      } else if (e.key === "ArrowRight") {
        e.preventDefault()
        scrollToFeature(clamp(featureIndex + 1, 0, features.length - 1))
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [featureIndex, features.length])

  const current = features[featureIndex]

  return (
    <section ref={containerRef} className="relative px-4 py-12 sm:py-16" aria-label="Feature Showcase">
      {/* Sticky content */}
      <div className="sticky top-0 flex h-screen items-center mt-[6rem]">
        <div className="mx-auto w-full max-w-6xl grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">

          {/* Left text */}
          <div className="flex flex-col justify-center space-y-4 md:space-y-6">
            <span className="text-sm sm:text-base font-medium text-blue-600">
              Feature No. {current.id} -
            </span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900">{current.title}</h3>

            <ul className="mt-2 list-disc space-y-2 pl-5 text-gray-600 text-sm sm:text-base">
              {current.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap items-center gap-4 md:gap-6">
              <button
                onClick={() => scrollToFeature(clamp(featureIndex - 1, 0, features.length - 1))}
                className="group inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 focus:outline-none"
              >
                <span className="text-lg">←</span>
                <span className="text-sm sm:text-base underline-offset-4 group-hover:underline">Prev</span>
              </button>
              <button
                onClick={() => scrollToFeature(clamp(featureIndex + 1, 0, features.length - 1))}
                className="group inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 focus:outline-none"
              >
                <span className="text-sm sm:text-base underline-offset-4 group-hover:underline">Next</span>
                <span className="text-lg">→</span>
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="flex items-center justify-center py-6 md:py-0">
            <img
              src={current.image || "/placeholder.svg"}
              alt={`Feature ${current.id} preview`}
              className="h-64 sm:h-80 md:h-[440px] w-auto max-w-full rounded-2xl shadow-2xl ring-1 ring-black/10"
              loading="eager"
            />
          </div>

          {/* Right navigation */}
          <div className="flex flex-col justify-start md:justify-center mt-6 md:mt-0 space-y-2 md:space-y-3 mb-[4rem]">
            <p className="text-sm sm:text-base font-semibold text-gray-900">Feature Showcase</p>
            <ol className="space-y-2">
              {features.map((f, idx) => {
                const active = idx === featureIndex
                return (
                  <li key={f.id}>
                    <button
                      onClick={() => scrollToFeature(idx)}
                      className={`relative w-full text-left transition-colors pl-4 ${
                        active ? "font-semibold text-gray-900" : "text-gray-600 hover:text-gray-800"
                      }`}
                      aria-current={active ? "true" : "false"}
                      aria-label={`Select ${f.label}`}
                    >
                      {active && (
                        <span
                          aria-hidden="true"
                          className="absolute left-0 top-1/2 -translate-y-1/2 h-5 w-1 rounded bg-blue-600"
                        />
                      )}
                      <span className="block text-sm sm:text-base">{`${f.label} : ${f.title}`}</span>
                    </button>
                  </li>
                )
              })}
            </ol>
          </div>

        </div>
      </div>
    </section>
  )
}
