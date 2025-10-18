"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const transformations = [
  {
    name: "Jessica M.",
    age: 32,
    result: "Lost 45 lbs in 6 months",
    before: "/before-weight-loss.png",
    after: "/after-weight-loss-transformation-fit.jpg",
  },
  {
    name: "Ryan T.",
    age: 28,
    result: "Gained 20 lbs muscle",
    before: "/before-muscle-gain-transformation-skinny.jpg",
    after: "/after-muscle-gain-transformation-muscular.jpg",
  },
  {
    name: "Maria S.",
    age: 41,
    result: "Complete lifestyle change",
    before: "/before-fitness-transformation.jpg",
    after: "/after-fitness-transformation-athletic.jpg",
  },
]

export function Transformations() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [sliderPosition, setSliderPosition] = useState(50)

  const nextTransformation = () => {
    setCurrentIndex((prev) => (prev + 1) % transformations.length)
    setSliderPosition(50)
  }

  const prevTransformation = () => {
    setCurrentIndex((prev) => (prev - 1 + transformations.length) % transformations.length)
    setSliderPosition(50)
  }

  const current = transformations[currentIndex]

  return (
    <section className="py-24 bg-[#0D0D0D]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-montserrat)] font-extrabold text-center text-[#F5F5F5] mb-4">
          Client Transformations
        </h2>
        <p className="text-xl text-[#F5F5F5]/70 text-center mb-16">Real People. Real Progress. Real Mentorship.</p>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-[#1E1E1E] border-[#2A2A2A] p-8">
            <div className="relative h-[500px] overflow-hidden rounded-lg mb-6">
              {/* Before image */}
              <img
                src={current.before || "/placeholder.svg"}
                alt="Before transformation"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* After image with clip-path */}
              <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}>
                <img
                  src={current.after || "/placeholder.svg"}
                  alt="After transformation"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Slider control */}
              <div className="absolute inset-0 flex items-center">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPosition}
                  onChange={(e) => setSliderPosition(Number(e.target.value))}
                  className="w-full cursor-ew-resize opacity-0"
                />
                <div
                  className="absolute top-0 bottom-0 w-1 bg-[#00E0A4] pointer-events-none"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-[#00E0A4] rounded-full flex items-center justify-center">
                    <ChevronLeft className="h-4 w-4 text-[#0D0D0D] absolute left-0" />
                    <ChevronRight className="h-4 w-4 text-[#0D0D0D] absolute right-0" />
                  </div>
                </div>
              </div>

              {/* Labels */}
              <div className="absolute top-4 left-4 bg-[#0D0D0D]/80 px-3 py-1 rounded text-[#F5F5F5] font-semibold">
                Before
              </div>
              <div className="absolute top-4 right-4 bg-[#00E0A4]/90 px-3 py-1 rounded text-[#0D0D0D] font-semibold">
                After
              </div>
            </div>

            <div className="text-center mb-6">
              <h3 className="text-2xl font-[family-name:var(--font-montserrat)] font-bold text-[#F5F5F5] mb-2">
                {current.name}, {current.age}
              </h3>
              <p className="text-[#00E0A4] text-lg font-semibold">{current.result}</p>
            </div>

            <div className="flex justify-center gap-4">
              <Button
                onClick={prevTransformation}
                variant="outline"
                size="icon"
                className="border-[#00E0A4] text-[#00E0A4] hover:bg-[#00E0A4] hover:text-[#0D0D0D] bg-transparent"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                onClick={nextTransformation}
                variant="outline"
                size="icon"
                className="border-[#00E0A4] text-[#00E0A4] hover:bg-[#00E0A4] hover:text-[#0D0D0D] bg-transparent"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
