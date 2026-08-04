const fs = require('fs');
const path = require('path');
const { dataDir } = require('../config/db');

const projectsFilePath = path.join(dataDir, 'projects.json');

const initialProjects = [
  {
    id: "1",
    title: "Edustack",
    description: "Your ultimate Computer Science hub & educational web portal providing curated syllabus notes, exam prep resources, and study materials for CSE students.",
    image: "images/port1.png",
    tags: ["Node.js", "Express", "JavaScript", "HTML5/CSS3", "Tailwind CSS"],
    link: "https://edustack-web.onrender.com",
    github: "https://github.com/ShubhamKumar968/EduStack--Your-Ultimate-Computer-Science-Hub",
    featured: true
  },
  {
    id: "2",
    title: "My Portfolio",
    description: "A modern, highly responsive personal portfolio website engineered with Node.js, Express, EJS, and MVC Architecture featuring glassmorphism UI & contact APIs.",
    image: "images/port2.png",
    tags: ["MVC Architecture", "Node.js", "Express", "EJS", "JavaScript", "CSS3"],
    link: "https://portfolio-shubham-dybt.onrender.com",
    github: "https://github.com/ShubhamKumar968/Portfolio_Project",
    featured: true
  },
  {
    id: "3",
    title: "Airbnb Clone",
    description: "A full-stack Airbnb-inspired platform with complete CRUD operations, user authentication via Passport.js, cloud image uploads using Cloudinary, interactive maps with Mapbox, and review/rating system.",
    image: "images/airbnb.png",
    tags: ["Node.js", "Express", "MongoDB", "Passport.js", "Cloudinary", "Mapbox"],
    link: "https://github.com/ShubhamKumar968/airBnb_Project",
    github: "https://github.com/ShubhamKumar968/airBnb_Project",
    featured: true
  },
  {
    id: "4",
    title: "Tathya.AI",
    description: "An AI-powered factual analytics and document verification platform that uses machine learning algorithms for real-time data verification and intelligent insights.",
    image: "images/port3.avif",
    tags: ["Node.js", "Python", "Machine Learning", "MongoDB", "AI/ML"],
    link: "https://tathya-frontend.onrender.com/",
    github: "https://github.com/ShubhamKumar968",
    featured: true
  },
  {
    id: "5",
    title: "VahanSetu",
    description: "A smart reverse-auction logistics & vehicular management platform designed to streamline vehicle tracking, service management, and transportation logistics.",
    image: "images/vahansetu.jpg",
    tags: ["Node.js", "MongoDB", "Express", "JavaScript", "Logistics"],
    link: "https://github.com/ShubhamKumar968/VahanSetu---A-Smart-reverse-auction-logistic-platform",
    github: "https://github.com/ShubhamKumar968/VahanSetu---A-Smart-reverse-auction-logistic-platform",
    featured: true
  }
];

const ensureProjectsData = () => {
  if (!fs.existsSync(projectsFilePath)) {
    fs.writeFileSync(projectsFilePath, JSON.stringify(initialProjects, null, 2), 'utf8');
  }
};

class Project {
  static async getAll() {
    ensureProjectsData();
    try {
      const raw = fs.readFileSync(projectsFilePath, 'utf8');
      return JSON.parse(raw);
    } catch (e) {
      return initialProjects;
    }
  }

  static async getById(id) {
    const projects = await this.getAll();
    return projects.find(p => p.id === id);
  }
}

module.exports = Project;
