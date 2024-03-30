const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/User');

// User login
router.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
}));

// User signup
router.post('/signup', (req, res) => {
    const { username, email, password } = req.body;
    const newUser = new User({ username, email, password });
    newUser.save()
        .then(user => {
            req.login(user, err => {
                if (err) return next(err);
                res.redirect('/');
            });
        })
        .catch(err => console.error('Error signing up user:', err));
});

// User logout
router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

module.exports = router;
