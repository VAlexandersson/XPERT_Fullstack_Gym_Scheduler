import { Router } from 'express';
import * as userController from '../controllers/user-controller';

const router: Router = Router();

router.route('/').post(userController.loginUserController('User'));
router.route('/register').post(userController.registerUserController('User'));

export default router;