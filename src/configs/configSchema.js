import Joi from "joi";

export const ValidConfigurationSchema = Joi.object().keys({
    NODE_ENV: Joi.string().valid("development", "staging", "production").default("development").description('node env is missing'),
    PORT: Joi.number().min(1000).default(8080).description('port number is missig'),
    MONGO_CONN_STR: Joi.string().required().description('mongo prefix missing in config file'),
    // JWT_SECRET_KEY: Joi.string().required().description('jwt secret key missing in config file'),
    // RAZORPAY_KEY_ID: Joi.string().required().description('razorpay key id is missing in config file'),
    // RAZORPAY_KEY_SECRET: Joi.string().required().description('razorpay secret key is missing in config file'),
    // BACKEND_REDIRECT_URL: Joi.string().required().description('Backend redirect url is missing in config file'),
    // FRONTEND_REDIRECT_URL: Joi.string().required().description('frontend redirect url is missing in config file')
}).unknown();