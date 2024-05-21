import express, { Router } from 'express';
import { device_delete, device_put, devices_get, devices_post, single_device_get } from '../controllers/devices_controller';
import { authenticateJWT, authorizeRoles } from '../middleware/auth';

export default(router:express.Router) => {
    router.get("/devices",authenticateJWT, authorizeRoles('user', 'admin'), devices_get);
    router.post("/devices", devices_post);
    router.get("/devices/:id", single_device_get);
    router.put("/devices/:id",device_put);
    router.delete("/devices/:id", device_delete);
}

