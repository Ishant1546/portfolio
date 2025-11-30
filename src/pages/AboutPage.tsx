import { Button } from "../components/ui/button";
import { Check } from "lucide-react";

const AboutPage = () => {
  return (
    <section className="py-20" id="about">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-green-400">
              About Me
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Passionate developer creating immersive digital experiences
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-shrink-0">
              <div className="bg-gray-200 border-2 border-dashed rounded-full w-64 h-64 mx-auto lg:mx-0" />
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Crafting Digital Worlds</h3>
              <p className="text-gray-300 mb-6">
                I specialize in creating custom Minecraft servers, Discord bots, and web applications that 
                enhance player experiences and build thriving communities. With expertise in Java, 
                Python, and modern web technologies, I bring creative ideas to life in the digital universe.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {[
                  "50+ Custom Servers Built",
                  "30+ Discord Bots Created",
                  "15+ Web Applications",
                  "5+ Years Experience",
                  "24/7 Community Support",
                  "Custom Plugin Development"
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <Button 
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-indigo-600 hover:bg-indigo-700 px-8 py-3 rounded-lg"
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
