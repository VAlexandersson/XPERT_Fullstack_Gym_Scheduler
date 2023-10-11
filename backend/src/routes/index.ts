import {Router} from 'express';

import * as userController from '../controllers/userController';

const router:Router = Router();

export default router;

router.route('/createUser').post(userController.createUser);
router.route('/login').post(userController.getUser);
router.route('/test').get(userController.getAllUsers);
