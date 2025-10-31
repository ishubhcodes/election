const express = require('express');
const {signup}=require('../controller/CandidateController');
const {setupprofile} = require('../controller/candidateprofilecontroller');
const {edit} = require('../controller/candidateprofilecontroller');
const {login}=require('../controller/loginContoller');

const router = express.Router();

router.use(express.json());

router.post('/signup', signup);
router.post('/setupprofile', setupprofile);
router.post('/login',login)
router.post('/edit', edit)

module.exports = router;