import { Card, CardContent } from "../components/ui/card";
import { 
  Server, 
  Bot, 
  Users, 
  Globe, 
  ShoppingCart 
} from "lucide-react";

const SkillsPage = () => {
  const skills = [
    {
      title: "Minecraft Servers",
      description: "Custom server development with optimized performance and unique gameplay mechanics",
      icon: <Server className="h-8 w-8 text-indigo-400" />,
      tags: ["Java", "Spigot", "PaperMC", "Plugins"]
    },
    {
      title: "Discord Bots",
      description: "Advanced bot creation with custom commands, moderation, and integrations",
      icon: <Bot className="h-8 w-8 text-green-400" />,
      tags: ["JavaScript", "Discord.js", "Python", "APIs"]
    },
    {
      title: "Community Management",
      description: "Building and managing thriving online communities with engagement strategies",
      icon: <Users className="h-8 w-8 text-blue-400" />,
      tags: ["Moderation", "Events", "Analytics", "Support"]
    },
    {
      title: "Web Development",
      description: "Full-stack web applications with modern frameworks and responsive design",
      icon: <Globe className="h-8 w-8 text-purple-400" />,
      tags: ["React", "Node.js", "TypeScript", "Tailwind"]
    },
    {
      title: "Bot Development",
      description: "Multi-platform bot solutions with AI integration and automation",
      icon: <MessageSquare className="h-8 w-8 text-yellow-400" />,
      tags: ["Python", "AI", "Automation", "APIs"]
    },
    {
      title: "E-commerce Solutions",
      description: "Custom shop systems integrated with Minecraft servers and payment gateways",
      icon: <ShoppingCart className="h-8 w-8 text-red-400" />,
      tags: ["Stripe", "PayPal", "Database", "Security"]
    }
  ];

  return (
    <section className="py-20" id="skills">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-green-400">
            My Expertise
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Specialized in creating custom solutions that enhance digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <Card 
              key={index} 
              className="bg-gray-800/50 border border-gray-700 hover:border-indigo-500/50 transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="mr-4 p-3 bg-gray-700 rounded-lg">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-bold">{skill.title}</h3>
                </div>
                <p className="text-gray-400 mb-4">{skill.description}</p>
                <div className="flex flex-wrap gap-2">
                  {skill.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="px-3 py-1 bg-gray-700 text-xs rounded-full text-gray-300"
                    >
                      {tag}
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

export default SkillsPage;
