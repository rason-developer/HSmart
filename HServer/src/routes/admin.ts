import { authenticateJWT, authorizeRoles } from '../middleware/auth';
import { user_get, users_get } from '../controllers/admin_controller';
import express, {Router} from 'express';

export default(router:express.Router) => {
    router.get("/admin/users",authenticateJWT,authorizeRoles("admin"), users_get);
    router.get("/admin/user/:id",authenticateJWT,authorizeRoles("admin"), user_get);
}
