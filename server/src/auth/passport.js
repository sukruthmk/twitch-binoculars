const { OAuth2Strategy } = require('passport-oauth');
const request = require('request');
const config = require('../configs/auth.config.json');

// Override passport profile function to get user profile from Twitch API
OAuth2Strategy.prototype.userProfile = (accessToken, done) => {
  const options = {
    url: 'https://api.twitch.tv/helix/users',
    method: 'GET',
    headers: {
      'Client-ID': config.TWITCH_CLIENT_ID,
      Accept: 'application/vnd.twitchtv.v5+json',
      Authorization: `Bearer ${accessToken}`,
    },
  };

  request(options, (error, response, body) => {
    if (response && response.statusCode === 200) {
      done(null, JSON.parse(body));
    } else {
      done(JSON.parse(body));
    }
  });
};

module.exports = (passport) => {
  passport.use(
    'twitch',
    new OAuth2Strategy(
      {
        authorizationURL: 'https://id.twitch.tv/oauth2/authorize',
        tokenURL: 'https://id.twitch.tv/oauth2/token',
        clientID: config.TWITCH_CLIENT_ID,
        clientSecret: config.TWITCH_SECRET,
        callbackURL: config.CALLBACK_URL,
        state: true,
      },
      (accessToken, refreshToken, profile, done) => {
        console.log('accessToken', accessToken);
        // eslint-disable-next-line no-param-reassign
        profile.accessToken = accessToken;
        // eslint-disable-next-line no-param-reassign
        profile.refreshToken = refreshToken;

        // Securely store user profile in your DB
        // User.findOrCreate(..., function(err, user) {
        //  done(err, user);
        // });

        done(null, profile);
      },
    ),
  );
};
