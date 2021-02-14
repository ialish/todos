const express = require('express');
const router = express.Router();

const userController = require('../controllers/user');

router.route('/').post(userController.saveNotes);
router.route('/:username').get(userController.loadNotes);

module.exports = router;
