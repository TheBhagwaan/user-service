import { CrudRepository } from "./index.js";
import { productModel } from "../models/productModel.js";
import { varientModel } from "../models/productModel.js";

export class ProductRepository extends CrudRepository{
    constructor(){
        super(productModel)
    }
}

export class VariantRepository extends CrudRepository{
    constructor(){
        super(varientModel)
    }
}