import express from 'express'

import devices from './devices';


const router = express.Router();

export default():express.Router => {
    devices(router);

    return router;
}
