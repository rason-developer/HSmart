
import { register, login } from '../controllers/auth.controller';
import express, {Router} from 'express';

export default(router:express.Router) => {
    router.post("/register", register);
    router.post("/login",login);
}
