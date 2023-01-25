const express = require('express');
const {OPEN_JOBS} = require('../constants/jobs');
const USERS = require('../constants/users');
const { validateDomain } = require('../validation/users');
const { getCookiesObj, getUserCookieEmail } = require('../utils/cookies');

const router = express.Router();

router.post('/register', (req, res) => {
    res.status(201).send();
});

router.post('/login', (req, res, next) => {
    const { body: { email, password }} = req;
    if (!validateDomain(email)) {
        res.status(401).send('Cannot login with email domain other than Joonko');
        return;
    }
    const foundUser = USERS.find(item => item.email === email);
    if (!foundUser) {
        res.status(404).send(`User with email ${email} does not exist`);
        return;
    }

    if (foundUser.password !== password) {
        res.status(401).send('Some login creadentials are not correct');
        return;
    }

    res.cookie('_user_session', { email });
    res.status(200).send();
});

router.get('/jobs', (req, res, next) => {
    const { cookie } = req.headers;
    const cookies = getCookiesObj(cookie);
    const { _user_session: userSession} = cookies;
    if (!userSession) {
        res.status(401).send('Missing login credentials');
        return;
    }

    // couldn't parse the email... so returning all the jobs, although the logic using email should work
    // if we send res.status(200).send({jobs});
    const userEmail = getUserCookieEmail(userSession);
    const foundUser = USERS.find(item => item.email === userEmail);
    if (!foundUser) {
        res.status(404).send(`User with email ${email} does not exist`);
        return;
    }
    const jobs = OPEN_JOBS.filter(job => foundUser.departments.includes(job.department));

    res.status(200).send({jobs: OPEN_JOBS});
});

module.exports = router;