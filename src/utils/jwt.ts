import jwt from 'jsonwebtoken';

export const signToken = (payload: object, secret: string, options: object) => {
    return jwt.sign(payload, secret, options);
};
