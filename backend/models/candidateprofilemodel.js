const mongoose = require('mongoose');

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
    }
}
)

module.exports = mongoose.model('CandidateProfile', candidateProfileSchema);