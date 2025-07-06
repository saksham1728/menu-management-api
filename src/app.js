const express = require('express');
const authRoutes = require('./routes/auth.routes');
const menuRoutes = require('./routes/menu.routes');
const { errorHandler } = require('./middlewares/error.middleware');

const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/menu', menuRoutes);

app.use(errorHandler);

module.exports = app;
