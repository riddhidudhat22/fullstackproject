const passport = require('passport');
const Users = require('../model/users.model');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const goggleprovider = async () => {
    await passport.use(new GoogleStrategy({
        clientID: "",
        clientSecret: "",
        callbackURL: "http://localhost:8000/api/v1/users/google/callback"
    },
        async function (accessToken, refreshToken, profile, cb) {
            console.log(profile);
            try {
                const user = await Users.findOne({ googleId: profile.id })
                console.log(user);
                if (!user) {
                    user = await Users.create({
                        name: profile.displayName,
                        email: profile.emails[0].value,
                        googleId: profile.id,
                        role: 'user'
                    })

                }
                return cb(null, user);
            } catch (error) {
                return cb(error, null);
            }

        }


    ));
    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(async function (id, done) {
        const user = await Users.findOne({ _id: id })

        // done(err, user);

        // await Users.findOne(id, function (err, user) {
        //     done(err, user);
        // });
    });
}

// const fecebookprovider=async()=>{
//     passport.use(new FacebookStrategy({
//         clientID: FACEBOOK_APP_ID,
//         clientSecret: FACEBOOK_APP_SECRET,
//         callbackURL: "http://localhost:3000/auth/facebook/callback"
//       },
//     //   async function(accessToken, refreshToken, profile, cb) {
//     //    await Users.findOrCreate({ facebookId: profile.id }, function (err, user) {
//     //       return cb(err, user);
//     //     });
//     //   }
//     ));
// }
module.exports ={
    goggleprovider,
    // fecebookprovider
} 