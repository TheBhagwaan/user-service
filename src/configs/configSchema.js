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
    "BUCKET_NAME": Joi.string().required().description('aws bucket missing in config file'),
    "AWS_ACCESS_KEY_ID": Joi.string().required().description('aws access key id is missing in config file'),
    "AWS_SECRET_ACCESS_KEY": Joi.string().required().description('aws secret key missing in config file'),
    "AWS_DEFAULT_REGION": Joi.string().required().description('aws region is missing in config file'),
    "OTP_EXP": Joi.number().required().description('OTP exp time missing in config file'),
    "SMS_API_KEY": Joi.string().required().description('sms api key is  missing in config file'),
    "SMS_USERNAME": Joi.string().required().description('sms username is missing in config file'),
    "URI": Joi.string().required().description('sms uri is missing in config file'),
    "PHONE": Joi.number().required().description('sms phone number is missing in config file'),
    "TEMPLATE_ID": Joi.string().required().description('sms templete id is missing in config file'),
    "SENDER_ID": Joi.string().required().description('sms sender id is missing in config file'),
    "REFRESH_TOKEN_EXPIRY": Joi.string().required().description('refresh token expiry is missing in config file'),
    "ACCESS_TOKEN_EXPIRY": Joi.string().required().description('access token expiry is missing in config file'),
    "VERIFICATION_TOKEN_TTL" : Joi.string().required().description('email verification ttl is missing in config file'),
    "REFRESH_TOKEN_SECRET": Joi.string().required().description('refresh token secret is missing in config file'),
    "ACCESS_TOKEN_SECRET": Joi.string().required().description('access token secret is missing in config file'),
    "EMAIL_VERIFICATION_SECRET" : Joi.string().required().description('email verification secret is missing in config file'),
    "SMTP_HOST": Joi.string().required().description('smtp host is missing in config file'),
    "SMTP_PORT": Joi.number().required().description('smtp port is missing in config file'),
    "SMTP_USERNAME": Joi.string().required().description('smtp user name is missing in config file'),
    "SMTP_PASSWORD": Joi.string().required().description('smtp password is missing in config file'),
    "EMAIL_FROM": Joi.string().required().description('email is missing in config file'),
    "FRONTEND_URL" : Joi.string().required().description('frontend url missing in config file'),
    "BACKEND_URL" : Joi.string().required().description('backend url missing in config file'),
    "ADMIN_URL" : Joi.string().required().description('admin url missing in config file'),
}).unknown();