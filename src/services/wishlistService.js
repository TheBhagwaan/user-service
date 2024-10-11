import { StatusCodes } from "http-status-codes";
import { WishlistRepository } from "../repositories/wishlistRepository.js";
import { UserRepository } from "../repositories/userReposiroty.js";
import { ProductRepository } from "../repositories/productRepository.js";
import { VariantRepository } from "../repositories/productRepository.js";
import { AppError } from "../utils/hanlders/appError.js";
import mongoose from "mongoose";

export class WishlistService {
    constructor() {
        this.repository = new WishlistRepository();
        this.userRepository = new UserRepository();
        this.productRepository = new ProductRepository();
        this.VariantRepository = new VariantRepository();
    }
    async addRemoveProductFromWishlist(data){
        try {
            let userDetails=await this.repository.getOne(data)
            if(userDetails){
                return await this.repository.deleteById(userDetails._id)
            }else{
                let [userDetails,productDetails,varientDetails]=await Promise.all([
                    this.userRepository.getById(data.userId),
                    this.productRepository.getById(data.productId),
                    this.VariantRepository.getById(data.varientId)
                ])
                if(!userDetails||!productDetails||!varientDetails) throw new AppError(StatusCodes.BAD_REQUEST,"Invalid data")
                return await this.repository.create(data)
            }
        } catch (error) {
            throw new AppError(error.statusCode, error.message, error);
        }
    }
    async  getAllWishlistOfAUser(userId) {
        try {
            let wishList = await this.repository.getWishListAggregation([
                {
                    $match: { userId: new mongoose.Types.ObjectId(userId) }
                },
                {
                    $lookup: {
                        from: "products", // Lookup from the products collection
                        localField: "productId", // Reference to the productId field
                        foreignField: "_id", // Match the _id field in products collection
                        as: "productDetails"
                    }
                },
                {
                    $lookup: {
                        from: "varients", // Lookup from the varients collection
                        localField: "varientId", // Reference to the varientId field
                        foreignField: "_id", // Match the _id field in varients collection
                        as: "variantDetails"
                    }
                },
                {
                    $unwind: "$productDetails" // Unwind productDetails array
                },
                {
                    $unwind: "$variantDetails" // Unwind variantDetails array
                },
                {
                    $project: {
                        _id: 1, // Include _id of the wishlist item
                        "productDetails._id": 1, // Include product _id
                        "productDetails.thumbnail": 1, // Include product thumbnail
                        "productDetails.name": 1, // Include product name
                        "variantDetails.unit": 1, // Include variant unit
                        "variantDetails.sellingPrice": 1, // Include selling price
                        "variantDetails.weight": 1, // Include weight
                        "variantDetails.availableQuantity": 1, // Include available quantity
                        "variantDetails.mrp": 1 // Include MRP
                    }
                }
            ]);
            return wishList;
        } catch (error) {
            throw new AppError(error.statusCode, error.message, error);
        }
    }
    
}