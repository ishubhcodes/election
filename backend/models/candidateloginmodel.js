const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const candidateloginschema = new mongoose.Schema({
    uid: {
        type: String,
        unique: true,
        required: true,
        default: uuidv4
    },
    phone_number: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    }
    
})

module.exports = mongoose.model('CandidateLogin', candidateloginschema);