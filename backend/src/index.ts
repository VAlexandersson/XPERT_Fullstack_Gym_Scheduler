import express, {Express, Request, Response} from 'express';
import cors from 'cors';
import router from "./routes";


const app: Express = express();
const port = 4001;


app
    .use(cors({origin: '*'}))
    .use(express.json())
    .use('/api', router)


app.get('/', (req: Request, res: Response) => {
    res.send("Hello World!");
});

app.post('/sing-up', function requestHandler(req, res) {
    res.end('Hello, World!');
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

