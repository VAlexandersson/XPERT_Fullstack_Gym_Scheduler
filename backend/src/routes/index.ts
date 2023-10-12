import {Router} from 'express';

import * as userController from '../controllers/userController';
import * as catalogExerciseController from '../controllers/catalogExerciseController';
import * as userExerciseController from '../controllers/userExerciseController';

const router:Router = Router();

export default router;

router.route('/login').post(userController.loginUser);

router.route('/users').get(userController.getAllUsers);
router.route('/users/:id').get(userController.getUser);
router.route('/users').post(userController.createUser);
router.route('/users/:id').delete(userController.deleteUser);
router.route('/users/:id').put(userController.updateUser);


router.route('/catalog_exercise').get(catalogExerciseController.getAllExercises);
router.route('/catalog_exercise/:id').get(catalogExerciseController.getExercise);
router.route('/catalog_exercise').post(catalogExerciseController.createExercise);
router.route('/catalog_exercise/:id').delete(catalogExerciseController.deleteExercise);
router.route('/catalog_exercise/:id').put(catalogExerciseController.updateExercise);
