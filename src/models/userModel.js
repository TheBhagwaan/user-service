import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    avatar: {
        type:Object
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    phone: {
        type: Number,
        unique: true,
        trim: true,
    },
    role: {
        type: String,
        enum: ["user","admin","member"],
        default: "user"
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
    loginType: {
        type: String,
        enum: ["GOOGLE","EMAIL_PASSWORD","OTP_BASED"],
        default: "OTP_BASED",
    },
    verificationOTP:{
        type: Number,
        required:true
    },
    isEmailVerified: {
        type: Boolean,
        default: false,
    },
    forgotPasswordOTP: {
        type: String,
    },
    forgotPasswordExpiry: {
        type: Date,
    },
    emailVerificationOTP: {
        type: String,
    },
    emailVerificationExpiry: {
        type: Date,
    },
    isActive:{
        type:Boolean,
        default:true
    }
}, { timestamps: true })

export default mongoose.model('users', schema, 'users')