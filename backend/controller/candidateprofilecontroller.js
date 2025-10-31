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

const edit = async (req, res) => {
    try {
        const {uid, affiliation, agenda } = req.body;
        // const uid = req.user.uid;
        const updatedProfile = await CandidateProfile.findOneAndUpdate(
            {uid: uid},
            { affiliation: affiliation },
            { agenda: agenda },
            {status: "Pending"}
        );
        const savedCandidate = await updatedProfile.save();

        res.status(201).json({
            message: 'Candidate profile updated successfully!',
            data: savedCandidate
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error while creating candidate profile.' });
    }
};


module.exports = { setupprofile, edit };