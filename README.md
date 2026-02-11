# 💜 Portfolio - Natália ✨

> A visual journey where creativity meets code. A portfolio that breathes design, movement, and personality.

A modern, responsive, and lively personal portfolio built with React, Vite, Tailwind CSS, and GSAP animations. Features smooth navigation, dancing animations with responsive layouts, and a complete showcase of projects with that special touch from someone who loves what they do. 🚀

<div align="center">

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react&style=flat-square)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?logo=vite&style=flat-square)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.1.18-06B6D4?logo=tailwindcss&style=flat-square)
![GSAP](https://img.shields.io/badge/GSAP-3.x-88CEF5?logo=javascript&style=flat-square)

</div>

---

## 🌸 About This Project

Welcome to my corner of the internet! 💖

This is a portfolio that goes beyond the ordinary - it's a reflection of my passion for design, development, and that special touch of magic that makes things extraordinary. Here you'll find not just projects, but stories of creativity, learning, and dedication.

## ✨ What makes it all special?

- 💅 **Truly Responsive Design**: Perfect on any screen with GSAP MatchMedia - no hardcoded positions!
- 🎬 **Enchanting Animations**: Smooth transitions with GSAP that bring the project to life
- 🧭 **Fluid Navigation**: Exploring is as easy as it is beautiful
- 🎁 **Interactive Modal**: Discover project details with a single click
- 📁 **Folder Gallery**: A creative way to explore your work
- 🎨 **Careful Aesthetics**: Colors, typography, and layout thought through to the finest details
- 🚀 **Smart Layout System**: Images position dynamically based on viewport using GSAP's MatchMedia
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
- **GSAP 3.x** - Advanced animations and responsive layouts ⭐

### 🔧 Development

- **ESLint 9.39.1** - Keeping code clean
- **PostCSS 8.5.6** - CSS with superpowers
- **Autoprefixer 10.4.23** - Compatibility guaranteed

---

## 🎯 **Responsive Layout System (GSAP MatchMedia)**

The portfolio now features an advanced **responsive positioning system** using GSAP's MatchMedia feature:

### How It Works

```javascript
// Different layouts for different screen sizes
const positions = {
  mobile: {
    naty: { left: "5vw", top: "50%", scale: 0.5 },
    // Only Natália's image on mobile
  },
  tablet: {
    naty: { left: "2vw", top: "45%", scale: 0.65 },
    coding: { right: "2vw", top: "30%", scale: 0.7 },
    quote1: { left: "3vw", bottom: "5vh", scale: 0.6 },
  },
  desktop: {
    // All images visible in their perfect spots
    naty: { left: "3vw", top: "35%", scale: 0.9 },
    coding: { right: "5vw", top: "15%", scale: 1 },
    quote1: { left: "4vw", bottom: "8vh", scale: 0.85 },
    quote2: { right: "4vw", bottom: "3vh", scale: 0.8 },
    keyboard: { right: "6vw", bottom: "25vh", scale: 1 },
  },
};
```

### 📱 Layout Per Device

| Device      | Layout                                                      |
| ----------- | ----------------------------------------------------------- |
| **Mobile**  | Single image (Natália)                                      |
| **Tablet**  | Left: Natália + Quote \| Right: Coding                      |
| **Desktop** | Left: Natália + Quote1 \| Right: Coding + Quote2 + Keyboard |

**Key Benefits:**

- ✅ No hardcoded CSS breakpoints needed
- ✅ Images scale smoothly on resize
- ✅ Uses `vw`/`vh` for true responsiveness
- ✅ Animations work perfectly on all devices

---

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

---

## 🪝 Using the Responsive Hook

### **useResponsiveLayout** - Smart Image Positioning

Located in: `src/hooks/useResponsiveLayout.js`

This custom React hook manages all responsive image positioning using GSAP's MatchMedia API.

#### How to use it:

```jsx
import { useRef } from "react";
import { useResponsiveLayout } from "../hooks/useResponsiveLayout";
import Image from "../components/Image";

export const MyPage = () => {
  const containerRef = useRef(null);

  // Activate the hook
  useResponsiveLayout(containerRef);

  return (
    <div ref={containerRef}>
      {/* Your images */}
      <Image
        src={myImage}
        alt="description"
        imageName="myImage" // Used for positioning
        size="w-32 h-32"
      />
    </div>
  );
};
```

#### Adding a new image:

1. Add it to the `positions` object in the hook:

```javascript
const positions = {
  mobile: { myImage: { display: "none" } },
  tablet: { myImage: { left: "10vw", top: "30%", scale: 0.7 } },
  desktop: { myImage: { left: "15vw", top: "40%", scale: 1 } },
};
```

2. Use the `imageName` prop in your Image component:

```jsx
<Image imageName="myImage" ... />
```

**That's it!** The hook automatically handles responsive positioning! 🎯

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

Want to customize animations? Edit the hook or component files:

**GSAP animations** (`src/pages/Home.jsx`):

```javascript
duration: 1,        // How long does it take? (in seconds)
delay: 0.1 + index * 0.1,  // How long to wait between each?
ease: "power2.inOut"  // Type of easing animation
```

**GSAP MatchMedia** (`src/hooks/useResponsiveLayout.js`):

```javascript
// Change breakpoints
mm.add("(max-width: 768px)", () => {
  /* Mobile */
});
mm.add("(min-width: 769px) and (max-width: 1024px)", () => {
  /* Tablet */
});
mm.add("(min-width: 1025px)", () => {
  /* Desktop */
});
```

---

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

Component for images that understand style and are now **100% responsive** with GSAP positioning.

---

## 📄 The Pages (each with its own personality)

### 🏠 Home

The first "Hi!" of your portfolio

- ✨ Impressive hero section with responsive image positioning
- 💖 Memorable introduction with GSAP animations
- 🎯 CTA to explore projects
- 📱 Perfect on all devices (Mobile → Tablet → Desktop)

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
- ☀️ **SOL** - AI for mental health
- 📚 **BookSheelf** - Your personalized digital library
- ☕ **coffeeShop** - E-commerce for coffee lovers

Each one with interactive modal, technical details, and links to explore more!

## � Troubleshooting

### Images not appearing on mobile?

Check `src/hooks/useResponsiveLayout.js` and ensure the `imageName` matches the element selector `.image-{imageName}`.

### Animations not smooth?

Make sure GSAP is installed:

```bash
npm install gsap
```

### Layout looks weird on resize?

The GSAP MatchMedia hook should auto-recalculate. If not, try refreshing the page.

---

## �🚀 Sharing Your Masterpiece

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

---

## 📝 License

MIT License - Which means you can use, modify, and share! 💕

## 💌 Let's Chat?

**Natália Bastos**

- 🌐 GitHub: [@natybastosp](https://github.com/natybastosp)
- 💌 Email: your-email@example.com

---

<div align="center">

### Made with 💜 and lots of `console.log()` 🎯

**Responsive, Animated, and Absolutely Fabulous!** ✨

</div>
- 🎨 Portfolio: [your-portfolio.com](https://your-portfolio.com)

---

<div align="center">

### Made with 💜, ☕ and lots of creativity

**If you liked it, leave a ⭐ and share with someone special!**

`React` `Vite` `Tailwind CSS` `JavaScript` `GSAP`

</div>
