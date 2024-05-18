import express from 'express'

import devices from './devices';
import auth from './auth';
import admin from './admin';

const router = express.Router();

export default():express.Router => {
    devices(router);
    auth(router);
    admin(router);
    return router;
}
