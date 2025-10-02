import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Products = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A modern, scalable e-commerce solution with real-time inventory management and seamless checkout.",
      tags: ["React", "Node.js", "PostgreSQL"],
      color: "from-purple-500/20 to-blue-500/20",
    },
    {
      id: 2,
      title: "Social Media Dashboard",
      description: "Analytics dashboard for managing multiple social media accounts with AI-powered insights.",
      tags: ["Next.js", "TypeScript", "AI"],
      color: "from-blue-500/20 to-purple-500/20",
    },
    {
      id: 3,
      title: "Task Management App",
      description: "Collaborative task manager with real-time updates, team chat, and productivity analytics.",
      tags: ["React", "Firebase", "Tailwind"],
      color: "from-purple-600/20 to-pink-500/20",
    },
    {
      id: 4,
      title: "Learning Platform",
      description: "Interactive online learning platform with video courses, quizzes, and progress tracking.",
      tags: ["Vue.js", "Express", "MongoDB"],
      color: "from-blue-600/20 to-purple-500/20",
    },
    {
      id: 5,
      title: "Weather Forecast App",
      description: "Beautiful weather app with location-based forecasts, alerts, and interactive maps.",
      tags: ["React Native", "API", "Maps"],
      color: "from-purple-500/20 to-blue-600/20",
    },
    {
      id: 6,
      title: "Portfolio Generator",
      description: "AI-powered tool to create stunning developer portfolios in minutes with customizable templates.",
      tags: ["React", "AI", "Tailwind"],
      color: "from-blue-500/20 to-purple-600/20",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Recent Products
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our latest projects and see how we turn ideas into reality.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-card rounded-2xl border border-border overflow-hidden hover:border-accent transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              {/* Content */}
              <div className="relative p-6">
                <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all group-hover:neon-glow"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Live
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="inline-block bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 md:p-12 border border-primary/20">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Have a Project in Mind?</h2>
            <p className="text-muted-foreground mb-6 max-w-xl">
              Let's discuss how we can bring your vision to life with our expertise and creativity.
            </p>
            <Button
              className="bg-accent hover:bg-accent/90 text-accent-foreground animate-glow-pulse"
              size="lg"
            >
              Start Your Project
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
