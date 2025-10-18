import { Brain, Smartphone, Dumbbell, Zap } from "lucide-react"
import { Card } from "@/components/ui/card"

const features = [
  {
    icon: Brain,
    title: "Personal Coaching",
    description: "1-on-1 mentorship for lasting results",
  },
  {
    icon: Smartphone,
    title: "Smart Progress Tracking",
    description: "All workouts in your app",
  },
  {
    icon: Dumbbell,
    title: "Customized Plans",
    description: "Built for your goals and body type",
  },
  {
    icon: Zap,
    title: "Anywhere, Anytime",
    description: "Train online or in person",
  },
]

export function WhyFitMentorHub() {
  return (
    <section className="py-24 bg-[#0D0D0D]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-montserrat)] font-extrabold text-center text-[#F5F5F5] mb-16">
          Why FitMentorHub
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-[#1E1E1E] border-[#2A2A2A] p-8 text-center hover:border-[#00E0A4] transition-all duration-300 group"
            >
              <div className="mb-6 flex justify-center">
                <div className="p-4 rounded-full bg-[#00E0A4]/10 group-hover:bg-[#00E0A4]/20 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(0,224,164,0.4)]">
                  <feature.icon className="h-8 w-8 text-[#00E0A4]" />
                </div>
              </div>
              <h3 className="text-xl font-[family-name:var(--font-montserrat)] font-bold text-[#F5F5F5] mb-3">
                {feature.title}
              </h3>
              <p className="text-[#F5F5F5]/70">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
