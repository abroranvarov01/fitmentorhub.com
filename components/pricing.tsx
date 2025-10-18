import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: 49,
    features: ["Personalized fitness plan", "Weekly check-ins", "Progress tracking app", "Email support"],
  },
  {
    name: "Pro",
    price: 89,
    features: [
      "Everything in Starter",
      "Full mentorship program",
      "Meal tracking & nutrition",
      "Bi-weekly video calls",
      "Priority support",
    ],
    popular: true,
  },
  {
    name: "Elite",
    price: 149,
    features: [
      "Everything in Pro",
      "Dedicated personal coach",
      "24/7 chat support",
      "Weekly video sessions",
      "Custom meal plans",
      "In-person training option",
    ],
  },
]

export function Pricing() {
  return (
    <section className="py-24 bg-[#0D0D0D]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-montserrat)] font-extrabold text-center text-[#F5F5F5] mb-16">
          Membership Plans
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`bg-[#1E1E1E] border-2 p-8 relative transition-all duration-300 hover:scale-105 ${
                plan.popular
                  ? "border-[#00E0A4] shadow-[0_0_40px_rgba(0,224,164,0.2)]"
                  : "border-[#2A2A2A] hover:border-[#00E0A4]"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#00E0A4] text-[#0D0D0D] px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-[family-name:var(--font-montserrat)] font-bold text-[#F5F5F5] mb-4">
                  {plan.name}
                </h3>
                
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-[#00E0A4] flex-shrink-0 mt-0.5" />
                    <span className="text-[#F5F5F5]/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.popular
                    ? "bg-[#00E0A4] hover:bg-[#00B47C] text-[#0D0D0D]"
                    : "bg-[#1E1E1E] border-2 border-[#00E0A4] text-[#00E0A4] hover:bg-[#00E0A4] hover:text-[#0D0D0D]"
                } font-bold transition-all duration-300`}
                size="lg"
              >
                Get Started
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
