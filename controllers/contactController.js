const Contact = require('../models/Contact');

// Handle submission of contact form
exports.submitContactForm = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Basic Validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please complete all required fields (Name, Email, Subject, Message).'
      });
    }

    // Simple email regex check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address.'
      });
    }

    const savedMessage = await Contact.create({
      name: name.trim(),
      email: email.trim(),
      subject: subject.trim(),
      message: message.trim()
    });

    return res.status(201).json({
      success: true,
      message: 'Thank you! Your message has been received successfully. I will get back to you soon!',
      data: savedMessage
    });
  } catch (err) {
    console.error('Contact submission error:', err);
    return res.status(500).json({
      success: false,
      message: 'An error occurred while sending your message. Please try again later.'
    });
  }
};

// Retrieve messages (API for admin / dashboard)
exports.getMessages = async (req, res) => {
  try {
    const messages = await Contact.getAll();
    return res.json({
      success: true,
      count: messages.length,
      data: messages
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message
    });
  }
};

// Delete a message
exports.deleteMessage = async (req, res) => {
  try {
    const { id } = req.params;
    await Contact.deleteById(id);
    return res.json({
      success: true,
      message: 'Message deleted successfully.'
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message
    });
  }
};
