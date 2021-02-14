const User = require('../models/user');

const saveNotes = (req, res) => {
  const { username, notes } = req.body;

  User.updateOne({ username }, { $set: { notes } }, (err) => {
    if (err) throw err;
    res.json({ message: 'Saved successfully' });
  });
};

const loadNotes = (req, res) => {
  const { username } = req.params;

  User.findOne({ username }, (err, user) => {
    if (err) throw err;
    res.json(user.notes);
  });
};

module.exports = {
  saveNotes,
  loadNotes,
};
