const express = require('express');
const {fetchprofiles} = require('../controller/expertcontroller');

const router = express.Router();

router.use(express.json());

router.get('/fetchprofiles', fetchprofiles);

module.exports = router;