import { Button } from "../components/ui/button";
import { Code, Folder, Mail } from "lucide-react";

const HomePage = () => {
  return (
    <section className="min-h-screen flex items-center py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-indigo-600/20 rounded-full mb-6 border border-indigo-500/30">
              <Code className="h-12 w-12 text-indigo-400" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-green-400">
                Minecraft & Discord
              </span>{" "}
              Developer
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Crafting immersive digital experiences through custom servers, bots, and web applications
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <Button 
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              size="lg"
              className="bg-indigo-600 hover:bg-indigo-700 text-lg px-8 py-6 rounded-xl"
            >
              <Folder className="mr-2 h-5 w-5" />
              View Projects
            </Button>
            <Button 
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-indigo-500 text-indigo-300 hover:bg-indigo-500/10 rounded-xl"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {[
              { value: "50+", label: "Servers Built" },
              { value: "30+", label: "Bots Created" },
              { value: "15+", label: "Web Apps" },
              { value: "5+", label: "Years Experience" }
            ].map((stat, index) => (
              <div key={index} className="bg-gray-800/50 p-4 rounded-xl border border-gray-700">
                <div className="text-2xl font-bold text-indigo-400">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
