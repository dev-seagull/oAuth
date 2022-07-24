const express = require('express');
const passport = require('passport');
require('./src/auth');

const app = express();

app.get('/', (req, res) => {
    res.send('<a href="/auth/google">Authenticate with Google</a>')
});

app.get('/auth/google', 
passport.authenticate('google', {scope: ['email', 'profile'] })
);

app.get('/google/callback',
  passport.authenticate('google', {
    successRedirect: '/protected',
    failureRedirect: '/auth/failure',
  })
);

app.get('/auth/failure', (req, res) => {
    res.send('Something went wrong!')

});

app.get('/protected', (req, res) => {
    res.send('HELLO');
})
app.listen(5000, () => console.log('Listening on port:5000'));