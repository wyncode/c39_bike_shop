const passport = require('passport'),
  jwtStrategy = require('passport-jwt').Strategy,
  Cyclist = require('../../db/models/user'),
  ExtractJwt = require('passport-jwt').ExtractJwt;

//JWT Strategy

let jwtOptions = {
  jwtFromRequest: (req) => {
    return req?.cookies?.jwt || ExtractJwt.fromAuthHeaderWithScheme('jwt')(req);
  },
  secretOrKey: process.env.JWT_SECRET
};

passport.use(
  'jwt',
  new jwtStrategy(jwtOptions, async (jwtPayload, done) => {
    if (Date.now() > jwtPayload.expires) {
      return done(null, false, { message: 'jwt expired' });
    }
    let { iat, exp, ...cyclistData } = jwtPayload;
    cyclistData = await cyclistData.findById(cyclistData._id);
    return done(null, cyclistData);
  })
);

module.exports = passport;
