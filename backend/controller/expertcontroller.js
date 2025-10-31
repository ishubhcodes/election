const CandidateProfile= require('../models/candidateprofilemodel')
const fetchprofiles = async (req, res) => {
  try {
        const candidates = await CandidateProfile.find(); // fetch all documents
        res.status(200).json(candidates);
    } catch (error) {
        console.error('Error fetching candidate profiles:', error);
        res.status(500).json({ error: 'Failed to fetch candidate profiles.' });
    }
};

module.exports = { fetchprofiles };