import {Router} from 'express';

import * as userController from '../controllers/userController';

const router:Router = Router();

export default router;

router.route('/createUser').post(userController.createUser);
router.route('/login').post(userController.getUser);
router.route('/test').get(userController.testFunction);
router.route('/browse').get(userController.getExercises);
router.route('/browse/:difficulty').get(function (req,res, next)
    /*When a filter is applied, a get request is sent along with a parameter in the URL.
    * Depending on the value of that parameter, we query our database*/
{

})
router.param('difficulty', function (req, res, next, value)
{
    userController.getExercisesOfDifficulty(req, res, value)
    console.log(value);
    next()
})