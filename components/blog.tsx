import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

const posts = [
  {
    title: "Top 5 Morning Routines for Energy",
    excerpt: "Start your day right with these science-backed habits",
    image: "/blog-morning-routine.jpg",
    category: "Lifestyle",
  },
  {
    title: "The Truth About Calorie Tracking",
    excerpt: "Understanding nutrition beyond the numbers",
    image: "/blog-nutrition-tracking.jpg",
    category: "Nutrition",
  },
  {
    title: "How Accountability Boosts Motivation",
    excerpt: "Why having a mentor changes everything",
    image: "/blog-mentorship-motivation.jpg",
    category: "Mindset",
  },
  {
    title: "Building Sustainable Fitness Habits",
    excerpt: "Long-term success strategies that actually work",
    image: "/blog-fitness-habits.jpg",
    category: "Training",
  },
]

export function Blog() {
  return (
    <section className="py-24 bg-[#0D0D0D]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-montserrat)] font-extrabold text-center text-[#F5F5F5] mb-16">
          Insights & Resources
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {posts.map((post, index) => (
            <Card
              key={index}
              className="bg-[#1E1E1E] border-[#2A2A2A] overflow-hidden group hover:border-[#00E0A4] transition-all duration-300 cursor-pointer"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-[#00E0A4] text-[#0D0D0D] px-3 py-1 rounded text-sm font-bold">
                  {post.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-[family-name:var(--font-montserrat)] font-bold text-[#F5F5F5] mb-2 group-hover:text-[#00E0A4] transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-[#F5F5F5]/70 mb-4">{post.excerpt}</p>
                <div className="flex items-center gap-2 text-[#00E0A4] font-semibold group-hover:gap-4 transition-all duration-300">
                  <span>Read More</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
