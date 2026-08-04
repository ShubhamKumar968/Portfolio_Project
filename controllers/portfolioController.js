const Project = require('../models/Project');
const Skill = require('../models/Skill');

// Render main portfolio homepage
exports.renderHome = async (req, res) => {
  try {
    const projects = await Project.getAll();
    const skills = await Skill.getAll();

    const profileData = {
      name: "Shubham Kumar",
      title: "Aspiring Software Engineer & Web Developer",
      bio: "Pre-final year Computer Science & Engineering student at the National Institute of Technology, Patna (NIT Patna). Passionate about building robust software, web platforms, and exploring cutting-edge tech solutions.",
      cgpa: "9.25 (Cumulative up to 6th Semester)",
      location: "Sasaram, Bihar, India",
      phone: "+91 9682974910",
      email: "shubhamkgr06@gmail.com",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Sasaram,+Bihar,+India",
      resumeUrl: "https://drive.google.com/file/d/1ArI_yFaVHG70VElvMbz9g0doetmYtBTi/view?usp=drivesdk",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/shubham-kumar-40518828a/",
        github: "https://github.com/ShubhamKumar968/",
        twitter: "https://x.com/shubhamkgr06",
        codolio: "https://codolio.com/profile/shubham@9"
      },
      typedStrings: [
        "Software Engineer",
        "Full Stack Developer",
        "Competitive Programmer",
        "Problem Solver",
        "Tech Enthusiast"
      ]
    };

    const achievements = [
      {
        title: "Human Computer Interaction (HCI) - Elite + Gold",
        organization: "NPTEL / IIT Madras",
        description: "Scored 100% (Elite + Gold Certification) - Placed in Top 1% Nationwide among 23,139 students.",
        image: "images/port4.png",
        link: "https://drive.google.com/file/d/15HYe8xuqxIs2CMx9WRei19fZAVsWcKTC/view?usp=drive_link"
      },
      {
        title: "OCI Foundation Associate in AI",
        organization: "Oracle Cloud Infrastructure",
        description: "Certified Oracle Cloud Infrastructure (OCI) Foundation Associate specializing in Artificial Intelligence concepts, cloud architecture, and ML fundamentals.",
        image: "images/oracle.jpg",
        link: "https://drive.google.com/file/d/1o9VwhcDzibVX4VWNq8qJgFrlcoYSCGnd/view?usp=drive_link"
      },
      {
        title: "IBM SkillsBuild Virtual Internship (6 Weeks)",
        organization: "Edunet Foundation in collaboration with IBM SkillsBuild",
        description: "Completed 6-Week Virtual Internship (May – June 2026) focused on Artificial Intelligence, Cloud Fundamentals, and Emerging Tech.",
        image: "images/ibm.png",
        link: "https://drive.google.com/file/d/1zNd7lAbiXYlelVfu_nQK1uEN_W2dQDRU/view?usp=drive_link"
      },
      {
        title: "Shell AI & Sustainability Virtual Internship (4 Weeks)",
        organization: "Edunet Foundation in collaboration with Shell",
        description: "Completed 4-Week Virtual Internship (August – September 2025) building Artificial Intelligence and Machine Learning solutions for real-world sustainability.",
        image: "images/shell.jpg",
        link: "https://drive.google.com/file/d/1fx7b-1eotzX268qM1VBJ8CT0N8N2I3sn/view?usp=drive_link"
      },
      {
        title: "The Joy of Computing using Python - Elite + Silver",
        organization: "IIT Madras / NPTEL",
        description: "Certified (Elite + Silver) - Placed in Top 5% Nationwide among 11,746 students in Python programming.",
        image: "images/port4.png",
        link: "https://drive.google.com/file/d/1iXSJufQElf7YIOZPYZRzgTGPLuBoo7p6/view?usp=drivesdk"
      },
      {
        title: "TCS iON Young Professional",
        organization: "Tata Consultancy Services",
        description: "Successfully completed professional certification in corporate skills, communication, and workplace fundamentals.",
        image: "images/tcs.jpg",
        link: "https://drive.google.com/file/d/1RI_u2TshTp4tw8PxcvT639BAp3jxM2cq/view?usp=drive_link"
      }
    ];

    const education = [
      {
        degree: "B.Tech in Computer Science & Engineering",
        institution: "National Institute of Technology, Patna (NIT Patna)",
        period: "2023 - Present",
        detail: "Current CGPA: 9.25 (Top academic performance across first 6 semesters)",
        icon: "fa-graduation-cap"
      },
      {
        degree: "JEE Mains & JEE Advanced 2023 Qualified",
        institution: "NTA / NTA-IIT",
        period: "2023",
        detail: "Secured 96 Percentile in JEE Mains and All India Category Rank of 8246 in JEE Advanced.",
        icon: "fa-award"
      },
      {
        degree: "Senior Secondary (12th) & Secondary (10th)",
        institution: "Bihar School Examination Board (BSEB)",
        period: "Completed",
        detail: "Secured 90.6% in Senior Secondary and 90.4% in Secondary Examinations.",
        icon: "fa-school"
      }
    ];

    const services = [
      {
        title: "Web Design & Development",
        icon: "fa-laptop-code",
        description: "Crafting beautiful, responsive, accessible web layouts with seamless UX, smooth animations, and optimized loading speeds."
      },
      {
        title: "Software Solutions",
        icon: "fa-code",
        description: "Solving complex computational problems using efficient data structures, algorithms, and modular object-oriented code."
      },
      {
        title: "AI & Smart Systems",
        icon: "fa-brain",
        description: "Integrating intelligent web tools and automated workflows to solve real-world productivity challenges."
      }
    ];

    res.render('index', {
      profile: profileData,
      projects,
      skills,
      achievements,
      education,
      services
    });
  } catch (err) {
    console.error('Error rendering homepage:', err);
    res.status(500).send('Server Error loading portfolio page');
  }
};

// API endpoint returning portfolio summary JSON
exports.getPortfolioData = async (req, res) => {
  try {
    const projects = await Project.getAll();
    const skills = await Skill.getAll();
    res.json({
      status: "success",
      projects,
      skills
    });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

// Render standalone Projects gallery page (/projects)
exports.renderProjectsPage = async (req, res) => {
  try {
    const projects = await Project.getAll();
    const profileData = {
      name: "Shubham Kumar",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/shubham-kumar-40518828a/",
        github: "https://github.com/ShubhamKumar968/",
        twitter: "https://x.com/shubhamkgr06",
        codolio: "https://codolio.com/profile/shubham@9"
      }
    };
    res.render('projectsPage', {
      profile: profileData,
      projects
    });
  } catch (err) {
    console.error('Error rendering projects page:', err);
    res.status(500).send('Server Error loading projects page');
  }
};
