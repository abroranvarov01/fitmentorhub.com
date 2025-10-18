import { Hero } from "@/components/hero"
import { WhyFitMentorHub } from "@/components/why-fitmentorhub"
import { Programs } from "@/components/programs"
import { HowItWorks } from "@/components/how-it-works"
import { Mentors } from "@/components/mentors"
import { Transformations } from "@/components/transformations"
import { Features } from "@/components/features"
import { Pricing } from "@/components/pricing"
import { Testimonials } from "@/components/testimonials"
import { Blog } from "@/components/blog"
import { CTA } from "@/components/cta"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0D0D0D]">
      <Hero />
      <WhyFitMentorHub />
      <Programs />
      <HowItWorks />
      <Mentors />
      <Transformations />
      <Features />
      <Pricing />
      <Testimonials />
      <Blog />
      <CTA />
      <Contact />
      <Footer />
      <CookieBanner />
    </main>
  )
}
