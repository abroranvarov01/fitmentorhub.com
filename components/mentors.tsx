import { Card } from "@/components/ui/card"
import { Award } from "lucide-react"

const mentors = [
  {
    name: "Sarah Chen",
    specialty: "Strength & Conditioning",
    certifications: "CSCS, NASM-CPT",
    quote: "I don't train bodies — I mentor transformations.",
    image: "/female-fitness-coach-professional-portrait.jpg",
  },
  {
    name: "Marcus Johnson",
    specialty: "Body Transformation",
    certifications: "ACE-CPT, Precision Nutrition",
    quote: "Your potential is limitless. Let's unlock it together.",
    image: "/male-fitness-coach-professional-portrait.jpg",
  },
  {
    name: "Elena Rodriguez",
    specialty: "Mind & Mobility",
    certifications: "RYT-500, FMS",
    quote: "True fitness starts from within.",
    image: "/female-yoga-instructor-professional-portrait.jpg",
  },
  {
    name: "David Park",
    specialty: "Athletic Performance",
    certifications: "CSCS, USAW",
    quote: "Champions are built through consistency and dedication.",
    image: "/male-athletic-coach-professional-portrait.jpg",
  },
]

export function Mentors() {
  return (
    <section className="py-24 bg-[#0D0D0D]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-montserrat)] font-extrabold text-center text-[#F5F5F5] mb-16">
          Your Mentors
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mentors.map((mentor, index) => (
            <Card
              key={index}
              className="bg-[#1E1E1E] border-[#2A2A2A] overflow-hidden group hover:border-[#00E0A4] transition-all duration-300 cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img src={mentor.image || "/placeholder.svg"} alt={mentor.name} className="w-full h-80 object-cover" />

                {/* Hover overlay with quote */}
                <div className="absolute inset-0 bg-[#0D0D0D]/95 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-[#00E0A4] text-lg font-[family-name:var(--font-montserrat)] font-semibold text-center italic">
                    "{mentor.quote}"
                  </p>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-[family-name:var(--font-montserrat)] font-bold text-[#F5F5F5] mb-2">
                  {mentor.name}
                </h3>
                <p className="text-[#00E0A4] font-semibold mb-3">{mentor.specialty}</p>
                <div className="flex items-center gap-2 text-[#F5F5F5]/70 text-sm">
                  <Award className="h-4 w-4" />
                  <span>{mentor.certifications}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
