// controller/imageController.js
const Profile = require('../models/candidateprofilemodel');

const uploadImages = async (req, res) => {
  try {
    const uid = req.user.uid;
    const { profileId } = req.body;

    console.log('Called Upload Photo for UID:', uid);

    if (!uid || !profileId) {
      return res.status(400).json({ error: 'uid and profileId are required' });
    }

    if (!req.files || (!req.files.photo && !req.files.symbol)) {
      return res.status(400).json({ error: 'No files uploaded' });
    }

    // Build helper function to format images
    const formatImages = files =>
      files.map(file => ({
        imageUrl: file.path,
        cloudinaryId: file.filename,
        mimeType: file.mimetype,
        uploadedAt: new Date(),
      }));

    // Find candidate profile
    let profile = await Profile.findOne({ uid, _id: profileId });

    if (!profile) {
      return res.status(404).json({ error: 'Candidate profile not found' });
    }

    // Add profile photo if provided
    if (req.files.photo && req.files.photo.length > 0) {
      profile.images.push(...formatImages(req.files.photo));
    }

    // Add symbol if provided
    if (req.files.symbol && req.files.symbol.length > 0) {
      profile.symbol.push(...formatImages(req.files.symbol));
    }

    await profile.save();

    res.status(201).json({
      success: true,
      message: 'Images uploaded successfully!',
      data: profile,
    });
  } catch (err) {
    console.error('Upload error:', err);
    res.status(500).json({ error: 'Image upload failed' });
  }
};

const getImages = async (req, res) => {
  try {
    const uid = req.user.uid;
    const profile = await Profile.findOne({ uid });

    if (!profile) {
      return res.status(404).json({ message: 'No profile found for this user.' });
    }

    res.status(200).json({
      success: true,
      images: profile.images,
      symbol: profile.symbol,
    });
  } catch (error) {
    console.error(`Error fetching images for user ${req.user.uid}:`, error);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};

module.exports = { uploadImages, getImages };
