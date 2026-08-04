const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const { getIsMongoConnected, dataDir } = require('../config/db');

// Mongoose Schema
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const ContactModel = mongoose.model('Contact', contactSchema);

const messagesFilePath = path.join(dataDir, 'messages.json');

// Helper to read local JSON messages
const readLocalMessages = () => {
  if (!fs.existsSync(messagesFilePath)) {
    fs.writeFileSync(messagesFilePath, JSON.stringify([]), 'utf8');
    return [];
  }
  try {
    const raw = fs.readFileSync(messagesFilePath, 'utf8');
    return JSON.parse(raw);
  } catch (e) {
    return [];
  }
};

// Helper to write local JSON messages
const writeLocalMessages = (messages) => {
  fs.writeFileSync(messagesFilePath, JSON.stringify(messages, null, 2), 'utf8');
};

class Contact {
  static async create(data) {
    if (getIsMongoConnected()) {
      const newContact = new ContactModel(data);
      return await newContact.save();
    } else {
      const messages = readLocalMessages();
      const newMsg = {
        id: Date.now().toString(),
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
        createdAt: new Date().toISOString()
      };
      messages.unshift(newMsg);
      writeLocalMessages(messages);
      return newMsg;
    }
  }

  static async getAll() {
    if (getIsMongoConnected()) {
      return await ContactModel.find().sort({ createdAt: -1 });
    } else {
      return readLocalMessages();
    }
  }

  static async deleteById(id) {
    if (getIsMongoConnected()) {
      return await ContactModel.findByIdAndDelete(id);
    } else {
      let messages = readLocalMessages();
      messages = messages.filter(msg => msg.id !== id);
      writeLocalMessages(messages);
      return true;
    }
  }
}

module.exports = Contact;
