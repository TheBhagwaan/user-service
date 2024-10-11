import express from 'express';
const userRouter= express.Router()
import { UserController } from '../controllers/userController.js';
import { verifyJWT,verifyPermission } from '../middlewares/authMiddleware.js';
const userController = new UserController();


userRouter.post('/login',userController.login)
userRouter.post('/validate',userController.validateOTP)
userRouter.get('/',verifyJWT,userController.getCurrentUser)
userRouter.get('/all',verifyJWT,userController.getAllUser)
userRouter.patch('/',verifyJWT,userController.updateUser)
userRouter.delete('/:user_id',verifyJWT,verifyPermission,userController.deleteUser)
userRouter.post('/access',userController.genrateAcessToken)

export default userRouter