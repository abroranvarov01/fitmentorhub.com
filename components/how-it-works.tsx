"use client"

import { Calendar, FileText, Users, TrendingUp } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const steps = [
  {
    number: 1,
    icon: Calendar,
    title: "Book a Free Consultation",
    description: "Schedule your initial assessment with our team",
  },
  {
    number: 2,
    icon: FileText,
    title: "Get a Tailored Fitness Plan",
    description: "Receive a customized program designed for your goals",
  },
  {
    number: 3,
    icon: Users,
    title: "Train with Your Mentor",
    description: "Work directly with your dedicated coach",
  },
  {
    number: 4,
    icon: TrendingUp,
    title: "Track Results & Stay Accountable",
    description: "Monitor progress and adjust as you grow",
  },
]

export function HowItWorks() {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            steps.forEach((_, index) => {
              setTimeout(() => {
                setVisibleSteps((prev) => [...prev, index])
              }, index * 200)
            })
          }
        })
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-[#0D0D0D]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-montserrat)] font-extrabold text-center text-[#F5F5F5] mb-16">
          How It Works
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#2A2A2A] hidden md:block" />

            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative flex items-start gap-6 mb-12 last:mb-0 transition-all duration-500 ${
                  visibleSteps.includes(index) ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                }`}
              >
                {/* Step number circle */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-[#00E0A4] flex items-center justify-center">
                    <step.icon className="h-8 w-8 text-[#0D0D0D]" />
                  </div>
                  {/* Progress line animation */}
                  {index < steps.length - 1 && visibleSteps.includes(index) && (
                    <div className="absolute left-1/2 top-16 w-0.5 h-12 bg-[#00E0A4] transform -translate-x-1/2 hidden md:block" />
                  )}
                </div>

                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-[family-name:var(--font-montserrat)] font-bold text-[#F5F5F5] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[#F5F5F5]/70 text-lg">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
