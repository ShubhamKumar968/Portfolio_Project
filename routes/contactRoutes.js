const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

router.post('/api/contact', contactController.submitContactForm);
router.get('/api/messages', contactController.getMessages);
router.delete('/api/messages/:id', contactController.deleteMessage);

module.exports = router;
