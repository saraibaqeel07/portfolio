import type React from "react"
import { Code, Palette, Globe, Layers, Zap, Database, ShieldCheck, Smartphone } from "lucide-react"
import { CardWrapper } from "./ui/card-wrapper"

interface ServiceProps {
  title: string
  description: string
  icon: React.ReactNode
}

function ServiceCard({ title, description, icon }: ServiceProps) {
  return (
    <CardWrapper className="hover:border-primary/40 transition-colors">
      <div className="text-primary mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </CardWrapper>
  )
}

export function Services() {
  return (
    <section className="py-16" id="services">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">What I Do</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          I offer a wide range of services to help businesses and individuals create impactful digital experiences.
          Here's how I can help you succeed.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <ServiceCard
  icon={<Code size={24} />}
  title="Single Page Applications (SPA)"
  description="Building fast, dynamic, and responsive single-page apps with React.js."
/>

<ServiceCard
  icon={<Layers size={24} />}
  title="Component Development"
  description="Creating reusable, scalable, and maintainable React components for efficient apps."
/>

<ServiceCard
  icon={<Zap size={24} />}
  title="Performance Optimization"
  description="Optimizing apps for speed, SEO, and smooth user experiences."
/>

<ServiceCard
  icon={<Smartphone size={24} />}
  title="Responsive Web Apps"
  description="Ensuring seamless performance across desktops, tablets, and mobile devices."
/>

<ServiceCard
  icon={<Database size={24} />}
  title="API Integration"
  description="Connecting apps with REST APIs, GraphQL, and real-time data using WebSockets."
/>

<ServiceCard
  icon={<ShieldCheck size={24} />}
  title="Secure & Scalable Apps"
  description="Developing apps with best practices for security, scalability, and maintainability."
/>

      </div>
    </section>
  )
}
