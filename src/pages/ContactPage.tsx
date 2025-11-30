import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { 
  MessageSquare, 
  Users, 
  Mail, 
  Play, 
  ArrowRight
} from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    {
      name: "Discord",
      url: "#",
      icon: <Users className="h-5 w-5" />,
      stats: "50+ Servers"
    },
    {
      name: "GitHub",
      url: "#",
      icon: <MessageSquare className="h-5 w-5" />,
      stats: "30+ Projects"
    },
    {
      name: "Email",
      url: "#",
      icon: <Mail className="h-5 w-5" />,
      stats: "24/7 Response"
    },
    {
      name: "YouTube",
      url: "#",
      icon: <Play className="h-5 w-5" />,
      stats: "15K Subscribers"
    }
  ];

  return (
    <section className="py-20" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-green-400">
              Get In Touch
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Ready to bring your digital vision to life? Let's collaborate!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-gray-300 mb-2 block">Name</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-gray-700 border-gray-600 text-white"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-gray-300 mb-2 block">Email</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-gray-700 border-gray-600 text-white"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-gray-300 mb-2 block">Message</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="bg-gray-700 border-gray-600 text-white"
                    required
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 py-3 rounded-lg"
                >
                  Send Message
                </Button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
              
              <div className="space-y-4 mb-10">
                {socialLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.url}
                    className="flex items-center p-4 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-indigo-500/50 transition-all"
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
              
              <div className="p-6 bg-gradient-to-r from-indigo-700/20 to-green-700/20 rounded-xl border border-indigo-500/30">
                <h4 className="text-xl font-bold mb-2">Available for Projects</h4>
                <p className="text-gray-300 mb-4">
                  Have a Minecraft or Discord project in mind? I'm currently accepting new freelance opportunities.
                </p>
                <Button 
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="bg-indigo-600 hover:bg-indigo-700"
                >
                  Hire Me Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
