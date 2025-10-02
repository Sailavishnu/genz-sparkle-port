import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Sparkles, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-bg.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-block mb-4 px-4 py-2 bg-secondary rounded-full text-sm font-medium text-primary">
              ✨ Welcome to the Future
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Gen Z Developers
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              We build innovative digital solutions that shape tomorrow. Creative, bold, and always pushing boundaries.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground group transition-all hover:neon-glow"
              >
                <Link to="/products">
                  View Our Work
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all"
              >
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">What We Do Best</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Combining cutting-edge technology with creative thinking
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 bg-card rounded-2xl border border-border hover:border-accent transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-accent/10 transition-colors">
                <Code className="h-8 w-8 text-primary group-hover:text-accent transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3">Modern Development</h3>
              <p className="text-muted-foreground">
                Building fast, scalable web applications using the latest technologies and best practices.
              </p>
            </div>

            <div className="group p-8 bg-card rounded-2xl border border-border hover:border-accent transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-accent/10 transition-colors">
                <Sparkles className="h-8 w-8 text-primary group-hover:text-accent transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3">Creative Design</h3>
              <p className="text-muted-foreground">
                Crafting beautiful, intuitive user experiences that users love and remember.
              </p>
            </div>

            <div className="group p-8 bg-card rounded-2xl border border-border hover:border-accent transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-accent/10 transition-colors">
                <Zap className="h-8 w-8 text-primary group-hover:text-accent transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3">Lightning Fast</h3>
              <p className="text-muted-foreground">
                Optimized performance and rapid delivery without compromising on quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-12 border border-primary/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build Something Amazing?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's collaborate and bring your ideas to life with innovative solutions.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground animate-glow-pulse"
            >
              <Link to="/contact">Start a Project</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
