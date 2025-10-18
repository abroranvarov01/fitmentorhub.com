"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    quote: "FitMentorHub changed the way I see fitness — it's not a grind anymore, it's growth.",
    author: "Sarah M.",
    age: 34,
    program: "Body Transformation",
  },
  {
    quote: "My coach didn't just give me workouts, they gave me confidence and accountability.",
    author: "Michael R.",
    age: 29,
    program: "Strength & Performance",
  },
  {
    quote: "I finally found a program that fits my lifestyle. The flexibility is incredible.",
    author: "Jennifer L.",
    age: 42,
    program: "Weight Management",
  },
  {
    quote: "The personalized approach made all the difference. I'm stronger than I've ever been.",
    author: "David K.",
    age: 36,
    program: "Athletic Performance",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000)
    return () => clearInterval(interval)
  }, [])

  const current = testimonials[currentIndex]

  return (
    <section className="py-24 bg-[#0D0D0D]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-montserrat)] font-extrabold text-center text-[#F5F5F5] mb-16">
          What Our Clients Say
        </h2>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-[#1E1E1E] border-[#2A2A2A] p-12 relative">
            {/* Heartbeat line divider */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-0.5 bg-[#00E0A4]" />

            <div className="text-center mb-8">
              <p className="text-2xl md:text-3xl text-[#F5F5F5] font-[family-name:var(--font-montserrat)] font-semibold mb-8 italic text-balance">
                "{current.quote}"
              </p>

              <div className="space-y-1">
                <p className="text-[#00E0A4] font-bold text-lg">
                  — {current.author}, {current.age}
                </p>
                <p className="text-[#F5F5F5]/70">{current.program}</p>
              </div>
            </div>

            <div className="flex justify-center gap-4">
              <Button
                onClick={prevTestimonial}
                variant="outline"
                size="icon"
                className="border-[#00E0A4] text-[#00E0A4] hover:bg-[#00E0A4] hover:text-[#0D0D0D] bg-transparent"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>

              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex ? "bg-[#00E0A4] w-8" : "bg-[#2A2A2A]"
                    }`}
                  />
                ))}
              </div>

              <Button
                onClick={nextTestimonial}
                variant="outline"
                size="icon"
                className="border-[#00E0A4] text-[#00E0A4] hover:bg-[#00E0A4] hover:text-[#0D0D0D] bg-transparent"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>

            {/* Heartbeat line divider */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-32 h-0.5 bg-[#00E0A4]" />
          </Card>
        </div>
      </div>
    </section>
  )
}
