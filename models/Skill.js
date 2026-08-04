const fs = require('fs');
const path = require('path');
const { dataDir } = require('../config/db');

const skillsFilePath = path.join(dataDir, 'skills.json');

const initialSkills = [
  { name: "Node.js", percent: 85, logo: "images/node.webp", category: "Backend & Servers" },
  { name: "JavaScript (ES6+)", percent: 90, logo: "images/js.jpg", category: "Web Development" },
  { name: "CSS3", percent: 90, logo: "images/css.jpg", category: "Web Development" },
  { name: "HTML5", percent: 95, logo: "images/html.jpg", category: "Web Development" },
  { name: "MongoDB", percent: 80, logo: "images/mongo.jpg", category: "Databases & Storage" },
  { name: "Tailwind CSS", percent: 85, logo: "images/tailwind.webp", category: "Frontend & Styling" },
  { name: "Machine Learning (ML)", percent: 80, logo: "images/ml.jpg", category: "Artificial Intelligence" },
  { name: "C++", percent: 90, logo: "images/cpp.jpg", category: "Core Programming" },
  { name: "C Language", percent: 85, logo: "images/c.png", category: "Core Programming" },
  { name: "Python", percent: 85, logo: "images/python.webp", category: "Core Programming & AI" },
  { name: "SQL & Relational DB", percent: 78, logo: "images/sql.jpg", category: "Databases & Storage" }
];

const ensureSkillsData = () => {
  fs.writeFileSync(skillsFilePath, JSON.stringify(initialSkills, null, 2), 'utf8');
};

class Skill {
  static async getAll() {
    ensureSkillsData();
    try {
      const raw = fs.readFileSync(skillsFilePath, 'utf8');
      return JSON.parse(raw);
    } catch (e) {
      return initialSkills;
    }
  }
}

module.exports = Skill;
