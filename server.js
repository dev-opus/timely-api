import express, { json, urlencoded } from 'express';
import { router } from './routes/datetime-routes.js';

const app = express();
const port = process.env.PORT || 8080;

import cors from 'cors';

// middlewares
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cors());

// routes
app.use('/api', router);

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
