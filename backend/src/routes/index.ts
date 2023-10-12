import {Router} from 'express';

import * as userController from '../controllers/userController';

const router:Router = Router();

export default router;

router.route('/createUser').post(userController.createUser);
router.route('/login').post(userController.loginUser);
router.route('/deleteUser').delete(userController.deleteUser);
router.route('/getAllUsers').get(userController.getAllUsers);
router.route('/updateUser').put(userController.updateUser);