import Image from "next/image"
import { CardWrapper } from "./ui/card-wrapper"
import { Button } from "./ui/button"
import { ExternalLink, Github } from "lucide-react"
import galaxy from '../components/Images/galaxy.png'
import mabde from '../components/Images/mabde.jpeg'
import printmeup from '../components/Images/printmeup.jpeg'
import pro from '../components/Images/pro.png'
import wetrade from '../components/Images/wetrade.png'
import naesm from '../components/Images/naesm.png'
import shine from '../components/Images/shine.png'
interface ProjectProps {
  title: string
  description: string
  image: string
  demoLink: string
  githubLink: string
}

function ProjectCard({ title, description, image, demoLink, githubLink }: ProjectProps) {
  return (
    <CardWrapper className="overflow-hidden group">
      <div className="relative h-48 mb-4">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors mb-2">{title}</h3>
      <p className="text-gray-400 text-sm mb-4">{description}</p>
      <div className="flex gap-4">
        <Button
          variant="outline"
          size="sm"
          asChild
          className="text-primary border-primary hover:bg-primary hover:text-white active:bg-primary/90"
        >
          <a href={demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <ExternalLink size={16} /> Demo
          </a>
        </Button>
        <Button
          variant="outline"
          size="sm"
          asChild
          className="text-primary border-primary hover:bg-primary hover:text-white active:bg-primary/90"
        >
          {/* <a href={githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <Github size={16} /> Code
          </a> */}
        </Button>
      </div>
    </CardWrapper>
  )
}

export function Projects() {
  const projects = [
    {
      title: "Galaxy World Wide Shipping",
      description: "A modern dashboard for NFT trading with real-time updates and analytics.",
      image: galaxy,
      demoLink: "https://galaxyshipping.com/",
  
    },
    {
      title: "Mabde ERP",
      description: "Full-featured e-commerce solution with cart, checkout, and payment integration.",
      image: mabde,
      demoLink: "https://mabdeerp.com/",
  
    },
    {
      title: "Alpha PRO ERP",
      description: "Real-time social media platform with messaging and post sharing features.",
      image:pro,
      demoLink: "https://premium-bs.alphaproerp.com/",

    },
    {
      title: "Print Me Up",
      description: "Collaborative task management app with drag-and-drop interface.",
      image: printmeup,
      demoLink: "https://printmeup.ai/",
      
    },
    {
      title: "We Trade Carz",
      description: "Weather forecasting app with interactive maps and real-time updates.",
      image: wetrade,
      demoLink: "https://wetradecarz-portal.surge.sh/",
   
    },
    {
      title: "Naesm",
      description: "Personal fitness tracker with workout plans and progress monitoring.",
      image: naesm,
      demoLink: "https://admin.naesminc.org/",
  
    },
     {
      title: "Shines With Tara",
      description: "Personal fitness tracker with workout plans and progress monitoring.",
      image: shine,
      demoLink: "https://www.shineswithtara.com/",
  
    },
  ]

  return (
    <section className="py-16" id="works">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Explore my latest web development projects. Each project demonstrates my commitment to creating innovative and
          user-friendly digital solutions.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  )
}
