const express = require('express');
const pageController = require('../controllers/pageController');

const router = express.Router();

router.route('/').get(pageController.getIndexPage);
router.route('/info').get(pageController.getInfoPage);
router.route('/books').post(pageController.addBook);
router.route('/getBook').post(pageController.getBook);

module.exports = router;