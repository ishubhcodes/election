const mongoose = require('mongoose');

const SymbolSchema = new mongoose.Schema({
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

const candidateSymbolSchema = new mongoose.Schema({
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
  images: [SymbolSchema]
}, {
  timestamps: true
});

module.exports = mongoose.model('CandidateSymbol', candidateSymbolSchema)