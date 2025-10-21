# ⚡ VIBE Portfolio

> I don’t code line by line — I **vibe with AI**.

A **cyberpunk-inspired portfolio** built with AI-assisted workflows.  
This repo showcases **AI-first prototyping**, **terminal-driven automation**, and a design-for-flow philosophy — where creativity meets computation.

---

## 🧠 Concept
This portfolio isn’t hand-coded in the traditional sense.  
It’s **AI-orchestrated**, **prompt-engineered**, and **human-refined** — reflecting how I build across projects under the **Vibe Student** brand.

---

## 🛠️ Tech Stack
- **Framework:** Next.js  
- **Styling:** Tailwind CSS  
- **Icons:** Lucide React  
- **Theme:** Custom dark/light provider

---

## 🚀 Run Locally

```bash
git clone https://github.com/vibestudent/vibe-portfolio.git
cd vibe-portfolio
npm install
npm run dev
```

Open: http://localhost:3000

(If you prefer yarn: replace `npm` with `yarn`.)

> ⚠️ **React Dependency Notice**
>
> If you encounter an error like this during installation:
> ```
> npm ERR! ERESOLVE unable to resolve dependency tree
> npm ERR! Found: react@19.x but vaul@0.9.9 requires react@^18
> ```
> You can fix it by running one of these commands:
>
> **Option 1 (recommended):**
> ```bash
> npm install --legacy-peer-deps
> ```
>
> **Option 2 (if you want to stay on React 18):**
> ```bash
> npm install react@18 react-dom@18
> npm install
> ```
>
> This issue occurs because React 19 is newer than what some dependencies (like `vaul`) officially support.  
> Using the `--legacy-peer-deps` flag ensures smooth local setup without breaking functionality.

---

## 📁 Project Structure

```
portfolio/
├─ app/
│  ├─ layout.tsx          # Root layout with theme provider
│  ├─ page.tsx            # Main portfolio page (edit to update content)
│  └─ globals.css         # Tailwind + design tokens
├─ public/                # Static assets
├─ package.json
└─ README.md
```

---

## 👾 Explore More
Discover other AI-powered experiments from the Vibe Student ecosystem:
- [VIBEcode Game](https://github.com/vibestudent/vibecode-game)
- [PopupKit](https://github.com/vibestudent/popupkit)
- [Copilot Advanced Pong](https://github.com/vibestudent/copilot-advanced-pong)
- [React Calculator App](https://github.com/vibestudent/react-calculator-app)

---

## 🔗 Connect
- GitHub – https://github.com/vibestudent  
- Instagram – https://instagram.com/vibestudent.ai/  
- YouTube – https://www.youtube.com/@vibestudentai

---

## 🧩 Creator Note
Built with **AI assistance** and creative direction — this project is part of the  
**Vibe Student** ecosystem:

> ⚡ AI-powered dev experiments  
> 💻 Terminal workflows & automation  
> 🎧 Vibecoding everything
