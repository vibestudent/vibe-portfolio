"use client"

import { useState } from "react"
import { Github, Instagram, Youtube, ExternalLink, Code2, Zap, Sparkles, Moon, Sun } from "lucide-react"
import { useTheme } from "./providers"

export default function Home() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)
  const { theme, toggleTheme, mounted } = useTheme()

  const projects = [
    {
      id: "vibecode",
      title: "VIBEcode",
      description: "AI-generated code matching arcade game with streak scoring and progressive difficulty",
      tags: ["React", "AI", "Game Dev", "Terminal UI"],
      link: "https://github.com/vibestudent/vibecode-game",
      featured: true,
    },
    {
      id: "popupkit",
      title: "PopupKit",
      description: "UI component library prototyped entirely with v0 by Vercel",
      tags: ["React", "v0", "UI Components"],
      link: "https://github.com/vibestudent/popupkit",
    },
    {
      id: "pong",
      title: "Copilot Advanced Pong",
      description: "Classic Pong game built using VS Code Copilot Agent",
      tags: ["Game Dev", "Copilot", "JavaScript"],
      link: "https://github.com/vibestudent/copilot-advanced-pong",
    },
    {
      id: "calculator",
      title: "React Calculator App",
      description: "Frontend calculator prototyped with v0 by Vercel",
      tags: ["React", "v0", "Frontend"],
      link: "https://github.com/vibestudent/react-calculator-app",
    },
  ]

  const skills = [
    { category: "Languages", items: ["Java", "C", "C++", "Python", "Bash"] },
    { category: "Tools", items: ["Neovim", "Ghostty", "Zsh", "Starship", "Docker"] },
    { category: "AI Platforms", items: ["Claude", "ChatGPT", "Copilot", "Cursor", "v0"] },
  ]

  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Animated background grid */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-secondary/20" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-border/50 backdrop-blur-md bg-background/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-xl font-bold neon-text">VIBE</div>
          <div className="flex gap-6 items-center text-sm">
            <a href="#projects" className="hover:text-primary transition-colors">
              Projects
            </a>
            <a href="#about" className="hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" className="hover:text-primary transition-colors">
              Contact
            </a>
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5 text-primary" />
                ) : (
                  <Moon className="w-5 h-5 text-primary" />
                )}
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <div className="inline-block px-4 py-2 rounded-full border border-primary/50 bg-primary/10 text-primary text-sm font-mono">
              AI-first prototypes • Terminal workflows • Agent-led builds
            </div>

            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight">
              I don't code line by line
              <br />
              <span className="neon-text-magenta">I vibe with AI</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Building playgrounds for human+AI creativity. Fast, focused, and functional prototypes that explore new
              development patterns.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <a
              href="#projects"
              className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:shadow-lg hover:neon-glow transition-all duration-300"
            >
              View Projects
            </a>
            <a
              href="https://github.com/vibestudent"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-lg border border-primary/50 text-primary hover:bg-primary/10 font-semibold transition-all duration-300"
            >
              GitHub
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-4 mb-16">
            <h2 className="text-4xl font-bold flex items-center gap-3">
              <Code2 className="w-8 h-8 text-primary" />
              Featured Projects
            </h2>
            <p className="text-muted-foreground">Learning-first experiments exploring agent-driven development</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className={`group relative p-6 rounded-lg border transition-all duration-300 ${
                  project.featured
                    ? "md:col-span-2 border-primary/50 bg-card/50 hover:bg-card/80 hover:neon-glow"
                    : "border-border/50 bg-card/30 hover:bg-card/60 hover:border-primary/50"
                } ${hoveredProject === project.id ? "shadow-lg" : ""}`}
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{project.description}</p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-primary/50 group-hover:text-primary transition-colors flex-shrink-0" />
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs font-mono bg-primary/10 text-primary border border-primary/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 px-4 border-t border-border/50">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-4 mb-16">
            <h2 className="text-4xl font-bold flex items-center gap-3">
              <Sparkles className="w-8 h-8 text-secondary" />
              About Me
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently studying <span className="text-foreground font-semibold">Computer Engineering</span> at
                University POLITEHNICA of Bucharest (2022–2026). My focus is on hands-on experiments, rapid iteration,
                and exploring new development patterns with AI.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I believe in the power of AI-assisted workflows to accelerate creativity and innovation. Rather than
                traditional line-by-line coding, I orchestrate AI agents and terminal-first workflows to prototype
                faster and refine smarter.
              </p>
            </div>

            <div className="space-y-6">
              {skills.map((skillGroup) => (
                <div key={skillGroup.category} className="p-4 rounded-lg border border-border/50 bg-card/30">
                  <h3 className="font-semibold text-primary mb-3 flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((item) => (
                      <span key={item} className="text-xs px-2 py-1 rounded bg-primary/10 text-primary font-mono">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 px-4 border-t border-border/50">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">Let's Connect</h2>
            <p className="text-lg text-muted-foreground">
              Interested in AI-first development or want to collaborate? Reach out!
            </p>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/vibestudent"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-lg border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
            >
              <Github className="w-6 h-6 group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://www.instagram.com/vibestudent.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-lg border border-border/50 hover:border-secondary/50 hover:bg-secondary/10 transition-all duration-300 group"
            >
              <Instagram className="w-6 h-6 group-hover:text-secondary transition-colors" />
            </a>
            <a
              href="https://www.youtube.com/@vibestudentai"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-lg border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
            >
              <Youtube className="w-6 h-6 group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8 px-4 text-center text-sm text-muted-foreground">
        <p>Built with AI • Deployed with Vercel • Vibing since 2024</p>
      </footer>
    </main>
  )
}
