const express = require('express');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

const { connectDB } = require('./config/db');

// Import Routes
const portfolioRoutes = require('./routes/portfolioRoutes');
const contactRoutes = require('./routes/contactRoutes');
const adminRoutes = require('./routes/adminRoutes');

const app = express();
let PORT = process.env.PORT || 3000;

// Connect to Database (MongoDB with JSON fallback)
connectDB();

// View Engine Setup (EJS)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static assets from 'public' folder and root folder for legacy images
app.use(express.static(path.join(__dirname, 'public')));

// Mount Routes (MVC Pattern)
app.use('/', portfolioRoutes);
app.use('/', contactRoutes);
app.use('/', adminRoutes);

// 404 Error Handler
app.use((req, res) => {
  res.status(404).render('index', {
    profile: {
      name: "Shubham Kumar",
      title: "Aspiring Software Engineer",
      bio: "Page not found",
      cgpa: "9.31",
      location: "Sasaram, Bihar, India",
      email: "shubhamkgr06@gmail.com",
      resumeUrl: "#",
      socialLinks: { linkedin: "#", github: "#", codolio: "#" }
    },
    projects: [],
    skills: [],
    achievements: [],
    education: [],
    services: []
  });
});

// Function to start server with fallback if port is in use
const startServer = (portToUse) => {
  const server = app.listen(portToUse, () => {
    console.log(`====================================================`);
    console.log(`🚀 Portfolio MVC Server running on http://localhost:${portToUse}`);
    console.log(`🔒 Admin Dashboard available on http://localhost:${portToUse}/admin`);
    console.log(`====================================================`);
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`⚠️ Port ${portToUse} is in use. Retrying on port ${Number(portToUse) + 1}...`);
      startServer(Number(portToUse) + 1);
    } else {
      console.error('Server error:', err);
    }
  });
};

startServer(PORT);
