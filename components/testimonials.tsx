import { CardWrapper } from "./ui/card-wrapper"
import Image from "next/image"
import { Quote } from "lucide-react"

interface TestimonialProps {
  content: string
  author: string
  position: string
  image: string
}

function TestimonialCard({ content, author, position, image }: TestimonialProps) {
  return (
    <CardWrapper>
      <Quote className="text-primary mb-4 h-8 w-8" />
      <p className="text-gray-400 mb-6">{content}</p>
      <div className="flex items-center gap-4">
        {/* <Image src={image || "/placeholder.svg"} alt={author} width={48} height={48} className="rounded-full" /> */}
        <div>
          <h4 className="font-semibold">{author}</h4>
          <p className="text-sm text-gray-400">{position}</p>
        </div>
      </div>
      <div style={{display:'flex',justifyContent:"flex-end"}}>

      <Quote className="text-primary mb-4 h-8 w-8" />
      </div>

    </CardWrapper>
  )
}

export function Testimonials() {
  const testimonials = [
    {
      author: "Saud Rana",
      position: "Project Manager Fiverr",
      image: "",
      content:
        "Saraib is a talented front-end developer who delivered high-quality work on our website projects. His attention to detail, creativity, and collaborative approach made him a pleasure to work with. I highly recommend Saraib for front-end development – he's reliable and produces outstanding results.",
    },
    {
  author: "Sana",
  position: "CEO at Shine With Tara",
  image: "",
  content:
    "We needed a fast and reliable eCommerce platform with a seamless user experience. He built our React-based store with flawless functionality and smooth state management, making the entire shopping process effortless for our customers.",
}
,
    {
      author: "Hammad Ahmed",
      position: "Senior .Net Developer At Mangotech Solutions",
      image: "",
      content:
        'Saraib Aqeel has worked on various projects involving complex API integrations in React applications. He ensured smooth communication between frontend and backend services, optimized performance through efficient data handling, and maintained clean, scalable code architecture. His consistent focus on reliability and user experience helped deliver high-quality solutions across multiple eCommerce and dashboard based projects.',
    },
    // {
    //   author: "Jason Patel",
    //   position: "Project Manager at WebWorks Agency",
    //   image: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=400&h=400&auto=format&fit=crop&q=60",
    //   content:
    //     "He built our React app with authentication, API integrations, and role-based access. The delivery was on time, and the app worked without major bugs from day one.",
    // },
  ];
  
  

  return (
    <section className="py-16" id="testimonials">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Testimonials</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Don't just take my word for it. Here's what my clients have to say about their experiences working with me.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </section>
  )
}
