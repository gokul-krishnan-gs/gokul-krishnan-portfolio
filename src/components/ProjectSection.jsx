import { ExternalLink, Github } from "lucide-react";

export default function ProjectSection() {
  const projects = [
    {
      id: 1,
      title: "Personal Portfolio",
      description:
        "A simple and beautifull portfolio that showcase my skills and projects,Built using React JS & Tailwind CSS",
      tags: ["ReactJS", "Tailwind CSS", "Vercel"],
      demoUrl: "https://gokul-krishnan-gs.vercel.app",
      gitHubUrl:
        "https://github.com/gokul-krishnan-gs/gokul-krishnan-portfolio",
      image: "./public/projects/project-1.png",
    },
    {
      id: 2,
      title: "Personal Portfolio",
      description:
        "A simple and beautifull portfolio that showcase my skills and projects,Built using React JS & Tailwind CSS",
      tags: ["ReactJS", "Tailwind CSS", "Vercel"],
      demoUrl: "https://gokul-krishnan-gs.vercel.app",
      gitHubUrl:
        "https://github.com/gokul-krishnan-gs/gokul-krishnan-portfolio",
      image: "./public/projects/project-1.png",
    },
    {
      id: 3,
      title: "Personal Portfolio",
      description:
        "A simple and beautifull portfolio that showcase my skills and projects,Built using React JS & Tailwind CSS",
      tags: ["ReactJS", "Tailwind CSS", "Vercel"],
      demoUrl: "https://gokul-krishnan-gs.vercel.app",
      gitHubUrl:
        "https://github.com/gokul-krishnan-gs/gokul-krishnan-portfolio",
      image: "./public/projects/project-1.png",
    },
  ];
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent Projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium rounded-full bg-primary/20 text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.gitHubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/gokul-krishnan-gs"
            target="_blank"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Check my Github <Github size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
