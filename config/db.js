const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');

// Ensure data directory exists for JSON fallback DB
const dataDir = path.join(__dirname, '..', 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

let isMongoConnected = false;

const connectDB = async () => {
  const mongoURI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/portfolio_db';
  try {
    // Set connection timeout to prevent long hanging if MongoDB is not installed locally
    await mongoose.connect(mongoURI, {
      serverSelectionTimeoutMS: 2000
    });
    isMongoConnected = true;
    console.log('✅ MongoDB connected successfully!');
  } catch (err) {
    isMongoConnected = false;
    console.log('ℹ️  MongoDB connection bypassed. Using local JSON database storage engine in /data directory.');
  }
};

const getIsMongoConnected = () => isMongoConnected;

module.exports = { connectDB, getIsMongoConnected, dataDir };
