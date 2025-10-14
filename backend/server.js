const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');

const authRoutes = require('./src/routes/authRoutes');
const entityRoutes = require('./src/routes/entityRoutes');

app.use(cors());
app.use(express.json());

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/tasks', entityRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
