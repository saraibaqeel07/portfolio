import { Button } from "@/components/ui/button"
import { Stats } from "@/components/stats"
import { Services } from "@/components/services"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Testimonials } from "@/components/testimonials"
import { Experience } from "@/components/experince"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import User from '../components/Images/user.jpeg'
import { Phone, Mail, MapPin } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-4">
              I am Saraib Aqeel
              <span className="block text-primary mt-2">   Front End Developer.</span>
            </h1>
            <p className="text-gray-400 mb-8">
              I help their company and experience problems by building accessible and inclusive web products and digital
              experiences.
            </p>
            <div className="flex gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 hover:ring-2 hover:ring-primary hover:ring-offset-2 hover:ring-offset-black transition-all duration-300"
              >
                Contact Me
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                Download CV
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative aspect-square max-w-[400px] mx-auto">
              <Image
                src={User}
                alt="Profile"
                fill
                className="rounded-2xl object-cover"
                priority
              />
            </div>
          </div>
        </div>

        <Stats />
      </section>

      {/* Other Sections */}
      <div className="container mx-auto px-4">
        <Services />
        <Projects />
        <Experience />
        <Skills />
        <Testimonials />

        {/* Contact Section */}
        <section className="py-16" id="contact">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Let's Get In Touch</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Have a project in mind or want to discuss potential opportunities? I'm just a message away.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <Phone className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p className="text-gray-400">+92 3052674578</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <Mail className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-gray-400">saraibaqeel9@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <MapPin className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold">Address</h3>
                      <p className="text-gray-400">Karachi , Pakistan</p>
                    </div>
                  </div>
                </div>
              </div>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="bg-card border border-primary/20 rounded-lg p-3 w-full focus:outline-none focus:border-primary"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="bg-card border border-primary/20 rounded-lg p-3 w-full focus:outline-none focus:border-primary"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-card border border-primary/20 rounded-lg p-3 w-full focus:outline-none focus:border-primary"
                />
                <textarea
                  placeholder="Message"
                  rows={6}
                  className="bg-card border border-primary/20 rounded-lg p-3 w-full focus:outline-none focus:border-primary"
                />
                <Button size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-card mt-20">
        <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
  <div>
    <h3 className="text-xl font-bold mb-4">Saraib Aqeel</h3>
    <p className="text-gray-400">
      Front End Developer based in your location. Available for work.
    </p>
  </div>
  <div>
  <h4 className="font-semibold mb-4">Quick Links</h4>
  <ul className="space-y-2 text-gray-400">
    <li>
      <a href="#" className="hover:text-white transition">
        Home
      </a>
    </li>
    <li>
      <a href="#services" className="hover:text-white transition">
        Services
      </a>
    </li>
    <li>
      <a href="#skills" className="hover:text-white transition">
        Skills
      </a>
    </li>
    <li>
      <a href="#contact" className="hover:text-white transition">
        Contact
      </a>
    </li>
  </ul>
</div>
  <div>
    <h4 className="font-semibold mb-4">Services</h4>
    <ul className="space-y-2 text-gray-400">
      <li>Single Page Applications (SPA)</li>
      <li>Component Development</li>
      <li>Performance Optimization</li>
      <li>Responsive Web Apps</li>
      <li>API Integration</li>
      <li>Secure & Scalable Apps</li>
    </ul>
  </div>

  <div>
    <h4 className="font-semibold mb-4">Contact Us</h4>
    <ul className="space-y-2 text-gray-400">
      <li>saraibaqeel9@gmail.com</li>
      <li>+92 3052674578</li>
      <li>Karachi, Pakistan</li>
    </ul>
  </div>

  

</div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© {new Date().getUTCFullYear()}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
