import express from 'express';
const cartRouter= express.Router()
import { CartController } from '../controllers/cartController.js';
import { verifyJWT } from '../middlewares/authMiddleware.js';
const cartController = new CartController();

cartRouter.post('/add',verifyJWT,cartController.addToCart)
cartRouter.delete('/remove/:cartId',verifyJWT,cartController.removeProduct)
cartRouter.patch('/inc/:cartId',verifyJWT,cartController.incrementProductCount)
cartRouter.patch('/dec/:cartId',verifyJWT,cartController.decrementProductCount)
cartRouter.get('/fetch',verifyJWT,cartController.getCart)

export default cartRouter