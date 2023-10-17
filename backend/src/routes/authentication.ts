import { Router } from 'express';
import * as userController from '../controllers/auth-controller';

const router: Router = Router();

router.route('/login').post(userController.loginUserController('User'));
router.route('/logout').post(userController.logoutUserController('User'));
router.route('/register').post(userController.registerUserController('User'));
router.route('/check').get(userController.checkUserController('User'));

export default router;