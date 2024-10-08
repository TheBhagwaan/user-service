import { CrudRepository } from "./index.js";
import cartModel from '../models/cartModel.js'

export class CartRepository extends CrudRepository{
    constructor(){
        super(cartModel)
    }
}