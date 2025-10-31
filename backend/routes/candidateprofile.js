const express = require('express');
const {setupprofile} = require('../controller/candidateprofilecontroller');

const router = express.Router();

router.use(express.json());

router.post('/setupprofile', setupprofile);

module.exports = router;