const CandidateProfile= require('../models/candidateprofilemodel')
const setupprofile = async (req, res) => {
    try {
        const { name, affiliation, electoralconstituency, agenda } = req.body;
        const uid = req.user.uid;
        const newCandidate = new CandidateProfile({
            uid,
            name,
            affiliation,
            electoralconstituency,
            agenda
        });
        const savedCandidate = await newCandidate.save();

        res.status(201).json({
            message: 'Candidate profile created successfully!',
            data: savedCandidate
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error while creating candidate profile.' });
    }
};

module.exports = { setupprofile };