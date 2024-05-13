import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import http from "http";
import router from  "./routes";

const app = express();

app.use(cors());
app.use(morgan('tiny'));

const server = http.createServer(app);

server.listen(4455, () => {
    console.log("Server Running on http://localhost:4455/");
});

app.use('/', router());
