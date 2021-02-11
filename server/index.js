require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

// routers
// const indexRouter = require('./routes/index');
const signupRouter = require('./routes/signup');
const loginRouter = require('./routes/login');
const authenticateRouter = require('./routes/authenticate');

const app = express();
const port = process.env.PORT || 8000;

connectDB();

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
// app.use('/', indexRouter);
app.use('/signup', signupRouter);
app.use('/login', loginRouter);
app.use('/authenticate', authenticateRouter);

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
