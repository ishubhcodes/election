const express = require('express');
const {fetchprofiles, verify, reject} = require('../controller/expertcontroller');
const { fetchaprofile } = require('../controller/fetchaprofilecontroller');

const router = express.Router();

router.use(express.json());

router.get('/fetchprofiles', fetchprofiles);
router.post('/verify', verify)
router.post('/reject', reject)
router.get('/fetchaprofile', fetchaprofile)

module.exports = router;