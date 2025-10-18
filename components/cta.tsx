import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

export function CTA() {
  return (
    <section className="py-24 bg-[#0D0D0D] relative overflow-hidden">
      {/* Subtle gym texture background */}
      <div className="absolute inset-0 opacity-5">
        <img src="/placeholder.svg?height=800&width=1920" alt="" className="w-full h-full object-cover" />
      </div>

      {/* Centered glow effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-96 h-96 bg-[#00E0A4] rounded-full blur-[150px] opacity-20" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-[family-name:var(--font-montserrat)] font-extrabold text-[#F5F5F5] mb-6 text-balance">
            Your new chapter starts today.
          </h2>

          <p className="text-xl text-[#F5F5F5]/80 mb-12 text-balance">
            Join thousands who've transformed their lives with personalized mentorship
          </p>

          <Button
            size="lg"
            className="bg-[#00E0A4] hover:bg-[#00B47C] text-[#0D0D0D] font-bold text-xl px-12 py-8 animate-pulse-glow transition-all duration-300"
          >
            <Sparkles className="mr-2 h-6 w-6" />
            Join FitMentorHub Now
          </Button>
        </div>
      </div>
    </section>
  )
}
