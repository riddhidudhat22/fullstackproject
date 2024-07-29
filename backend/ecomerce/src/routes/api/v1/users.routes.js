const express = require('express');
const { userscontroler } = require('../../../controler');
const passport = require('passport');


const router = express.Router()

router.post('/ragisterusers',
    userscontroler.ragister
);

router.post('/loginusers',
    userscontroler.login
);

router.post('/genrateNewToken',
    userscontroler.newtoken
);

router.post('/logout',
    userscontroler.logout
);

router.get('/   ',
    passport.authenticate('google', { scope: ['profile', 'email'] }));



router.get('/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    function (req, res) {
        console.log("login success.....");
        // Successful authentication, redirect home.
        res.send('<h1>okkkk</h1>')
    });

    router.get('/facebooklogin',
        passport.authenticate('facebook'));

    router.get('/facebook/callback',
        passport.authenticate('facebook', { failureRedirect: '/login' }),
        function (req, res) {
            console.log("Login success.....");
            res.send('<h1>Facebook Login successful</h1>');
        });


     
          
module.exports = router;

// http://localhost:8000/api/v1/users/facebooklogin
