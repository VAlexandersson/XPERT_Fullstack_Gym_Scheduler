import express, {Express, Request, Response} from 'express';
import session from 'express-session';
import cors from 'cors';
import SQLiteStore from 'connect-sqlite3';


import { errorHandler } from './middleware/error'
import { isAuthenticated } from './middleware/auth';

import router from './routes/api-routing';
import authRouter from './routes/authentication';

const SQLite3Store = SQLiteStore(session);



const app: Express = express();
const port = 4001;

app.use(session({
    store: new SQLite3Store({
        db: 'sessiondb.sqlite'
    }) as session.Store,
    secret: 'BuggersAndCum',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60,
//         httpOnly: false,
         secure: false
    },
}));


app
    .use(cors({origin: '*'}   ))
    .use(express.json())
    .use(errorHandler);

    // Routes
app
    .use('/api', router)
    .use('/auth', authRouter);
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

