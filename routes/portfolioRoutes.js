const express = require('express');
const router = express.Router();
const portfolioController = require('../controllers/portfolioController');

router.get('/', portfolioController.renderHome);
router.get('/projects', portfolioController.renderProjectsPage);
router.get('/api/portfolio', portfolioController.getPortfolioData);

module.exports = router;
