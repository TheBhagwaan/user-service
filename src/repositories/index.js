import { StatusCodes } from 'http-status-codes';
import { AppError } from '../utils/hanlders/appError.js';

export class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        const response = await this.model.create(data);
        return response;
    }

    async deleteById(id) {
        const response = await this.model.findByIdAndDelete(id);
        if(!response) {
            throw new AppError('Not able to fund the resource',`Api Error`, StatusCodes.NOT_FOUND);
        }
        return response;
    }

    async deleteMany(obj) {
        const response = await this.model.deleteMany(obj);
        if(!response) {
            throw new AppError('Not able to fund the resource',`Api Error`, StatusCodes.NOT_FOUND);
        }
        return response;
    }

    async getById(id) {
        const response = await this.model.findById(id);
        if(!response) {
            throw new AppError('Not able to fund the resource', `Api Error`,StatusCodes.NOT_FOUND);
        }
        return response;
    }

    async getAll(filter) {
        const response = await this.model.find(filter);
        return response;
    }

    async getOne(obj) {
        const response = await this.model.findOne(obj);
        return response;
    }

    async updateById(id,updatedData) { 
        const response = await this.model.findOneAndUpdate({_id:id},updatedData,{new:true})
        return response;
    }
}