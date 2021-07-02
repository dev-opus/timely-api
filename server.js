require('dotenv').config();
const express = require('express');

const app = express();
const port = process.env.PORT || 8080;

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use('/api', require('./routes/datetime-routes'));

// 4 oh 4 handler
app.use('*', (req, res, next) => {
  res.status(404).json({
    message: `4 oh 4 not found, cannot ${req.method} ${req.originalUrl} on this API.`,
  });
});

// generic errorhandler
app.use((err, req, res, next) => {
  res.status(500).json({
    error: err.message,
  });
});

app.listen(port, () => console.log(`server started on port ${port}`));
