import { Card } from "@/components/ui/card"

const programs = [
  {
    title: "Body Transformation",
    description: "Complete body recomposition with expert guidance",
    image: "/athletic-body-transformation-fitness.jpg",
  },
  {
    title: "Strength & Performance",
    description: "Build power and maximize athletic performance",
    image: "/strength-training-performance-athlete.jpg",
  },
  {
    title: "Weight Management",
    description: "Sustainable weight loss and healthy lifestyle",
    image: "/weight-management-healthy-lifestyle.jpg",
  },
  {
    title: "Mind & Mobility",
    description: "Flexibility, recovery, and mental wellness",
    image: "/yoga-mobility-flexibility-wellness.jpg",
  },
]

export function Programs() {
  return (
    <section className="py-24 bg-[#0D0D0D]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-montserrat)] font-extrabold text-center text-[#F5F5F5] mb-16">
          Our Programs
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <Card
              key={index}
              className="bg-[#1E1E1E] border-2 border-[#2A2A2A] overflow-hidden group hover:border-[#00E0A4] transition-all duration-300 cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={program.image || "/placeholder.svg"}
                  alt={program.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/50 to-transparent" />

                {/* Progress bar animation on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#00E0A4] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-[family-name:var(--font-montserrat)] font-bold text-[#F5F5F5] mb-2">
                  {program.title}
                </h3>
                <p className="text-[#F5F5F5]/70">{program.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
