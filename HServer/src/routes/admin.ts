import { user_get, users_get } from '../controllers/admin_controller';
import express, {Router} from 'express';

export default(router:express.Router) => {
    router.get("/admin/users", users_get);
    router.get("/admin/user/:id", user_get);
}
