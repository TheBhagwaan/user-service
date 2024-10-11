import express from 'express';
const addressRouter= express.Router()
import { AddressController } from '../controllers/addressController.js';
import { verifyJWT } from '../middlewares/authMiddleware.js';
const addressController = new AddressController();


addressRouter.post('/',verifyJWT,addressController.addAddressOfAUser)
addressRouter.post('/:addressId',verifyJWT,addressController.getSingleAddressOfAUser)
addressRouter.get('/default',verifyJWT,addressController.getDefaultAddressOfAUser)
addressRouter.get('/all',verifyJWT,addressController.getAllAddressOfAUser)
addressRouter.patch('/',verifyJWT,addressController.updateAddressOfAUser)
addressRouter.delete('/',verifyJWT,addressController.deleteAddressOfAUser)


export default addressRouter