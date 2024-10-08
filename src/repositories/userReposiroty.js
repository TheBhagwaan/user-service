import { CrudRepository } from "./index.js";
import userModel from '../models/userModel.js'

export class UserRepository extends CrudRepository{
    constructor(){
        super(userModel)
    }
}