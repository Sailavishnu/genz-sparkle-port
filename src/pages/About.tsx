import { Users, Target, Rocket, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're a team of passionate Gen Z developers who believe in creating digital experiences that matter.
          </p>
        </div>

        {/* Story Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-card rounded-3xl p-8 md:p-12 border border-border">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Our Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Born in the digital age, we understand technology like no other generation. Gen Z Developers started
                with a simple mission: to bridge the gap between innovative ideas and exceptional execution.
              </p>
              <p>
                We're not just coders – we're creators, problem solvers, and dreamers. Every project we take on is an
                opportunity to push boundaries and challenge the status quo. We combine technical expertise with
                creative thinking to deliver solutions that aren't just functional, but inspiring.
              </p>
              <p>
                Our team thrives on collaboration, continuous learning, and staying ahead of the curve. We embrace
                modern technologies, agile methodologies, and user-centric design principles to create products
                that truly make a difference.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group p-6 bg-card rounded-2xl border border-border hover:border-primary transition-all duration-300 text-center hover:-translate-y-2">
              <div className="mb-4 inline-flex p-4 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Collaboration</h3>
              <p className="text-sm text-muted-foreground">
                We believe in the power of teamwork and open communication.
              </p>
            </div>

            <div className="group p-6 bg-card rounded-2xl border border-border hover:border-primary transition-all duration-300 text-center hover:-translate-y-2">
              <div className="mb-4 inline-flex p-4 bg-accent/10 rounded-2xl group-hover:bg-accent/20 transition-colors">
                <Target className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2">Excellence</h3>
              <p className="text-sm text-muted-foreground">
                We strive for the highest quality in everything we create.
              </p>
            </div>

            <div className="group p-6 bg-card rounded-2xl border border-border hover:border-primary transition-all duration-300 text-center hover:-translate-y-2">
              <div className="mb-4 inline-flex p-4 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors">
                <Rocket className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-sm text-muted-foreground">
                We're always exploring new technologies and approaches.
              </p>
            </div>

            <div className="group p-6 bg-card rounded-2xl border border-border hover:border-primary transition-all duration-300 text-center hover:-translate-y-2">
              <div className="mb-4 inline-flex p-4 bg-accent/10 rounded-2xl group-hover:bg-accent/20 transition-colors">
                <Heart className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2">Passion</h3>
              <p className="text-sm text-muted-foreground">
                We love what we do and it shows in our work.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 md:p-12 border border-primary/20">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">30+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Passion & Dedication</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
