import express from 'express'
import router from './routes/index.js';
const app = express()
router(app);
app.listen(1314)
module.exports = app;