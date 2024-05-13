import express from 'express';
import { testController } from '../controllers/test_controller';

export default(router: express.Router) => {
    router.get("/test", testController)
}
