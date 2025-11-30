import { Card, CardContent } from "../components/ui/card";

const ProjectsPage = () => {
  const projects = [
    {
      title: "Survival SMP Server",
      description: "Custom survival server with unique plugins and balanced economy",
      category: "servers",
      technologies: ["Java", "Spigot", "MySQL"],
      image: "server"
    },
    {
      title: "Community Discord Bot",
      description: "Multi-functional Discord bot for server management and engagement",
      category: "discord",
      technologies: ["JavaScript", "Discord.js", "Node.js"],
      image: "bot"
    },
    {
      title: "Marketplace Website",
      description: "E-commerce platform for Minecraft items and services",
      category: "web",
      technologies: ["React", "Next.js", "Tailwind CSS"],
      image: "web"
    },
    {
      title: "Auto-Farm Bot",
      description: "AI-powered farming assistant bot for Minecraft automation",
      category: "bots",
      technologies: ["Python", "TensorFlow", "Minecraft API"],
      image: "automation"
    },
    {
      title: "Minigame Tournament System",
      description: "Tournament management system for Minecraft minigames",
      category: "servers",
      technologies: ["Java", "BungeeCord", "Redis"],
      image: "tournament"
    },
    {
      title: "Server Analytics Dashboard",
      description: "Real-time analytics and monitoring for Minecraft servers",
      category: "web",
      technologies: ["React", "Express", "MongoDB"],
      image: "analytics"
    }
  ];

  return (
    <section className="py-20" id="projects">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-green-400">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Showcasing my latest development work and community solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-gray-800/50 border border-gray-700 overflow-hidden hover:border-indigo-500/50 transition-all duration-300"
            >
              <div className="h-48 bg-gradient-to-r from-indigo-700/30 to-green-700/30 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-indigo-900/50 text-indigo-300 text-xs rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-2 py-1 bg-gray-700 text-xs rounded text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
