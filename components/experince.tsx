export function Experience() {
    const experiences = [
      {
        role: "Frontend Developer",
        company: "Sid Techno",
        duration: "2023-Feb - 2023-Oct",
        description:
          "Building responsive web apps with React, Next.js, and Material-UI. Focused on performance optimization and API integrations.",
      },
   {
  role: "React JS Developer",
  company: "Mangotech Solutions",
  duration: "Nov 2023 – Present",
  description:
    "Spearheading the development of scalable single-page applications using React. Implemented robust state management solutions (Context API, Redux) and mentored junior developers in best coding practices. Successfully managed multiple multi-vendor dashboard systems and led the frontend development for an AI-powered image generation platform.",
}

     
    ]
  
    return (
      <section className="py-16" id="experience">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Experience</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A quick overview of my professional journey, showcasing roles and responsibilities I've handled.
          </p>
        </div>
  
        <div className="relative border-l-2 border-gray-700 max-w-7xl mx-auto">
  {experiences.map((exp, idx) => (
    <div key={idx} className="mb-10 ml-6 relative">
      {/* Dot */}
      <span className="absolute left-[-37px] top-1/2 -translate-y-1/2 flex items-center justify-center w-6 h-6 bg-primary rounded-full ring-8 ring-background"></span>
      
      {/* Content Box */}
      <div className="bg-card border border-primary p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold">{exp.role}</h3>
        <p className="text-gray-400 text-sm mb-2">
          {exp.company} • {exp.duration}
        </p>
        <p className="text-gray-300">{exp.description}</p>
      </div>
    </div>
  ))}
</div>

      </section>
    )
  }
  