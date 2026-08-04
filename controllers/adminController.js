const Contact = require('../models/Contact');
const { getIsMongoConnected } = require('../config/db');

exports.renderAdminDashboard = async (req, res) => {
  try {
    const messages = await Contact.getAll();
    const isMongo = getIsMongoConnected();
    res.render('admin', {
      messages,
      isMongo,
      totalMessages: messages.length
    });
  } catch (err) {
    console.error('Error rendering admin dashboard:', err);
    res.status(500).send('Server error rendering admin dashboard');
  }
};
