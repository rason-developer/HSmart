
import { register } from '../controllers/auth.controller';
import express, {Router} from 'express';

export default(router:express.Router) => {
    router.post("/register", register);
}
