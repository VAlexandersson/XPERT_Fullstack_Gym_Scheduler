import {Router} from 'express';
import * as genericController from '../controllers/genericController';

const router:Router = Router();
export default router;


router.route('/user').get(genericController.getAll('User'));
router.route('/user/:id').get(genericController.getById('User'));
router.route('/user').post(genericController.create('User'));
router.route('/user/:id').delete(genericController.deleteById('User'));
router.route('/user/:id').put(genericController.updateById('User'));


router.route('/exercise').get(genericController.getAll('CatalogExercise'));
router.route('/exercise/:id').get(genericController.getById('CatalogExercise'));
router.route('/exercise').post(genericController.create('CatalogExercise'));
router.route('/exercise/:id').delete(genericController.deleteById('CatalogExercise'));
router.route('/exercise/:id').put(genericController.updateById('CatalogExercise'));


router.route('/workout').get(genericController.getAll('Workout'));
router.route('/workout/:id').get(genericController.getById('Workout'));
router.route('/workout').post(genericController.create('Workout'));
router.route('/workout/:id').delete(genericController.deleteById('Workout'));
router.route('/workout/:id').put(genericController.updateById('Workout'));