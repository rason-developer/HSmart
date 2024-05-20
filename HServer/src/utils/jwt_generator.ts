import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../utils/constants';

export const generateToken = (user: any) => {
    return jwt.sign(
        {
            id: user._id,
            username: user.username,
            roles: user.roles
        },
        JWT_SECRET,
        { expiresIn: '1h' }
    );
};
