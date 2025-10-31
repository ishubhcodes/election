const express = require('express');
const upload = require('../config/multerConfig');
const router = express.Router();
const {
  uploadImages,
  getImages,
} = require('../controller/imageController');
const {authenticateToken} = require('../middleware/authorization');

router.post('/upload',
    authenticateToken,
    upload.fields([
        {name: 'photo', maxCount: 1},
        {name: 'symbol', maxCount: 1}
    ]),
    uploadImages);
router.get('/get-picture', authenticateToken, getImages);

module.exports = router;
