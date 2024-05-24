import express, { Router } from 'express';
import { device_delete, device_put, devices_get, devices_post, single_device_get } from '../controllers/devices_controller';
import { authenticateJWT, authorizeRoles } from '../middleware/auth';

export default(router:express.Router) => {
    router.get("/devices",authenticateJWT, authorizeRoles('user', 'admin'), devices_get);
    router.post("/devices",authenticateJWT, authorizeRoles('user', 'admin'), devices_post);
    router.get("/devices/:id",authenticateJWT, authorizeRoles('user', 'admin'), single_device_get);
    router.put("/devices/:id",authenticateJWT, authorizeRoles('user', 'admin'),device_put);
    router.delete("/devices/:id", authenticateJWT, authorizeRoles('user', 'admin'),device_delete);
    //router.get("/device/configuration/:id",authenticateJWT, authorizeRoles('user', 'admin'), device_conf_get);
    //router.post("/device/configuration", authenticateJWT, authorizeRoles('user','admin'), device_conf_post);
    //router.delete("/device/configuration/:id",authenticateJWT, authorizeRoles('user','admin'), device_conf_delete);
}

