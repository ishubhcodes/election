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
const verify = async (req, res) => {
  try {
        const { uid } = req.body;

        // Find the candidate by uid and update status
        const updatedProfile = await CandidateProfile.findOneAndUpdate(
            { uid: uid },
            { status: 'Approved' },
        );

        if (!updatedProfile) {
            return res.status(404).json({ message: 'Candidate not found' });
        }

        res.status(200).json({
            message: 'Candidate profile approved successfully!'
        });
    } catch (error) {
        console.error('Error updating candidate status:', error);
        res.status(500).json({ error: 'Server error while updating candidate status.' });
    }
};

const reject = async (req, res) => {
    try {
        const { uid } = req.body;

        if (!uid) {
            return res.status(400).json({ error: 'UID is required' });
        }

        const deletedProfile = await CandidateProfile.findOneAndDelete({ uid });

        if (!deletedProfile) {
            return res.status(404).json({ message: 'Candidate not found' });
        }

        res.status(200).json({
            message: 'Candidate profile rejected and deleted successfully'
        });
    } catch (error) {
        console.error('Error deleting candidate profile:', error);
        res.status(500).json({ error: 'Server error while deleting candidate profile.' });
    }
};

module.exports = { fetchprofiles, verify ,reject};