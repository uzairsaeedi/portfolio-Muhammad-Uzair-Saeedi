# Muhammad Uzair Saeedi — Portfolio

Personal portfolio website for Muhammad Uzair Saeedi — Full Stack Developer, Mobile App Developer, and DevOps Engineer. Built with React 18 + Vite, styled with Tailwind CSS, and deployed to GitHub Pages.

## Live Site

[uzairsaeedi.github.io/portfolio-Muhammad-Uzair-Saeedi](https://uzairsaeedi.github.io/portfolio-Muhammad-Uzair-Saeedi)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + Vite 5 |
| Styling | Tailwind CSS v3 |
| Routing | React Router DOM v7 |
| Animations | Framer Motion v11 |
| Icons | React Icons v5 |
| Scroll links | React Scroll |
| Contact form | Formspree |
| Deployment | GitHub Pages (via GitHub Actions) |

---

## Project Structure

```
├── src/
│   ├── App.jsx                  # Root — BrowserRouter + Routes
│   ├── main.jsx                 # React entry point
│   ├── index.css                # Global styles, Tailwind directives, utilities
│   ├── components/
│   │   ├── Navbar.jsx           # Sticky top nav with scroll-spy
│   │   ├── Hero.jsx             # Landing hero with animated counters
│   │   ├── Portfolio.jsx        # Project grid with filter + demo modal
│   │   ├── About.jsx            # About section
│   │   ├── Experience.jsx       # Work experience timeline
│   │   ├── Services.jsx         # Services offered
│   │   ├── Skills.jsx           # Circular skill meters + tech stack grid
│   │   ├── Contact.jsx          # Contact form (Formspree)
│   │   ├── Footer.jsx           # Footer with links
│   │   ├── BackToTop.jsx        # Floating back-to-top button
│   │   ├── ProjectDetail.jsx    # Dynamic project detail page
│   │   └── ProjectNavbar.jsx    # Minimal navbar for project pages
│   └── data/
│       └── portfolioData.js     # All 16 project definitions + category colors
├── images/                      # Project screenshot images (served as /images/*)
├── assets/                      # Resume PDFs
├── public/
│   ├── 404.html                 # GitHub Pages SPA redirect handler
│   └── CNAME                   # Custom domain config
├── .github/
│   └── workflows/deploy.yml    # Build + deploy to GitHub Pages
├── index.html                   # Vite HTML entry point
├── tailwind.config.js           # Custom navy + brand color tokens
└── vite.config.js               # Vite config with static image middleware
```

---

## Getting Started

**Prerequisites:** Node.js 18+

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

The dev server runs at `http://localhost:5173`. Images in `images/` and `assets/` are served via a custom Vite middleware so `/images/...` paths resolve correctly in development.

---

## Projects

16 projects are defined in `src/data/portfolioData.js` across four categories:

| Category | Projects |
|---|---|
| Web | RentEase, Restaurant Management System, Angular & Spring Boot, CRUD Operations, REST APIs, MERN Stack Application, Admission Guideline Portal, Chat Application, MERN Contacts App |
| Mobile | Currency Converter App, Story Teller |
| DevOps | Terraform Beginner to Intermediate, Terraform Project, Jenkins CI/CD Pipeline, AWS Cloud Infrastructure |
| AI/ML | Traffic Predictor |

Each project entry includes: `title`, `subtitle`, `slug`, `image`, `category`, `tags`, `date`, `description`, `features`, `github`, and optional `demo`.

---

## Routing

The site uses React Router for client-side routing:

- `/` — Main single-page portfolio
- `/projects/:slug` — Individual project detail page

GitHub Pages doesn't support HTML5 history routing natively. This is handled by:
1. `public/404.html` — saves the requested path to `sessionStorage` then redirects to `/`
2. `index.html` inline script — reads the saved path and restores it via `history.replaceState` before React mounts

---

## Deployment

Pushes to `main` automatically trigger the GitHub Actions workflow (`.github/workflows/deploy.yml`) which:

1. Installs dependencies with `npm ci`
2. Runs `npm run build` (Vite)
3. Copies `images/`, `assets/`, and `favicon.png` into `dist/`
4. Deploys `dist/` to GitHub Pages

---

## Contact

- **Email:** uzairsaeedi627@gmail.com
- **LinkedIn:** [muhammad-uzair-saeedi](https://www.linkedin.com/in/muhammad-uzair-saeedi)
- **GitHub:** [uzairsaeedi](https://github.com/uzairsaeedi)
