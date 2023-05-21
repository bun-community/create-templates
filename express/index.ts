import express from 'express';
import path from 'path';
import * as cookieParser from 'cookie-parser';
import * as logger from 'morgan';
import * as indexRouter from './routes/index';
import * as usersRouter from './routes/users';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter.default);
app.use('/users', usersRouter.default);

export default app;
