import express from 'express';
const wishlistRouter= express.Router()
import { WishlistController } from '../controllers/wishlistController.js';
import { verifyJWT } from '../middlewares/authMiddleware.js';
const wishlistController = new WishlistController();

wishlistRouter.post('/',verifyJWT,wishlistController.addRemoveWishList)
wishlistRouter.get('/',verifyJWT,wishlistController.getwishLisOfUser)

export default wishlistRouter