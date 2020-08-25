const User = require('../models/user')
const jwt = require('jsonwebtoken');

exports.getLogin = (req, res, next) => {
    res.render('auth/login', { title: 'login' });
  }

exports.getRegister = (req, res, next) => {
    res.render('auth/register', { title: 'register' });
  }

const bcrypt = require('bcrypt');
async function register (req, res, next) {
        bcrypt.hash(req.body.password, 10)
          .then(hash => {
            const user = new User({
              email: req.body.email,
              password: hash,
              admin: false,
              username: req.body.username
            });
            user.save()
              .then(() => res.status(201).json({
                userId: user._id,
                username: user.username,
                admin: user.admin,
                token: jwt.sign(
                  { userId: user._id },
                  'RANDOM_TOKEN_SECRET',
                  { expiresIn: '24h' }
                )
              }))
              .catch(error => res.status(400).json({ error }));
          })
          .catch(error => res.status(500).json({ error }));
};

async function login (req, res, next) {
    User.findOne({ email: req.body.email })
      .then(user => {
        if (!user) {
          return res.status(401).json({ error: 'Utilisateur non trouvé !' });
        }
        bcrypt.compare(req.body.password, user.password)
          .then(valid => {
            if (!valid) {
              return res.status(401).json({ error: 'Mot de passe incorrect !' });
            }
            res.status(200).json({
              userId: user._id,
              username: user.username,
              admin: user.admin,
              token: jwt.sign(
                { userId: user._id },
                'RANDOM_TOKEN_SECRET',
                { expiresIn: '24h' }
              )
            });
            let headers = new Headers();
            headers.append("Authorization","Beared "+ token);
            this.http.post(AUTHENTICATION_ENDPOINT + "?grant_type=password&scope=trust&username=" + login + "&password=" + password, null, {headers: headers}).subscribe(response => {
              console.log(response);
            });
          })
          // .catch(error => res.status(500).json({ error }));
      })
      .catch(error => res.status(500).json({ error }));
};

async function getLastUser(req, res, next) {
  User.find()
    .sort({_id: -1})
    .limit(10)
    .then(user => {
      if (!user) {
        return res.status(401).json({ error: 'No user !' });
      }
      res.status(201).json({ user });
    })
    .catch(error => res.status(500).json({ error }));
};

exports.login = login;
exports.register = register;
exports.getLastUser = getLastUser;