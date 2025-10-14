const bcrypt = require('bcrypt');
const db = require('../config/db');
const { generateToken } = require('../utils/jwtUtils');

const registerUser = (req, res) => {
  const { name, email, password, role } = req.body;
  if (!name || !email || !password) return res.status(400).json({ message: 'All fields required' });

  db.get('SELECT * FROM users WHERE email = ?', [email], async (err, row) => {
    if (err) return res.status(500).json({ message: err.message });
    if (row) return res.status(400).json({ message: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    db.run('INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)',
      [name, email, hashedPassword, role || 'User'], function(err) {
        if (err) return res.status(500).json({ message: err.message });
        const user = { id: this.lastID, name, email, role: role || 'User' };
        const token = generateToken(user);
        res.status(201).json({ user, token });
      });
  });
};

const loginUser = (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ message: 'All fields required' });

  db.get('SELECT * FROM users WHERE email = ?', [email], async (err, user) => {
    if (err) return res.status(500).json({ message: err.message });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ message: 'Invalid credentials' });

    const token = generateToken(user);
    res.status(200).json({ user: { id: user.id, name: user.name, email: user.email, role: user.role }, token });
  });
};

module.exports = { registerUser, loginUser };
