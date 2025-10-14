const db = require('../config/db');

// Create Task
const createTask = (req, res) => {
  const { title, description } = req.body;
  const userId = req.user.id;
  if (!title) return res.status(400).json({ message: 'Title is required' });

  db.run(
    'INSERT INTO tasks (title, description, userId) VALUES (?, ?, ?)',
    [title, description, userId],
    function(err) {
      if (err) return res.status(500).json({ message: err.message });
      res.status(201).json({ id: this.lastID, title, description, userId });
    }
  );
};

// Get All Tasks (for logged in user)
const getTasks = (req, res) => {
  const userId = req.user.id;
  db.all('SELECT * FROM tasks WHERE userId = ?', [userId], (err, rows) => {
    if (err) return res.status(500).json({ message: err.message });
    res.status(200).json(rows);
  });
};

// Update Task
const updateTask = (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

  db.run(
    'UPDATE tasks SET title = ?, description = ? WHERE id = ? AND userId = ?',
    [title, description, id, req.user.id],
    function(err) {
      if (err) return res.status(500).json({ message: err.message });
      if (this.changes === 0) return res.status(404).json({ message: 'Task not found' });

      // Fetch the updated task to return
      db.get('SELECT * FROM tasks WHERE id = ?', [id], (err, row) => {
        if (err) return res.status(500).json({ message: err.message });
        res.status(200).json(row);
      });
    }
  );
};

// Delete Task
const deleteTask = (req, res) => {
  const { id } = req.params;
  db.run(
    'DELETE FROM tasks WHERE id = ? AND userId = ?',
    [id, req.user.id],
    function(err) {
      if (err) return res.status(500).json({ message: err.message });
      if (this.changes === 0) return res.status(404).json({ message: 'Task not found or unauthorized' });
      res.status(200).json({ message: 'Task deleted successfully' });
    }
  );
};

module.exports = { createTask, getTasks, updateTask, deleteTask };
