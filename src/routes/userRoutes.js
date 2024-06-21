const express = require('express');
const router = express.Router();
const userController = require("../controllers/constrolerCheck.js"); // Ensure this path is correct
const authMiddleware = require("../middleware/middlerwareCheck.js")
router.get('/',authMiddleware.welcome, userController.getUsers);


module.exports = router;
