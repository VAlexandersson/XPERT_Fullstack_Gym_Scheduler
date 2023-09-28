import express, {Express, Request, Response} from 'express';
import cors from 'cors';
import router from './routes';

const app: Express = express();
const port = 4001;


app
    .use(cors({origin: '*'}))
    .use(express.json())
    .use('/api', router)


app.get('/', (req: Request, res: Response) => {
    res.send('XPERT!');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

