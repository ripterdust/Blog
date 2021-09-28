import express from "express";
import exphbs from 'express-handlebars';
import path from 'path';
import { router } from './routes/main.router';

// Initializations
export const app = express();


// Settings

app.set('port', process.env.PORT || 8080);
app.set('view', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    defaultLayout: 'main'
}));
app.set('view engine', '.hbs');


// Middlewares

// Routes
app.use('/', router);


