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

const candidateProfileSchema = new mongoose.Schema({
   uid: {
        type: String,
        required: true,
        ref: 'CandidateLogin',
        unique:true,
    },
    name: {
        type: String,
        required: true,
    },
    affiliation: {
        type: String,
        required: true,
    },
    electoralconstituency: {
        province: {
        type: String,
        },
        district: {
        type: String
        },
        municipality: {
        type: String
        }
    },
    agenda: {
    type: String
    },
    
    status:{
        type:String,
        enum: ['Pending', 'Approved', 'Rejected'],
        default: 'Pending'
    },
    images: [imageSchema],
    symbol:[imageSchema]
}
)

module.exports = mongoose.model('CandidateProfile', candidateProfileSchema);