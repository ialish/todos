const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const signup = async (req, res) => {
  const { username, password } = req.body;

  User.findOne({ username }, async (err, matchedUser) => {
    if (err) throw err;

    // Check if username already exists
    if (matchedUser) {
      return res.json({ error: 'This username is already exists' });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const user = new User({ username, hashedPassword });

    user.save((err) => {
      if (err) throw err;
    });

    const accessToken = jwt.sign(
      { username: user.username },
      process.env.ACCESS_TOKEN_SECRET
    );

    return res.json({ accessToken });
  });
};

module.exports = signup;
