const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: true
  },
  cloudinaryId: {
    type: String,
    required: true
  },
  mimeType: {
    type: String,
    required: true
  },
  uploadedAt: {
    type: Date,
    default: Date.now
  }
});

const candidatePhotoSchema = new mongoose.Schema({
  uid: {
    type: String,
    required: true,
    ref: 'CandidateLogin'
  },
  profileId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'CandidateProfile'
  },
  images: [imageSchema]
}, {
  timestamps: true
});

module.exports = mongoose.model('CandidatePhoto', candidatePhotoSchema)