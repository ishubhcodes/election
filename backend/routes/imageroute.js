const express = require('express');
const router = express.Router();
const upload = require('../config/multerConfig');
const Profile = require('../models/candidateprofilemodel');
const { authenticateToken } = require('../middleware/authorization');

router.post(
  '/upload',
  authenticateToken,
  upload.fields([
    { name: 'photo', maxCount: 1 },
    { name: 'symbol', maxCount: 1 }
  ]),
  async (req, res) => {
    try {
      const uid = req.user.uid;

      if (!req.files || (!req.files.photo && !req.files.symbol)) {
        return res.status(400).json({ error: 'No files uploaded' });
      }

      const photoFile = req.files.photo ? req.files.photo[0] : null;
      const symbolFile = req.files.symbol ? req.files.symbol[0] : null;

      const updateData = {};
      if (photoFile) updateData.images = photoFile.path;
      if (symbolFile) updateData.symbol = symbolFile.path;

      const profile = await Profile.findOneAndUpdate(
        { uid },
        updateData,
        { new: true, runValidators: true }
      );

      if (!profile) {
        return res.status(404).json({ error: 'Profile not found' });
      }

      res.status(200).json({
        success: true,
        message: 'Photo and symbol uploaded successfully',
        profile,
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Upload failed' });
    }
  }
);

module.exports = router;

