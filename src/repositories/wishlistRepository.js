import { CrudRepository } from "./index.js";
import wishlistModel from '../models/wishlistModel.js'

export class WishlistRepository extends CrudRepository{
    constructor(){
        super(wishlistModel)
    }
}