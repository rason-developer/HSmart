import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import http from "http";
import router from  "./routes";
import WebSocket from 'ws';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const isValidJSON = (str:any) => {
    try {
        return JSON.parse(str);
        return true;
    }catch(e) {
        return false;
    }
 }



const app = express();

app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());

const port = process.env.PORT || 4455;

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Server Running on http://localhost:${port}/`);
});

const wss = new WebSocket.Server({server:server});
wss.on('connection', function connection(ws) {
    console.log('A new client connected');
    ws.send('Welcome new client!');

    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
        if (isValidJSON(message)) {
            const data = JSON.parse(message.toString());
            console.log("data +:_" + data)
            //switch case so we can handle different types of message
            switch(data.type) {
                case 'device-update':
                    // Broadcast device state update to all clients
                    wss.clients.forEach(client => {
                        if (client.readyState === WebSocket.OPEN) {
                            client.send(JSON.stringify({
                                type: 'device-update',
                                deviceId: data.deviceId,
                                state: data.state
                            }));
                        }
                    });
                    break;
                default:
                    ws.send('Unknown message type');
            }
        }
        else {
            ws.send("Only JSON Format is accepted.");
        }

    });
});

mongoose.Promise = Promise;
mongoose.connect(process.env.MONGOOSE_URL);
mongoose.connection.on("error", (error:Error) => {
    console.log(error);
});

app.use('/', router());
