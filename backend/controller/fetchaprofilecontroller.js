const CandidateProfile= require('../models/candidateprofilemodel')
const fetchaprofile = async (req, res) => {
  try {
        const { uid } = req.body;

         const profile = await CandidateProfile.findOne({ uid });

        res.status(200).json({
            message: 'Candidate profile retrieved successfully!',
            data: profile
        });
    } catch (error) {
        console.error('Error updating candidate status:', error);
        res.status(500).json({ error: 'Server error while updating candidate status.' });
    }
};

module.exports = { fetchaprofile};