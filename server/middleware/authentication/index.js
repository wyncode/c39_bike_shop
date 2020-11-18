const passport = require('passport'),
  JwtStrategy = require('passport-jwt').Strategy,
  Cyclist = require('../../db/models/cyclist'),
  Bikeshop = require('../../db/models/bikeshop'),
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
  new JwtStrategy(jwtOptions, async (jwtPayload, done) => {
    if (Date.now() > jwtPayload.expires) {
      return done(null, false, { message: 'jwt expired' });
    }
    let { iat, exp, ...data } = jwtPayload;
    const cyclist = await Cyclist.findById(data._id);
    const bikeshop = await Bikeshop.findById(data._id);
    if (!cyclist) {
      data = bikeshop;
    } else {
      data = cyclist;
    }
    return done(null, data);
  })
);

module.exports = passport;
