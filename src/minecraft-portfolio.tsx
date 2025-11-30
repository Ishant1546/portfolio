"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import { Label } from "./components/ui/label";
import { 
  Menu, 
  X, 
  Users, 
  Shield, 
  Play, 
  Home, 
  Mail, 
  Heart,
  Upload,
  Check,
  ArrowRight
} from "lucide-react";

// Define types
interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  technologies: string[];
}

interface Skill {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
  stats?: string;
}

const MinecraftPortfolio = () => {
  // State management
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  // Refs for sections
  const homeRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  
  // Skills data
  const skills: Skill[] = [
    {
      id: 1,
      title: "Minecraft Servers",
      description: "Custom server development with optimized performance and unique gameplay mechanics",
      icon: <Shield className="h-8 w-8 text-blue-500" />
    },
    {
      id: 2,
      title: "Minecraft Bots",
      description: "AI-powered bots for automation, assistance, and enhanced gameplay experiences",
      icon: <Users className="h-8 w-8 text-green-500" />
    },
    {
      id: 3,
      title: "Discord Development",
      description: "Custom Discord bots and integrations for Minecraft communities",
      icon: <Play className="h-8 w-8 text-indigo-500" />
    },
    {
      id: 4,
      title: "Web Development",
      description: "Full-stack web applications with modern frameworks and responsive design",
      icon: <Home className="h-8 w-8 text-purple-500" />
    },
    {
      id: 5,
      title: "Bot Development",
      description: "Advanced bot creation for various platforms with custom functionality",
      icon: <Play className="h-8 w-8 text-yellow-500" />
    },
    {
      id: 6,
      title: "Minecraft Shops",
      description: "E-commerce solutions integrated with Minecraft servers and communities",
      icon: <Upload className="h-8 w-8 text-red-500" />
    }
  ];
  
  // Projects data
  const projects: Project[] = [
    {
      id: 1,
      title: "Survival SMP Server",
      description: "Custom survival server with unique plugins and balanced economy",
      category: "servers",
      technologies: ["Java", "Spigot", "MySQL"]
    },
    {
      id: 2,
      title: "Auto-Farm Bot",
      description: "AI-powered farming assistant bot for Minecraft automation",
      category: "bots",
      technologies: ["Python", "TensorFlow", "Minecraft API"]
    },
    {
      id: 3,
      title: "Community Discord Bot",
      description: "Multi-functional Discord bot for Minecraft server management",
      category: "discord",
      technologies: ["JavaScript", "Discord.js", "Node.js"]
    },
    {
      id: 4,
      title: "Marketplace Website",
      description: "E-commerce platform for Minecraft items and services",
      category: "web",
      technologies: ["React", "Next.js", "Tailwind CSS"]
    },
    {
      id: 5,
      title: "Minigame Tournament Bot",
      description: "Tournament management bot for Minecraft minigames",
      category: "bots",
      technologies: ["Python", "Discord API", "SQLite"]
    },
    {
      id: 6,
      title: "Server Analytics Dashboard",
      description: "Real-time analytics and monitoring for Minecraft servers",
      category: "web",
      technologies: ["React", "Chart.js", "Express", "MongoDB"]
    }
  ];
  
  // Social links
  const socialLinks: SocialLink[] = [
    {
      name: "YouTube",
      url: "#",
      icon: <Play className="h-5 w-5" />,
      stats: "15K Subscribers"
    },
    {
      name: "Discord",
      url: "#",
      icon: <Users className="h-5 w-5" />,
      stats: "50+ Servers"
    },
    {
      name: "Telegram",
      url: "#",
      icon: <Mail className="h-5 w-5" />,
      stats: "Available 24/7"
    },
    {
      name: "Instagram",
      url: "#",
      icon: <Heart className="h-5 w-5" />,
      stats: "8K Followers"
    }
  ];
  
  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: "home", ref: homeRef },
        { id: "skills", ref: skillsRef },
        { id: "projects", ref: projectsRef },
        { id: "about", ref: aboutRef },
        { id: "contact", ref: contactRef }
      ];
      
      const currentSection = sections.find(section => {
        const element = section.ref.current;
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Scroll to section
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };
  
  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send the form data to a server
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold">MinecraftDev</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {[
              { id: "home", label: "Home", ref: homeRef },
              { id: "skills", label: "Skills", ref: skillsRef },
              { id: "projects", label: "Projects", ref: projectsRef },
              { id: "about", label: "About", ref: aboutRef },
              { id: "contact", label: "Contact", ref: contactRef }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.ref)}
                className={`font-medium transition-colors hover:text-green-400 ${
                  activeSection === item.id ? "text-green-400" : "text-gray-300"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
          
          <Button 
            onClick={() => scrollToSection(contactRef)}
            className="hidden md:block bg-green-600 hover:bg-green-700"
          >
            Hire Me
          </Button>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 border-t border-gray-700">
            <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
              {[
                { id: "home", label: "Home", ref: homeRef },
                { id: "skills", label: "Skills", ref: skillsRef },
                { id: "projects", label: "Projects", ref: projectsRef },
                { id: "about", label: "About", ref: aboutRef },
                { id: "contact", label: "Contact", ref: contactRef }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.ref)}
                  className={`py-2 text-left font-medium transition-colors hover:text-green-400 ${
                    activeSection === item.id ? "text-green-400" : "text-gray-300"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button 
                onClick={() => scrollToSection(contactRef)}
                className="bg-green-600 hover:bg-green-700 mt-2"
              >
                Hire Me
              </Button>
            </div>
          </div>
        )}
      </header>
      
      <main>
        {/* Hero Section */}
        <section 
          ref={homeRef} 
          className="min-h-screen flex items-center pt-16 pb-20"
        >
          <div className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-green-400">Minecraft</span> Development Expert
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
                Crafting immersive Minecraft experiences through custom servers, bots, and web solutions
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                  onClick={() => scrollToSection(projectsRef)}
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-lg py-6 px-8"
                >
                  View Projects
                </Button>
                <Button 
                  onClick={() => scrollToSection(contactRef)}
                  size="lg"
                  variant="outline"
                  className="text-lg py-6 px-8 border-green-500 text-green-400 hover:bg-green-500/10"
                >
                  Hire Me
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Skills Section */}
        <section 
          ref={skillsRef} 
          className="py-20 bg-gray-800/50"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">My Expertise</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Specialized in creating custom Minecraft solutions that enhance gameplay and community engagement
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skill) => (
                <Card key={skill.id} className="bg-gray-800/50 border-gray-700 hover:border-green-500 transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="mr-4 p-3 bg-gray-700 rounded-lg">
                        {skill.icon}
                      </div>
                      <h3 className="text-xl font-bold">{skill.title}</h3>
                    </div>
                    <p className="text-gray-400">{skill.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {["Java", "Python", "JavaScript", "Spigot", "Discord.js"].map((tech, index) => (
                        <span 
                          key={index} 
                          className="px-3 py-1 bg-gray-700 text-sm rounded-full"
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
        
        {/* Projects Section */}
        <section 
          ref={projectsRef} 
          className="py-20"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Showcasing my latest Minecraft development work and community solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <Card key={project.id} className="bg-gray-800/50 border-gray-700 overflow-hidden">
                  <div className="h-48 bg-gradient-to-r from-green-700 to-blue-700 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <span className="text-xs px-2 py-1 bg-green-900/50 text-green-400 rounded-full">
                        {project.category}
                      </span>
                    </div>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span 
                          key={index} 
                          className="px-2 py-1 bg-gray-700 text-xs rounded"
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
        
        {/* About Section */}
        <section 
          ref={aboutRef} 
          className="py-20 bg-gray-800/50"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Passionate Minecraft developer with 5+ years of experience creating immersive experiences
                </p>
              </div>
              
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-shrink-0">
                  <div className="bg-gray-200 border-2 border-dashed rounded-full w-48 h-48 mx-auto" />
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4">Crafting Digital Worlds</h3>
                  <p className="text-gray-300 mb-6">
                    I specialize in creating custom Minecraft servers, bots, and web applications that 
                    enhance player experiences and build thriving communities. With expertise in Java, 
                    Python, and modern web technologies, I bring creative ideas to life in the blocky universe.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span>50+ Custom Servers</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span>30+ Bot Projects</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span>15+ Web Applications</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span>5+ Years Experience</span>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={() => scrollToSection(contactRef)}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    Get In Touch
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section 
          ref={contactRef} 
          className="py-20"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Ready to bring your Minecraft vision to life? Let's collaborate!
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <Card className="bg-gray-800/50 border-gray-700">
                  <CardContent className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <Label htmlFor="name" className="text-gray-300">Name</Label>
                        <Input 
                          id="name" 
                          name="name" 
                          value={formData.name}
                          onChange={handleInputChange}
                          className="bg-gray-700 border-gray-600 text-white mt-1"
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="email" className="text-gray-300">Email</Label>
                        <Input 
                          id="email" 
                          name="email" 
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="bg-gray-700 border-gray-600 text-white mt-1"
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="message" className="text-gray-300">Message</Label>
                        <Textarea 
                          id="message" 
                          name="message" 
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={5}
                          className="bg-gray-700 border-gray-600 text-white mt-1"
                          required
                        />
                      </div>
                      
                      <Button 
                        type="submit"
                        className="w-full bg-green-600 hover:bg-green-700 py-6"
                      >
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
                
                {/* Contact Info */}
                <div>
                  <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
                  
                  <div className="space-y-6">
                    {socialLinks.map((link, index) => (
                      <a 
                        key={index}
                        href={link.url}
                        className="flex items-center p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-green-500 transition-colors"
                      >
                        <div className="mr-4 p-3 bg-gray-700 rounded-lg">
                          {link.icon}
                        </div>
                        <div>
                          <h4 className="font-bold text-lg">{link.name}</h4>
                          {link.stats && (
                            <p className="text-gray-400">{link.stats}</p>
                          )}
                        </div>
                        <ArrowRight className="ml-auto h-5 w-5 text-gray-400" />
                      </a>
                    ))}
                  </div>
                  
                  <div className="mt-12 p-6 bg-gradient-to-r from-green-700/30 to-blue-700/30 rounded-lg border border-green-500/30">
                    <h4 className="text-xl font-bold mb-2">Available for Freelance Work</h4>
                    <p className="text-gray-300 mb-4">
                      Have a Minecraft project in mind? I'm currently accepting new freelance opportunities.
                    </p>
                    <Button 
                      onClick={() => scrollToSection(contactRef)}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      Hire Me Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="py-12 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-6 md:mb-0">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">MinecraftDev</span>
            </div>
            
            <div className="flex space-x-6">
              {socialLinks.slice(0, 3).map((link, index) => (
                <a 
                  key={index}
                  href={link.url}
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500">
            <p>© {new Date().getFullYear()} Minecraft Development Portfolio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MinecraftPortfolio;
