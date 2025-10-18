const features = [
  {
    title: "Workout Dashboard",
    description: "Track all your exercises and progress",
    image: "/fitness-app-workout-dashboard-interface.jpg",
  },
  {
    title: "Progress Tracking",
    description: "Visualize your journey with detailed analytics",
    image: "/fitness-app-progress-tracking-charts.jpg",
  },
  {
    title: "Nutrition Guidance",
    description: "Meal plans and macro tracking",
    image: "/fitness-app-nutrition-meal-planning.jpg",
  },
  {
    title: "Chat with Coach",
    description: "24/7 support from your mentor",
    image: "/fitness-app-chat-coach-interface.jpg",
  },
]

export function Features() {
  return (
    <section className="py-24 bg-[#0D0D0D]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-montserrat)] font-extrabold text-center text-[#F5F5F5] mb-16">
          Features & Tools
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              {/* Phone mockup */}
              <div className="relative mx-auto w-64 h-[500px] mb-6">
                <div className="absolute inset-0 bg-[#1E1E1E] rounded-[3rem] border-4 border-[#2A2A2A] group-hover:border-[#00E0A4] transition-all duration-300 overflow-hidden">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-[#0D0D0D] rounded-b-2xl z-10" />

                  {/* Screen content */}
                  <div className="absolute inset-4 top-8 rounded-[2rem] overflow-hidden">
                    <img
                      src={feature.image || "/placeholder.svg"}
                      alt={feature.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Green glow overlay */}
                    <div className="absolute inset-0 bg-[#00E0A4]/0 group-hover:bg-[#00E0A4]/10 transition-all duration-300" />
                  </div>
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_40px_rgba(0,224,164,0.3)]" />
              </div>

              <h3 className="text-xl font-[family-name:var(--font-montserrat)] font-bold text-[#F5F5F5] mb-2">
                {feature.title}
              </h3>
              <p className="text-[#F5F5F5]/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
