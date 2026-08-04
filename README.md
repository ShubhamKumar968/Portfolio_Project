<h1 align="center">🚀 Shubham Kumar — Personal Portfolio Website</h1>

<p align="center">
  A modern, fully responsive personal portfolio website built with <strong>Node.js</strong>, <strong>Express</strong>, <strong>EJS</strong>, and <strong>MVC Architecture</strong>.<br/>
  Features glassmorphism UI, dynamic typed animations, contact form API, admin dashboard, and MongoDB/JSON dual-database support.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-18.x-339933?style=for-the-badge&logo=node.js&logoColor=white"/>
  <img src="https://img.shields.io/badge/Express-4.x-000000?style=for-the-badge&logo=express&logoColor=white"/>
  <img src="https://img.shields.io/badge/MongoDB-Mongoose-47A248?style=for-the-badge&logo=mongodb&logoColor=white"/>
  <img src="https://img.shields.io/badge/EJS-Template-B4CA65?style=for-the-badge&logo=ejs&logoColor=black"/>
  <img src="https://img.shields.io/badge/Deployed-Render-46E3B7?style=for-the-badge&logo=render&logoColor=white"/>
</p>

<p align="center">
  <a href="https://github.com/ShubhamKumar968/Portfolio_Project"><strong>📁 GitHub Repo</strong></a> •
  <a href="https://www.linkedin.com/in/shubham-kumar-40518828a/"><strong>💼 LinkedIn</strong></a> •
  <a href="https://codolio.com/profile/shubham@9"><strong>🏆 Codolio</strong></a>
</p>

---

## 📋 Table of Contents

- [About The Project](#-about-the-project)
- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [🗂️ Project Structure](#️-project-structure)
- [⚙️ Getting Started](#️-getting-started)
- [🌐 API Endpoints](#-api-endpoints)
- [🗄️ Database](#️-database)
- [🚀 Deployment (Render)](#-deployment-render)
- [📸 Sections Overview](#-sections-overview)
- [🔗 Connect with Me](#-connect-with-me)

---

## 📌 About The Project

This is a **full-stack personal portfolio website** for **Shubham Kumar**, a pre-final year B.Tech CSE student at **NIT Patna** (CGPA: 9.25). The project showcases skills, projects, achievements, education, and services through a beautifully designed, animated, and responsive UI.

Built from scratch using the **MVC (Model-View-Controller)** architecture, it separates concerns cleanly between data, business logic, and presentation — making it scalable, maintainable, and production-ready.

> 🔄 **Smart Database Fallback**: The app works even without MongoDB — it automatically falls back to a local JSON-file storage engine (`/data` directory), making it zero-config for local development.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🎨 **Glassmorphism UI** | Modern glass-effect cards with blur, gradients, and depth |
| ⌨️ **Typed.js Animation** | Dynamic text typing effect in the hero section |
| 📱 **Fully Responsive** | Mobile-first design — works on all screen sizes |
| 📬 **Contact Form API** | REST API endpoint that saves messages to MongoDB or JSON |
| 🛡️ **Admin Dashboard** | View all submitted contact messages at `/admin` |
| 🔄 **Dual DB Support** | Uses MongoDB Atlas if available, falls back to local JSON files |
| 🗂️ **MVC Architecture** | Clean separation of Models, Views, and Controllers |
| 🌐 **REST API** | JSON API endpoint at `/api/portfolio` |
| 🚀 **Render Deployed** | Production-ready with `render.yaml` configuration |
| 🔒 **Env-based Config** | Secret credentials managed via `.env` (never committed) |
| ♻️ **Port Auto-fallback** | Automatically tries next port if current is in use |

---

## 🛠️ Tech Stack

### Backend
| Technology | Version | Purpose |
|---|---|---|
| **Node.js** | 18.x | Runtime environment |
| **Express.js** | ^4.21.2 | Web framework & routing |
| **Mongoose** | ^8.8.4 | MongoDB ODM |
| **dotenv** | ^16.4.5 | Environment variable management |
| **cors** | ^2.8.5 | Cross-Origin Resource Sharing |
| **nodemon** | ^3.1.0 | Dev auto-restart (devDependency) |

### Frontend / Templating
| Technology | Purpose |
|---|---|
| **EJS** (Embedded JavaScript) | Server-side HTML templating engine |
| **Vanilla CSS3** | Custom styling, animations, glassmorphism |
| **Font Awesome 6** | Icon library (CDN) |
| **Typed.js** | Typewriter animation effect |
| **jQuery** | DOM utilities |

### Database
| Mode | Technology | When Used |
|---|---|---|
| **Primary** | MongoDB Atlas (Mongoose) | When `MONGO_URI` is set in `.env` |
| **Fallback** | Local JSON files (`/data/*.json`) | When MongoDB is unavailable |

### DevOps / Deployment
| Tool | Purpose |
|---|---|
| **Render** | Cloud deployment platform |
| **render.yaml** | Infrastructure-as-Code for Render |
| **Git + GitHub** | Version control |
| **.gitignore** | Excludes `node_modules/`, `.env` |

---

## 🗂️ Project Structure

```
Portfolio_Project/
│
├── 📄 server.js                  # App entry point — Express server setup
├── 📄 package.json               # Dependencies & npm scripts
├── 📄 render.yaml                # Render.com deployment config
├── 📄 .env.example               # Sample environment variables
├── 📄 .gitignore                 # Git ignore rules
│
├── 📁 config/
│   └── db.js                     # MongoDB connection + JSON fallback logic
│
├── 📁 models/                    # Data models (MongoDB schema or JSON CRUD)
│   ├── Project.js                # Project data model
│   ├── Skill.js                  # Skill data model
│   └── Contact.js                # Contact message model
│
├── 📁 controllers/               # Business logic layer
│   ├── portfolioController.js    # Renders home, projects page, portfolio API
│   ├── contactController.js      # Handles contact form submissions
│   └── adminController.js        # Renders admin dashboard with messages
│
├── 📁 routes/                    # Express route definitions
│   ├── portfolioRoutes.js        # GET / | GET /projects | GET /api/portfolio
│   ├── contactRoutes.js          # POST /contact
│   └── adminRoutes.js            # GET /admin
│
├── 📁 views/                     # EJS templates (HTML presentation layer)
│   ├── index.ejs                 # Main portfolio page
│   ├── projectsPage.ejs          # Dedicated projects gallery page
│   ├── admin.ejs                 # Admin dashboard
│   └── partials/                 # Reusable EJS components
│       ├── head.ejs              # <head> meta, CSS links
│       ├── navbar.ejs            # Navigation bar
│       ├── hero.ejs              # Hero / landing section
│       ├── about.ejs             # About me section
│       ├── skills.ejs            # Skills with progress bars
│       ├── projects.ejs          # Project cards
│       ├── achievements.ejs      # Certifications & achievements
│       ├── education.ejs         # Education timeline
│       ├── services.ejs          # Services offered
│       ├── contact.ejs           # Contact form
│       └── footer.ejs            # Footer
│
├── 📁 public/                    # Static assets served directly
│   ├── css/
│   │   ├── style.css             # Main stylesheet (glassmorphism, animations)
│   │   └── admin.css             # Admin dashboard styles
│   ├── js/
│   │   └── main.js               # Client-side JS (scroll, animations, form)
│   └── images/                   # All project/skill/profile images (21 files)
│
└── 📁 data/                      # JSON fallback database (auto-managed)
    ├── projects.json
    ├── skills.json
    └── messages.json
```

---

## ⚙️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v16 or higher
- npm (comes with Node.js)
- MongoDB Atlas URI *(optional — app works without it)*

### 1. Clone the Repository

```bash
git clone https://github.com/ShubhamKumar968/Portfolio_Project.git
cd Portfolio_Project
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

```bash
# Copy the example file
cp .env.example .env
```

Edit `.env` with your values:

```env
PORT=3000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.example.mongodb.net/portfolio_db
```

> ⚠️ **Note**: `MONGO_URI` is optional. If left blank or if MongoDB is unreachable, the app automatically uses local JSON files in the `/data` directory.

### 4. Run the Development Server

```bash
npm run dev        # with auto-restart via nodemon
# OR
npm start          # standard node
```

### 5. Open in Browser

```
http://localhost:3000          → Portfolio Homepage
http://localhost:3000/projects → Full Projects Gallery
http://localhost:3000/admin    → Admin Dashboard (messages)
```

---

## 🌐 API Endpoints

| Method | Route | Description |
|---|---|---|
| `GET` | `/` | Renders main portfolio homepage |
| `GET` | `/projects` | Renders full standalone projects page |
| `GET` | `/api/portfolio` | Returns portfolio data as JSON |
| `POST` | `/contact` | Submits contact form (saves to DB/JSON) |
| `GET` | `/admin` | Renders admin dashboard with all messages |

### Sample API Response — `GET /api/portfolio`

```json
{
  "status": "success",
  "projects": [...],
  "skills": [...]
}
```

---

## 🗄️ Database

The application uses a **smart dual-database strategy**:

```
MongoDB Atlas connected?
        │
   YES  ├──→ Use Mongoose models (production)
        │
   NO   └──→ Fallback to /data/*.json files (development/offline)
```

- **`data/projects.json`** — Stores all project entries
- **`data/skills.json`** — Stores all skill entries with logos
- **`data/messages.json`** — Stores contact form submissions

The JSON files are auto-initialized with seed data on first run, so **no manual database setup is required**.

---

## 🚀 Deployment (Render)

This project is pre-configured for **[Render](https://render.com/)** via `render.yaml`.

### Steps to Deploy

1. Push your code to GitHub
2. Go to [render.com](https://render.com) → **New Web Service**
3. Connect your GitHub repository: `ShubhamKumar968/Portfolio_Project`
4. Render auto-detects `render.yaml` — no manual config needed
5. Add your environment variable in Render dashboard:
   - **Key**: `MONGO_URI`
   - **Value**: Your MongoDB Atlas connection string

### render.yaml Configuration

```yaml
services:
  - type: web
    name: portfolio-shubham
    env: node
    plan: free
    buildCommand: npm install
    startCommand: npm start
    envVars:
      - key: PORT
        value: 10000
      - key: NODE_ENV
        value: production
      - key: MONGO_URI
        sync: false        # Set this manually in Render dashboard
```

> 💡 **Tip**: Even on Render's free tier, the app works without MongoDB — JSON fallback keeps it fully functional.

---

## 📸 Sections Overview

| Section | Description |
|---|---|
| **Hero** | Animated intro with profile photo, typed role text, social links & resume button |
| **About** | Personal bio, CGPA, location, phone, email with animated skill highlights |
| **Skills** | Categorized skills grid with logo images and animated progress bars |
| **Projects** | Featured project cards with tags, live demo & GitHub links |
| **Achievements** | Certifications from NPTEL, Oracle, IBM, Shell, TCS with certificate links |
| **Education** | Academic timeline — NIT Patna B.Tech, JEE, 12th & 10th |
| **Services** | Services offered: Web Dev, Software Solutions, AI & Smart Systems |
| **Contact** | Contact form with REST API submission + Google Maps location embed |

---

## 🔗 Connect with Me

<p>
  <a href="https://www.linkedin.com/in/shubham-kumar-40518828a/">
    <img src="https://img.shields.io/badge/LinkedIn-Shubham_Kumar-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"/>
  </a>
  <a href="https://github.com/ShubhamKumar968/">
    <img src="https://img.shields.io/badge/GitHub-ShubhamKumar968-181717?style=for-the-badge&logo=github&logoColor=white"/>
  </a>
  <a href="https://x.com/shubhamkgr06">
    <img src="https://img.shields.io/badge/Twitter-shubhamkgr06-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white"/>
  </a>
  <a href="https://codolio.com/profile/shubham@9">
    <img src="https://img.shields.io/badge/Codolio-shubham@9-FF6B35?style=for-the-badge&logoColor=white"/>
  </a>
  <a href="mailto:shubhamkgr06@gmail.com">
    <img src="https://img.shields.io/badge/Email-shubhamkgr06@gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white"/>
  </a>
</p>

---

## 📄 License

This project is licensed under the **ISC License** — feel free to use it as a reference or template for your own portfolio.

---

<p align="center">Made with ❤️ by <strong>Shubham Kumar</strong> | NIT Patna, B.Tech CSE</p>
