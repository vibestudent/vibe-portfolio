# VIBE Portfolio

> I don't code line by line — I vibe with AI

A cyberpunk-themed portfolio showcasing AI-first development experiments and rapid prototyping workflows.

## 🌐 Live Demo

[Deploy to Vercel](#deployment) to see it live!

## ✨ Features

- **Cyberpunk Aesthetic** – Neon cyan/purple theme with smooth animations
- **Dark/Light Mode Toggle** – Seamless theme switching with localStorage persistence
- **Responsive Design** – Mobile-first, works beautifully on all devices
- **Project Showcase** – Featured projects with tags and external links
- **Skills Grid** – Languages, tools, and AI platforms at a glance
- **Social Links** – Connect via GitHub, Instagram, and YouTube

## 🛠️ Tech Stack

- **Framework** – Next.js 15 (App Router)
- **Styling** – Tailwind CSS v4
- **Icons** – Lucide React
- **Deployment** – Vercel
- **Theme** – Custom dark/light mode provider

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/vibestudent/portfolio.git
   cd portfolio
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Run development server**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Open in browser**
   \`\`\`
   http://localhost:3000
   \`\`\`

## 📦 Deployment

### Option 1: Deploy to Vercel (Recommended)

1. **Push to GitHub** (see below)
2. **Go to [vercel.com](https://vercel.com)**
3. **Click "New Project"**
4. **Select your GitHub repository**
5. **Click "Deploy"** – Vercel handles the rest automatically!

### Option 2: Deploy from v0

1. **In v0**, click the **"Publish"** button (top right)
2. **Select "Deploy to Vercel"**
3. **Authorize with GitHub** (if needed)
4. **Your site goes live instantly!**

## 🐙 Push to GitHub

### First Time Setup

1. **Create a new repository on GitHub**
   - Go to [github.com/new](https://github.com/new)
   - Name it `portfolio`
   - Don't initialize with README (we have one!)
   - Click "Create repository"

2. **Initialize git locally**
   \`\`\`bash
   git init
   git add .
   git commit -m "Initial commit: cyberpunk portfolio"
   \`\`\`

3. **Add remote and push**
   \`\`\`bash
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git branch -M main
   git push -u origin main
   \`\`\`

### Subsequent Updates

\`\`\`bash
git add .
git commit -m "Your commit message"
git push
\`\`\`

## 🎨 Customization

### Update Your Info

Edit `app/page.tsx`:
- Change the hero text and description
- Update project links and descriptions
- Modify social media links
- Adjust skills and categories

### Customize Colors

Edit `app/globals.css`:
- `--primary` – Cyan neon color
- `--secondary` – Purple/magenta accent
- `--background` – Dark background
- `--foreground` – Text color

### Add More Projects

In `app/page.tsx`, add to the `projects` array:
\`\`\`tsx
{
  id: "your-project",
  title: "Project Name",
  description: "What it does",
  tags: ["Tech", "Stack"],
  link: "https://github.com/...",
  featured: false,
}
\`\`\`

## 📱 Project Structure

\`\`\`
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Main portfolio page
│   ├── globals.css         # Tailwind + design tokens
│   └── providers.tsx       # Theme provider component
├── public/                 # Static assets
├── package.json
└── README.md
\`\`\`

## 🔗 Quick Links

- **GitHub** – [github.com/vibestudent](https://github.com/vibestudent)
- **Instagram** – [@vibestudent.ai](https://instagram.com/vibestudent.ai)
- **YouTube** – [@vibestudentai](https://youtube.com/@vibestudentai)

## 📝 License

MIT – Feel free to fork and customize!

---

**Built with AI • Deployed with Vercel • Vibing since 2024**
