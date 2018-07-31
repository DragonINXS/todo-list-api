const LocalStrategy = require('passport-local').Strategy;
const User          = require('../models/user');
const bcrypt        = require('bcryptjs');

module.exports = function (passport) {  //<----- same as exporting at bottom

    passport.use(new LocalStrategy((username, password, next) => {
        User.findOne({ username }, (err, foundUser) => {
            if (err) {
                next(err);
                return;
            }

            // if no user found
            if (!foundUser) {
                next(null, false, { message: 'Incorrect username' });
                return;
            }

            // if incorrect password
            if (!bcrypt.compareSync(password, foundUser.password)) {
                next(null, false, { message: 'Incorrect password' });
                return;
            }

            next(null, foundUser);
        });
    }));

    passport.serializeUser((loggedInUser, cb) => {
        cb(null, loggedInUser._id);
    });

    passport.deserializeUser((userIdFromSession, cb) => {
        User.findById(userIdFromSession, (err, userDocument) => {
            if (err) {
                cb(err);
                return;
            }

            cb(null, userDocument);
        });
    });

};