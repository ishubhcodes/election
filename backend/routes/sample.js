const express = require('express');
const router = express.Router();
const upload = require('../config/multerConfig'); 
const { createPost } = require('../controller/sample');

// POST /api/posts
router.post('/', upload.single('image'), createPost);

module.exports = router;
