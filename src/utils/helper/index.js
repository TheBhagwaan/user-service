import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import env from '../env.js';

export class Helper {
    static generateInvoiceNumber() {
        let number = Math.round(Math.random() * 10000000)
        let year = new Date().getFullYear()
        if (new Date().getMonth() >= 3) {
            return `FST/${number}/${year}-${year + 1}`;
        } else {
            return `FST/${number}/${year - 1}-${year}`;
        }
    }
    static async generateEncryptedPassword(password) {
        return await bcrypt.hash(password, env.SALT_ROUND)
    }

    static async validateThePassword(enteredPassword, savedPassword) {
        return await bcrypt.compare(enteredPassword, savedPassword)
    };

    static async generateAccessToken(user) {
        return jwt.sign(
            {
                unique_id: user.id,
                role: user.role,
                is_active: user.is_active,
                iat: Date.now() / 1000
            },
            env.ACCESS_TOKEN_SECRET,
            { expiresIn: env.ACCESS_TOKEN_TTL }
        );
    };

    static async generateRefreshToken(user) {
        return jwt.sign(
            {
                user_id: user.id,
            },
            env.REFRESH_TOKEN_SECRET,
            { expiresIn: env.REFRESH_TOKEN_TTL }
        );
    };
    static async generateAccessAndRefreshTokens(user) {

        const accessToken = generateAccessToken(user);
        const refreshToken = generateRefreshToken(user);

        return { accessToken, refreshToken };

    };

    static async generatePasswordResetToken(email) {
        return jwt.sign({ email: email }, env.PASSWORD_RESET_SECRET, { expiresIn: env.RESET_TOKEN_TTL });
    }

    static async decodeAccessToken(accessToken) {
        return jwt.verify(accessToken, env.ACCESS_TOKEN_SECRET);
    }

    static async decodeRefreshToken(refreshToken) {
        return jwt.verify(refreshToken, env.REFRESH_TOKEN_SECRET);
    }

    static async decodeResetToken(resetToken) {
        return jwt.verify(resetToken, env.PASSWORD_RESET_SECRET)
    }
}