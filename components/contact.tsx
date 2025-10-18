import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone } from "lucide-react"

export function Contact() {
  return (
    <section className="py-24 bg-[#0D0D0D]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-montserrat)] font-extrabold text-center text-[#F5F5F5] mb-16">
          Get in Touch
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-[#1E1E1E] border-[#2A2A2A] p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-[#F5F5F5] font-semibold mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Your name"
                  className="bg-[#0D0D0D] border-[#2A2A2A] text-[#F5F5F5] focus:border-[#00E0A4]"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[#F5F5F5] font-semibold mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="bg-[#0D0D0D] border-[#2A2A2A] text-[#F5F5F5] focus:border-[#00E0A4]"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[#F5F5F5] font-semibold mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your fitness goals..."
                  rows={5}
                  className="bg-[#0D0D0D] border-[#2A2A2A] text-[#F5F5F5] focus:border-[#00E0A4]"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#00E0A4] hover:bg-[#00B47C] text-[#0D0D0D] font-bold"
                size="lg"
              >
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="bg-[#1E1E1E] border-[#2A2A2A] p-8">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-[#00E0A4] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-[family-name:var(--font-montserrat)] font-bold text-[#F5F5F5] mb-2">
                    Visit Us
                  </h3>
                  <p className="text-[#F5F5F5]/70">
                    3555 Sherman Street
                    <br />
                    Dallas, Kansas 75201
                    <br />
                    United States
                  </p>
                </div>
              </div>
            </Card>

            <Card className="bg-[#1E1E1E] border-[#2A2A2A] p-8">
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-[#00E0A4] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-[family-name:var(--font-montserrat)] font-bold text-[#F5F5F5] mb-2">
                    Call Us
                  </h3>
                  <p className="text-[#F5F5F5]/70">
                    <a href="tel:+17858868159" className="hover:text-[#00E0A4] transition-colors">
                      +1 (785) 886-8159
                    </a>
                  </p>
                </div>
              </div>
            </Card>

            <Card className="bg-[#1E1E1E] border-[#2A2A2A] p-8">
              <h3 className="text-xl font-[family-name:var(--font-montserrat)] font-bold text-[#F5F5F5] mb-4">
                In-Person Training
              </h3>
              <p className="text-[#F5F5F5]/70 mb-4">Available at our Dallas location for Elite members</p>
              <div className="w-full h-48 bg-[#0D0D0D] rounded-lg overflow-hidden">
                <img
                  src="/dallas-location-map.jpg"
                  alt="FitMentorHub Dallas Location - 3555 Sherman Street"
                  className="w-full h-full object-cover"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
