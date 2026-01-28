# 💜 Portfolio - Natália ✨

> A visual journey where creativity meets code. A portfolio that breathes design, movement, and personality.

A modern, responsive, and lively personal portfolio built with React, Vite, and Tailwind CSS. Features smooth navigation, dancing animations, and a complete showcase of projects with that special touch from someone who loves what they do. 🚀

<div align="center">

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react&style=flat-square)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?logo=vite&style=flat-square)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.1.18-06B6D4?logo=tailwindcss&style=flat-square)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black&style=flat-square)

</div>

---

## 🌸 About This Project

Welcome to my corner of the internet! 💖

This is a portfolio that goes beyond the ordinary - it's a reflection of my passion for design, development, and that special touch of magic that makes things extraordinary. Here you'll find not just projects, but stories of creativity, learning, and dedication.

## ✨ What makes it all special?

- 💅 **Responsive Design**: Beautiful on any screen, from mobile to desktop
- 🎬 **Enchanting Animations**: Smooth transitions that bring the project to life
- 🧭 **Fluid Navigation**: Exploring is as easy as it is beautiful
- 🎁 **Interactive Modal**: Discover project details with a single click
- 📁 **Folder Gallery**: A creative way to explore your work
- 🎨 **Careful Aesthetics**: Colors, typography, and layout thought through to the finest details
- 🌙 **Future Ready**: All set for dark mode whenever your heart desires

## 📋 Table of Contents

- [About](#about-this-project)
- [Features](#-what-makes-it-all-special)
- [Project Structure](#-how-is-it-organized)
- [Technologies](#️-magic-ingredients)
- [Installation](#-lets-get-started)
- [How to Use](#-how-to-explore-it)
- [Available Scripts](#-commands-youll-use)
- [Components](#-project-components)
- [Pages](#-the-pages-each-with-its-own-personality)
- [Customization](#-personalizing-the-vibe)
- [Deploy](#-sharing-your-masterpiece)
- [Author](#-lets-chat)

## 📁 How is it organized?

```
portfolio/
├── 🎨 src/
│   ├── 🖼️  assets/              # All the visual beauty
│   │   ├── background.jpeg
│   │   ├── naty.jpeg
│   │   ├── folder.svg          # ✨ Our star!
│   │   ├── react.svg
│   │   └── working.mp4
│   ├── 🧩 components/           # Puzzle pieces
│   │   ├── Layout.jsx          # The project skeleton
│   │   └── Image.jsx           # Images with style
│   ├── 📄 pages/                # The main pages
│   │   ├── Home.jsx            # The big hello! 👋
│   │   ├── Sobre.jsx           # My story 📖
│   │   └── Projetos.jsx        # The highlight ⭐
│   ├── App.jsx                  # The heart
│   ├── main.jsx                 # The kickoff
│   ├── index.css                # Global styles
│   └── App.css                  # App styles
├── 📦 public/
├── 🌐 index.html
├── ⚙️  (config files)
└── 📋 package.json
```

## 🛠️ Magic Ingredients

### 🎭 Frontend

- **React 19.2.0** - The maestro of interfaces
- **Vite 7.2.4** - Speed that speaks for itself
- **React Router DOM 7.13.0** - Traveling between pages
- **Tailwind CSS 4.1.18** - Styling with superpowers
- **Anime.js 4.3.5** - Animations that touch your heart

### 🔧 Development

- **ESLint 9.39.1** - Keeping code clean
- **PostCSS 8.5.6** - CSS with superpowers
- **Autoprefixer 10.4.23** - Compatibility guaranteed

## 🚀 Let's Get Started?

### Prerequisites

- Node.js (v16+) installed on your PC
- npm or yarn (comes with Node.js)
- A cup of coffee ☕ (optional but recommended!)### Passo a passo

**1️⃣ Clone this repository**

```bash
git clone https://github.com/natybastosp/portfolio.git
cd portfolio
```

**2️⃣ Install dependencies**

```bash
npm install
```

**3️⃣ Light up the local magic**

```bash
npm run dev
```

Open your browser at `http://localhost:5173` and watch the magic happen! ✨

## 💻 How to Explore It?

### 🧭 Navigating the site

| Page            | What's there                              |
| --------------- | ----------------------------------------- |
| **🏠 Home**     | First impression, chic introduction       |
| **📖 About**    | My story, who I am, what I do             |
| **🎨 Projects** | The star of the show - click and discover |
| **💬 Contact**  | Let's chat!                               |

### 🎯 Exploring the Projects

It's super easy! Just follow the steps:

1. Go to "Projects"
2. See those cute little folders? 📁
3. Click on any one
4. Boom! Details, technologies, and links appear in a beautiful modal
5. Close by clicking the X or outside the window

## 📜 Commands You'll Use

```bash
npm run dev      # Develop with style (localhost:5173)
npm run build    # Create a production-ready version
npm run preview  # See how the final version looks
npm run lint     # Check if code is clean
```

## 🎨 Personalizing the Vibe

### 🌈 Colors (that gorgeous purple!)

Look for `tailwind.config.js`:

```js
// Mysterious purple
#E3AE08

// Delicate pink
#FFB5C5
```

### 🔤 Typography

- **Primary**: Poppins (dynamic and modern)
- **Titles**: Abril Fatface (dramatic and elegant)

### 🎬 Animations

Want to make it faster or slower? Edit `src/pages/Projetos.jsx`:

```javascript
duration: 800,      // How long does it take? (in ms)
delay: (el, i) => i * 100,  // How long to wait between each?
```

## 🎯 Project Components

### 🎭 Layout

The wrapper that embraces everything and contains the chic navigation.

```jsx
<Layout>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Sobre" element={<About />} />
    <Route path="/Projetos" element={<Projects />} />
  </Routes>
</Layout>
```

### 🖼️ Image

Component for images that understand style.

## 📄 The Pages (each with its own personality)

### 🏠 Home

The first "Hi!" of your portfolio

- Impressive hero section
- Memorable introduction
- CTA to explore projects

### 📖 About

My story, drawn with words

- Who am I really?
- What am I capable of?
- How to reach me?

### ⭐ Projects

Where creativity becomes code!

**Featured Projects:**

- 🌸 **Floriography** - The language of flowers in code
- 📸 **Autofoto** - Photo editing with AI (so cool!)
- 💣 **Minesweeper** - Classic game, modern design
- 📊 **SOL** - AI for mental health
- 📚 **BookSheelf** - Your personalized digital library
- ☕ **coffeeShop** - E-commerce for coffee lovers

Each one with interactive modal, technical details, and links to explore more!

## 🚀 Sharing Your Masterpiece

Ready to share your masterpiece with the world?

### 🎈 Vercel (Super easy!)

```bash
npm install -g vercel
vercel
```

### 🎪 Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### 🐙 GitHub Pages

Update `vite.config.js`:

```javascript
export default {
  base: "/portfolio/",
};
```

## 📝 License

MIT License - Which means you can use, modify, and share! 💕

## 💌 Let's Chat?

**Natália Bastos**

- 🌐 GitHub: [@natybastosp](https://github.com/natybastosp)
- 💌 Email: your-email@example.com
- 🎨 Portfolio: [your-portfolio.com](https://your-portfolio.com)

---

<div align="center">

### Made with 💜, ☕ and lots of creativity

**If you liked it, leave a ⭐ and share with someone special!**

`React` `Vite` `Tailwind CSS` `JavaScript` `Anime.js`

</div>
