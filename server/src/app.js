const express = require('express');
const authRouter = require('./routers/authRouter');
const tokenRouter = require('./routers/tokenRouter');
const morgan = require('morgan');
const app = express();
const cookieParser = require('cookie-parser');
const surpriseRouter = require('./routers/surpriseRouter');

app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRouter);
app.use('/api/tokens', tokenRouter);

app.use('/api/surprises', surpriseRouter);

module.exports = app;
