import { Button } from "@/components/ui/button"
import { Dumbbell, Users } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/person-training-with-coach-in-urban-gym-dramatic-l.jpg"
          alt="Person training with coach"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D]/60 via-[#0D0D0D]/80 to-[#0D0D0D]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Logo */}
        <div className="mb-8 flex items-center justify-center gap-2">
          <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-montserrat)] font-extrabold">
            <span className="text-[#00E0A4]">Fit</span>
            <span className="text-[#F5F5F5]">MentorHub</span>
          </h1>
        </div>

        <h2 className="text-5xl md:text-7xl font-[family-name:var(--font-montserrat)] font-extrabold text-[#F5F5F5] mb-6 text-balance">
          Your Fitness. Your Mentor. Your Progress.
        </h2>

        <p className="text-xl md:text-2xl text-[#F5F5F5]/80 mb-12 max-w-3xl mx-auto text-balance">
          Personalized training and coaching programs — anytime, anywhere.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-[#00E0A4] hover:bg-[#00B47C] text-[#0D0D0D] font-bold text-lg px-8 py-6 animate-pulse-glow transition-all duration-300"
          >
            <Dumbbell className="mr-2 h-5 w-5" />
            Start Your Plan
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-[#00E0A4] text-[#00E0A4] hover:bg-[#00E0A4] hover:text-[#0D0D0D] font-bold text-lg px-8 py-6 transition-all duration-300 bg-transparent"
          >
            <Users className="mr-2 h-5 w-5" />
            Meet the Coaches
          </Button>
        </div>
      </div>
    </section>
  )
}
