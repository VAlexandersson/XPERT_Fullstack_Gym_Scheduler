import express, {Express, Request, Response} from 'express';
import cors from 'cors';
import router from './routes';
import { errorHandler } from './error/errorHandler'

const app: Express = express();
const port = 4001;


app
    .use(cors({origin: '*'}))
    .use(express.json())
    .use('/api', router)
    .use(errorHandler);
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

